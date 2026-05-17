import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all travel logs' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get travel log with ID ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create new travel log', data: req.body });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update travel log with ID ${req.params.id}`, data: req.body });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete travel log with ID ${req.params.id}` });
});

export default router;
