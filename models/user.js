import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, "must enter a username"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    },
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    roles: {
      type: [String],
      enum: ['basic', 'admin'],
      default: ['basic'],
    },
    password_digest: { type: String, required: true, select: false },
    products: [{ type: Schema.Types.ObjectId, ref: "products" }],
    wishList: [{ type: Schema.Types.ObjectId, ref: "products" }],
  },
  { timestamps: true }
);
export default mongoose.model("users", User);
