import { sendTelegramAlert } from "./protectionService.js";

/**
 * Telegram service wrapper used by webhook.
 * Keeps a stable interface: telegramService.sendAlert(message)
 */
export const telegramService = {
  async sendAlert(message: string): Promise<void> {
    await sendTelegramAlert(message);
  },
};

