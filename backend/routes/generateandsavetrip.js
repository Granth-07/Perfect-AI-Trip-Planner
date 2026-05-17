import express from 'express';
import Trip from '../models/Trip.js';
import { spawn } from 'child_process';

const router = express.Router();

router.post('/generate-and-save-trip', (req, res) => {
  console.log('Received generate-and-save-trip request:', req.body);

  const { userId, destination, budget, duration, travelers, tripType, preferences } = req.body;

  if (!userId || !destination) {
    console.warn('Missing userId or destination');
    return res.status(400).json({ error: 'userId and destination are required' });
  }

  const prompt = `Create a detailed ${duration}-day trip plan for ${travelers} traveler(s) to ${destination} with a budget of $${budget}. Include hotels, top attractions, daily itinerary, and travel tips.`;

  const ollama = spawn('ollama', ['run', 'llama3.1:latest', prompt]);

  let output = '';
  let errorOutput = '';
  let timeoutOccured = false;

  // Timeout: kill ollama if it hangs longer than 30 seconds
  const timeout = setTimeout(() => {
    timeoutOccured = true;
    ollama.kill('SIGTERM');
    console.error('Ollama process timed out');
    res.status(504).json({ error: 'AI generation timed out' });
  }, 30000);

  ollama.stdout.on('data', (data) => {
    output += data.toString();
  });

  ollama.stderr.on('data', (data) => {
    errorOutput += data.toString();
  });

  ollama.on('close', async (code) => {
    clearTimeout(timeout);

    if (timeoutOccured) return;

    if (code !== 0) {
      console.error('Ollama CLI error:', errorOutput);
      return res.status(500).json({ error: 'AI generation failed.', details: errorOutput });
    }

    try {
      const startDate = new Date();
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + duration - 1);

      const newTrip = new Trip({
        userId,
        destination,
        startDate,
        endDate,
        tripType,
        preferences,
        aiPlan: output.trim(),
      });

      await newTrip.save();

      console.log('Trip saved successfully:', newTrip._id);
      res.json({ success: true, trip: newTrip });
    } catch (err) {
      console.error('Failed to save trip:', err);
      res.status(500).json({ error: 'Failed to save trip in database' });
    }
  });
});

export default router;
