import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get user with ID ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create new user', data: req.body });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update user with ID ${req.params.id}`, data: req.body });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user with ID ${req.params.id}` });
});

export default router;
