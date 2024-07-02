import express from 'express';
import Items from '../../db/models/itemsSchema.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const body = { ...req.body };
    const items = await Items.create(body);
    return res.status(201).json({ items });
  } catch (e) {
    res.status(400).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Items.find({ category: id });
    res.status(200).json(item);
  } catch (e) {
    res.status(400).json(e);
  }
});

export default router;
