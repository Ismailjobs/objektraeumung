# Click Fraud Protection – Environment Variables

Add these to your `.env` in the `server` folder.

## Required for Google Ads blocking

| Variable | Description |
|----------|-------------|
| `GOOGLE_ADS_CLIENT_ID` | OAuth client ID (e.g. `xxx.apps.googleusercontent.com`) |
| `GOOGLE_ADS_CLIENT_SECRET` | OAuth client secret |
| `GOOGLE_ADS_DEVELOPER_TOKEN` | Google Ads API developer token |
| `GOOGLE_ADS_REFRESH_TOKEN` | OAuth refresh token |
| `GOOGLE_ADS_CUSTOMER_ID` | Ads customer ID (with or without dashes) |

## Optional

| Variable | Description |
|----------|-------------|
| `GOOGLE_ADS_LOGIN_CUSTOMER_ID` | MCC / manager account ID if using one |
| `GOOGLE_ADS_CAMPAIGN_IDS` | Comma-separated campaign IDs to add IP blocks to. If omitted, all ENABLED campaigns are used. |
| `TELEGRAM_BOT_TOKEN` | Bot token for alerts |
| `TELEGRAM_CHAT_ID` | Chat ID to send alerts to |

If Telegram vars are set, a message is sent when an IP is blocked.
