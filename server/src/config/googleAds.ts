/**
 * Google Ads API client setup for Click Fraud Protection.
 * Requires in .env: GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_DEVELOPER_TOKEN,
 * GOOGLE_ADS_REFRESH_TOKEN, GOOGLE_ADS_CUSTOMER_ID (without dashes), GOOGLE_ADS_LOGIN_CUSTOMER_ID (optional, for MCC).
 */

import { GoogleAdsApi } from "google-ads-api";

const clientId = process.env.GOOGLE_ADS_CLIENT_ID;
const clientSecret = process.env.GOOGLE_ADS_CLIENT_SECRET;
const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
const refreshToken = process.env.GOOGLE_ADS_REFRESH_TOKEN;
const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID;
const loginCustomerId = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID; // MCC, if using manager account

function stripDashes(id: string | undefined): string | undefined {
  if (!id) return undefined;
  return id.replace(/-/g, "");
}

export const googleAdsConfig = {
  clientId,
  clientSecret,
  developerToken,
  refreshToken,
  customerId: stripDashes(customerId),
  loginCustomerId: stripDashes(loginCustomerId),
} as const;

export type GoogleAdsConfig = typeof googleAdsConfig;

/** True if all required credentials are present for Google Ads API calls. */
export function isGoogleAdsConfigured(): boolean {
  return !!(
    googleAdsConfig.clientId &&
    googleAdsConfig.clientSecret &&
    googleAdsConfig.developerToken &&
    googleAdsConfig.refreshToken &&
    googleAdsConfig.customerId
  );
}

let _client: GoogleAdsApi | null = null;

/**
 * Returns a GoogleAdsApi client instance. Only created when credentials are configured.
 */
export function getGoogleAdsClient(): GoogleAdsApi | null {
  if (!isGoogleAdsConfigured()) return null;
  if (_client) return _client;
  _client = new GoogleAdsApi({
    client_id: googleAdsConfig.clientId!,
    client_secret: googleAdsConfig.clientSecret!,
    developer_token: googleAdsConfig.developerToken!,
  });
  return _client;
}

/**
 * Returns a Customer instance for the configured customer ID (with refresh token).
 * Use this for CampaignCriterionService and other API calls.
 */
export function getGoogleAdsCustomer() {
  const client = getGoogleAdsClient();
  if (!client || !googleAdsConfig.refreshToken || !googleAdsConfig.customerId) {
    return null;
  }
  return client.Customer({
    customer_id: googleAdsConfig.customerId,
    refresh_token: googleAdsConfig.refreshToken,
    login_customer_id: googleAdsConfig.loginCustomerId ?? undefined,
  });
}
