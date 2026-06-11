import mongoose, { Schema, Document, Model } from "mongoose";

export interface IClickFraudBan extends Document {
  ip: string;
  firstDetectedAt: Date;
  lastDetectedAt: Date;
  source?: "cloudflare_worker" | "server";
  lastReason?: string;
  lastGclid?: string;
  clicksLastHour: number;
  blockedInGoogleAds: boolean;
  blockedInGoogleAdsAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ClickFraudBanSchema = new Schema<IClickFraudBan>(
  {
    ip: { type: String, required: true, unique: true, index: true },
    firstDetectedAt: { type: Date, required: true },
    lastDetectedAt: { type: Date, required: true },
    source: { type: String },
    lastReason: { type: String },
    lastGclid: { type: String },
    clicksLastHour: { type: Number, required: true },
    blockedInGoogleAds: { type: Boolean, required: true, default: false },
    blockedInGoogleAdsAt: { type: Date },
  },
  { collection: "click_fraud_bans", timestamps: true }
);

export const ClickFraudBan: Model<IClickFraudBan> =
  mongoose.models.ClickFraudBan ??
  mongoose.model<IClickFraudBan>("ClickFraudBan", ClickFraudBanSchema);

