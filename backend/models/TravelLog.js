import mongoose from 'mongoose';

const TravelLogSchema = new mongoose.Schema({
  tripId:         { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  itineraryItemId:{ type: mongoose.Schema.Types.ObjectId, ref: 'ItineraryItem' },
  date:           { type: Date, default: Date.now },
  text:           { type: String },
  photos:         [String],
  createdAt:      { type: Date, default: Date.now }
});

export default mongoose.model('TravelLog', TravelLogSchema);
