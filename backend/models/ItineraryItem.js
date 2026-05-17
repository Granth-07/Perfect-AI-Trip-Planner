import mongoose from 'mongoose';

const ItineraryItemSchema = new mongoose.Schema({
  tripId:       { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  day:          { type: Number, required: true },
  title:        { type: String, required: true },
  description:  { type: String },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  startTime:    { type: String },
  endTime:      { type: String },
  createdAt:    { type: Date, default: Date.now }
});

ItineraryItemSchema.index({ location: '2dsphere' });

export default mongoose.model('ItineraryItem', ItineraryItemSchema);
