import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema(
  {
    "username": {
      "type": String,
      "required": true,
    },
    "email": { type: String, required: true },
    "password_digest": { type: String, required: true, select: false },
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
    wishlist: [{ type: Schema.Types.ObjectId, ref: 'products' }],
  },
  { timestamps: true }
)
export default mongoose.model('users', User)