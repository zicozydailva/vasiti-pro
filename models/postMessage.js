import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    name: String,
    location: String,
    text: String,
    image: String,
    category: { type: String, enum: ["vendor", "customer"], default: "customer" },
  },
  { timestamps: true }
);

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
