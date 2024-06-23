import { Schema, model } from 'mongoose';

const builderCardSchema = Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  district: {
    type: String,
    trim: true,
    required: true,
  },
  permitno: {
    type: String,
    trim: true,
    required: true,
  },
  images: {
    type: Array,
    trim: true,
    required: true,
  },
  logo: {
    type: Schema.Types.ObjectId,
    ref: 'Logo',
    trim: true,
    required: true,
  },
  qrcode: {
    type: Schema.Types.ObjectId,
    ref: 'QRCode',
    trim: true,
    required: true,
  },
  gallery: {
    type: Schema.Types.ObjectId,
    ref: 'Gallery',
    trim: true,
    required: true,
  },
  siteplan: {
    type: Schema.Types.ObjectId,
    ref: 'SitePlan',
    trim: true,
    required: true,
  },
  statusgallery: {
    type: Schema.Types.ObjectId,
    ref: 'StatusGallery',
    trim: true,
    required: true,
  },
  location: {
    type: String,
    trim: true,
    required: true,
  },
  areaRange: {
    type: String,
    trim: true,
    required: true,
  },
  apartmenttype: {
    type: String,
    trim: true,
    required: true,
  },
  kreranumber: {
    type: String,
    trim: true,
    required: true,
  },
  whatsappno: {
    type: Number,
    trim: true,
    required: true,
  },
  telephoneno: {
    type: Number,
    trim: true,
    required: true,
  },
  locationurl: {
    type: String,
    trim: true,
    required: true,
  },
  youtube: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },
});

const BuilderCard = model('BuilderCard', builderCardSchema);

export default BuilderCard;
