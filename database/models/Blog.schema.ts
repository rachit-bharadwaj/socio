import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    bannerImage: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema, "blogs");
