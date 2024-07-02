import express from 'express';
import Categrory from '../../db/models/categrorySchema.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const body = { ...req.body };
    console.log(body);
    const categrory = await Categrory.create(body);
    return res.status(201).json({ categrory });
  } catch (e) {
    res.status(400).json(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const categrories = await Categrory.find();
    res.status(200).json(categrories);
  } catch (e) {
    res.status(400).json(e);
  }
});

export default router;
