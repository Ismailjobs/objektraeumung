import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVisitLog extends Document {
  ip: string;
  gclid?: string;
  timestamp: Date;
  userAgent?: string;
}

const VisitLogSchema = new Schema<IVisitLog>(
  {
    ip: { type: String, required: true, index: true },
    gclid: { type: String },
    timestamp: { type: Date, required: true, default: Date.now, index: true },
    userAgent: { type: String },
  },
  { collection: "visit_logs" }
);

// Compound index for "clicks per IP in last 1 hour" queries
VisitLogSchema.index({ ip: 1, timestamp: -1 });

export const VisitLog: Model<IVisitLog> =
  mongoose.models.VisitLog ??
  mongoose.model<IVisitLog>("VisitLog", VisitLogSchema);
