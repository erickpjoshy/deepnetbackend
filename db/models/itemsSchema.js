import { Schema, model } from 'mongoose';

const itemsSchema = Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, trim: true, required: true },
    price: { type: String, trim: true },
    varients: { type: String, trim: true },
  },
  { timestamps: true }
);

const Items = model('Items', itemsSchema);

export default Items;
