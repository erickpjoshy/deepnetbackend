import express from 'express';
import NewsAndEvents from '../../db/models/newsAndEventsSchema.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const body = { ...req.body };
    // console.log(body);
    const NewsAndEvent = await NewsAndEvents.create(body);
    res.status(201).json(NewsAndEvent);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const NewsAndEvent = await NewsAndEvents.find();
    res.status(200).json(NewsAndEvent);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const builderCard = await BlogCard.findById(id).populate([
//       'logo',
//       'qrcode',
//       'siteplan',
//       'statusgallery',
//       'gallery',
//     ]);
//     res.status(200).json(builderCard);
//   } catch (e) {
//     res.status(400).json(e.message);
//   }
// });

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const NewsAndEvent = await NewsAndEvents.findByIdAndDelete(id);
    res.status(204).json({ message: 'NewsAndEvent deleted' });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

export default router;
