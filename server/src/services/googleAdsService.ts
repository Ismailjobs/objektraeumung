import { excludeIpInGoogleAds } from "./protectionService.js";

/**
 * Google Ads service wrapper used by webhook.
 * Keeps a stable interface: googleAdsService.blockIpOnGoogleAds(ip)
 */
export const googleAdsService = {
  async blockIpOnGoogleAds(ip: string): Promise<void> {
    await excludeIpInGoogleAds(ip);
  },
};

