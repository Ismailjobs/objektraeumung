/**
 * Click Fraud Protection Service:
 * - Sadece gclid ile gelen (Google Ads tıklaması) ziyaretler VisitLog'a yazılır.
 * - Aynı IP'den 1 saatte 3'ten fazla böyle tıklama varsa → Google Ads'de IP engellenir + Telegram.
 * - Normal ziyaretler (gclid yok) hiç loglanmaz.
 */

import { VisitLog } from "../models/VisitLog.js";
import { ClickFraudBan } from "../models/ClickFraudBan.js";
import {
  getGoogleAdsCustomer,
  googleAdsConfig,
  isGoogleAdsConfigured,
} from "../config/googleAds.js";

const CLICKS_THRESHOLD = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

/** Normalize IPv6 for storage/display (optional). */
function normalizeIp(ip: string): string {
  const trimmed = (ip || "").trim();
  if (!trimmed) return "";
  // Optional: normalize IPv6 (e.g. ::ffff:192.168.1.1 -> 192.168.1.1 for internal consistency)
  if (trimmed.startsWith("::ffff:")) return trimmed.slice(7);
  return trimmed;
}

/**
 * Returns how many visits from this IP occurred in the last 1 hour.
 */
export async function getClickCountLastHour(ip: string): Promise<number> {
  const normalized = normalizeIp(ip);
  if (!normalized) return 0;
  const since = new Date(Date.now() - WINDOW_MS);
  return VisitLog.countDocuments({ ip: normalized, timestamp: { $gte: since } });
}

/**
 * Sadece Google Ads tıklaması (gclid) ile çağrılır. Normal ziyaret kaydı yapılmaz.
 */
export async function recordVisit(params: {
  ip: string;
  gclid: string;
  userAgent?: string;
}): Promise<void> {
  const ip = normalizeIp(params.ip);
  if (!ip || !params.gclid?.trim()) return;
  await VisitLog.create({
    ip,
    gclid: params.gclid.trim(),
    userAgent: params.userAgent,
    timestamp: new Date(),
  });
}

/**
 * Returns true if this IP should be treated as fraudulent (e.g. > CLICKS_THRESHOLD in 1 hour).
 */
export async function shouldBlockIp(ip: string): Promise<boolean> {
  const count = await getClickCountLastHour(ip);
  return count > CLICKS_THRESHOLD;
}

/**
 * Fetches enabled campaign IDs for the configured customer.
 * Uses GOOGLE_ADS_CAMPAIGN_IDS env (comma-separated) if set; otherwise queries API for ENABLED campaigns.
 */
async function getCampaignIdsToBlock(): Promise<string[]> {
  const envIds = process.env.GOOGLE_ADS_CAMPAIGN_IDS;
  if (envIds && envIds.trim()) {
    return envIds.split(",").map((id) => id.trim()).filter(Boolean);
  }
  const customer = getGoogleAdsCustomer();
  if (!customer) return [];
  try {
    const rows = await customer.query(`
      SELECT campaign.id
      FROM campaign
      WHERE campaign.status = 'ENABLED'
      LIMIT 100
    `);
    // google-ads-api typings allow campaign to be null; keep this null-safe for production builds.
    return (rows as unknown[])
      .map((r) => String((r as any)?.campaign?.id ?? ""))
      .filter(Boolean);
  } catch (err) {
    // If we can't list campaigns, we can't guarantee the IP was excluded.
    console.error("[protectionService] list campaigns error:", err);
    throw err;
  }
}

/**
 * Adds a negative campaign criterion (IP block) for the given IP on the given campaign.
 * Handles "already exists" / duplicate errors without throwing.
 */
