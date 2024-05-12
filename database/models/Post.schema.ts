import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    caption: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],

    likes: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

export default mongoose.models.Post ||
  mongoose.model("Post", PostSchema, "posts");
