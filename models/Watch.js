import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const ReviewSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  user_comment: { type: String },
  rating: { type: Number, min: 0, max: 5, required: true },
}, { timestamps: true });

const WatchSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  title: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  images: { type: [String], required: true },
  technical_specs: {
    dial_size: { type: String },
    strap_material: { type: String },
    water_resistance: { type: String },
    movement_type: { type: String },
    battery_life: { type: String },
    features: { type: [String] },
  },
  sku: { type: String, unique: true },
  manufacturer: { type: String },
  country_of_origin: { type: String },
  warranty_period: { type: String },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  inventory: {
    quantity_in_stock: { type: Number, required: true, min: 0 },
  },
  shipping: {
    delivery_time: { type: String },
    charges: { type: Number },
    options: { type: [String] },
  },
  reviews: [ReviewSchema],
}, { timestamps: true });

export default mongoose.model("Watch", WatchSchema);
