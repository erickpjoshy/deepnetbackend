import { Schema, model } from 'mongoose';

const sitePlanSchema = Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  images: {
    type: Array,
    trim: true,
    required: true,
  },
});
const SitePlan = model('SitePlan', sitePlanSchema);

export default SitePlan;
