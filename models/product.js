import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    keywords: [],
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    details: [],
    price: { type: String, required: true },
    productURL: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('products', Product)
