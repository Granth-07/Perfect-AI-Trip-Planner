import mongoose from 'mongoose';

const TripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  tripType: { type: String, enum: ['solo', 'group'], required: true },
  preferences: { type: [String] },
  aiPlan: { type: String },  // AI generated plan text
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Trip', TripSchema);
