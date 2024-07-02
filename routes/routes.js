import express from 'express';
import CategoryRoute from './categrory/index.js';
import ItemRoute from './items/index.js';

const router = express.Router();

router.use('/category', CategoryRoute);
router.use('/item', ItemRoute);

export default router;
