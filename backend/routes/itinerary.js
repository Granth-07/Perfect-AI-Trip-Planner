import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all itinerary items' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get itinerary item with ID ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create new itinerary item', data: req.body });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update itinerary item with ID ${req.params.id}`, data: req.body });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete itinerary item with ID ${req.params.id}` });
});

export default router;
