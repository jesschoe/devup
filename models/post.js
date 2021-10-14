import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    hashtags: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.model('posts', Post)
