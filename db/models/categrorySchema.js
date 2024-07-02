import { Schema, model } from 'mongoose';

const categorySchema = Schema(
  {
    name: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

const Categrory = model('Categrory', categorySchema);

export default Categrory;
