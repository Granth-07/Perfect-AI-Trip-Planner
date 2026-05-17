import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // add this line

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// MongoDB connection and schema (unchanged)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

const tripSchema = new mongoose.Schema({
  userId: String,
  destination: String,
  budget: Number,
  duration: Number,
  preferences: String,
  itinerary: String,
}, { timestamps: true });

const Trip = mongoose.model("Trip", tripSchema);

// Replace OpenAI route with Ollama
app.post("/api/trip-plan", async (req, res) => {
  const { destination, budget, duration, preferences } = req.body;

  if (!destination || !budget || !duration) {
    return res.status(400).json({ error: "Missing required parameters." });
  }

  const prompt = `You are a helpful travel assistant. Create a ${duration}-day trip itinerary for ${destination}, budget $${budget}. Preferences: ${preferences}. Include must-see sights, dining, and activities.`;

  try {
    // Call Ollama local LLM API (change model if you use another one)
    const ollamaRes = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3', // change to whatever you have pulled
        prompt,
        stream: false
      })
    });

    if (!ollamaRes.ok) {
      const error = await ollamaRes.text();
      throw new Error("Ollama error: " + error);
    }

    const data = await ollamaRes.json();
    const itineraryText = data.response;
    res.json({ itinerary: itineraryText });

  } catch (error) {
    console.error("Ollama API error:", error);
    res.status(500).json({ error: "Failed to generate itinerary" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