async function addIpBlockToCampaign(
  customerId: string,
  campaignId: string,
  ipAddress: string
): Promise<{ ok: boolean; alreadyExists?: boolean }> {
  const customer = getGoogleAdsCustomer();
  if (!customer) return { ok: false };

  const cleanCustomerId = customerId.replace(/-/g, "");
  const campaignResourceName = `customers/${cleanCustomerId}/campaigns/${campaignId}`;

  try {
    const operations = [
      {
        entity: "campaign_criterion" as const,
        operation: "create" as const,
        resource: {
          campaign: campaignResourceName,
          negative: true,
          ip_block: {
            ip_address: ipAddress,
          },
        },
      },
    ];
    await (customer as { mutateResources: (ops: unknown[]) => Promise<unknown> }).mutateResources(operations);
    return { ok: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    const errObj = err as { errors?: Array<{ error_code?: { campaign_criterion_error?: string } }> };
    const code = errObj?.errors?.[0]?.error_code?.campaign_criterion_error;
    if (
      msg.includes("DUPLICATE") ||
      msg.includes("already exists") ||
      code === "DUPLICATE_CRITERION" ||
      code === "CRITERION_TYPE_NOT_ALLOWED_FOR_NEGATIVE_TARGETING"
    ) {
      return { ok: false, alreadyExists: true };
    }
    console.error("[protectionService] addIpBlockToCampaign error:", err);
    throw err;
  }
}

/**
 * Excludes the given IP in Google Ads by adding a negative IP block criterion to active campaigns.
 * Handles "already blocked" gracefully. Does nothing if Google Ads is not configured.
 */
export async function excludeIpInGoogleAds(ip: string): Promise<void> {
  const normalized = normalizeIp(ip);
  if (!normalized) return;
  if (!isGoogleAdsConfigured()) return;

  const customerId = googleAdsConfig.customerId;
  if (!customerId) return;

  const campaignIds = await getCampaignIdsToBlock();
  if (campaignIds.length === 0) {
    throw new Error("No ENABLED campaigns found to add IP block to.");
  }

  for (const campaignId of campaignIds) {
    try {
      const result = await addIpBlockToCampaign(customerId, campaignId, normalized);
      if (result.ok) {
        console.log(`Protected`);
      } else if (result.alreadyExists) {
        console.log(`Ip is already blocked on campaign ${campaignId}`);
      }
    } catch (err) {
      console.error(`[protectionService] Failed to block IP on campaign ${campaignId}:`, err);
      // Continue with other campaigns
    }
  }
}

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function isTelegramConfigured(): boolean {
  return !!(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID);
}

/**
 * Sends a Telegram message. No-op if token or chat ID is missing.
 */
export async function sendTelegramAlert(message: string): Promise<void> {
  if (!isTelegramConfigured()) return;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      console.error("[protectionService] Telegram send failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("[protectionService] Telegram request error:", err);
  }
}

/**
 * Main protection flow: if IP has > 3 clicks in 1 hour, exclude in Google Ads and send Telegram alert.
 * Call this after recording the visit (e.g. from middleware).
 */
export async function runProtectionFlow(params: {
  ip: string;
  gclid?: string;
  userAgent?: string;
}): Promise<void> {
  const ip = normalizeIp(params.ip);
  if (!ip) return;

  const clicksLastHour = await getClickCountLastHour(ip);
  const shouldBlock = clicksLastHour > CLICKS_THRESHOLD;
  if (!shouldBlock) return;

  // Store ban info in MongoDB (separate from access-control bans).
  const now = new Date();
  await ClickFraudBan.findOneAndUpdate(
    { ip },
    {
      $setOnInsert: { firstDetectedAt: now },
      $set: {
        lastDetectedAt: now,
        lastGclid: params.gclid,
        clicksLastHour,
      },
    },
    { upsert: true, new: true }
  );

  await excludeIpInGoogleAds(ip);
  await ClickFraudBan.findOneAndUpdate(
    { ip },
    { $set: { blockedInGoogleAds: true, blockedInGoogleAdsAt: now } },
    { upsert: true }
  );
  await sendTelegramAlert(
    `🛡️ Click fraud protection: IP \`${ip}\` exceeded ${CLICKS_THRESHOLD} clicks in 1 hour. Blocked in Google Ads.`
  );
}
