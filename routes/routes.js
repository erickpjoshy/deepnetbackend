import express from 'express';
import imageRoute from './image/image.js';
import sliderRouter from './homeSlider/index.js';
import stateRouter from './location/index.js';
import logoSchema from './Logo/index.js';
import qrCodeSchema from './QRCode/index.js';
import gallerySchema from './Gallery/index.js';
import builderCardSchema from './BuilderCard/index.js';
const router = express.Router();

router.use('/upload', imageRoute);
router.use('/slider', sliderRouter);
router.use('/location', stateRouter);
router.use('/logo', logoSchema);
router.use('/qrcode', qrCodeSchema);
router.use('/image', gallerySchema);
router.use('/buildercard', builderCardSchema);

export default router;
