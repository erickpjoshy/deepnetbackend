import { Schema, model } from 'mongoose';

const statusGallerySchema = Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    trim: true,
    required: true,
  },
  images: {
    type: Array,
    trim: true,
    required: true,
  },
});
const StatusGallery = model('StatusGallery', statusGallerySchema);

export default StatusGallery;
