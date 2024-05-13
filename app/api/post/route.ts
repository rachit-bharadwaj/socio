import { type NextRequest, NextResponse } from "next/server";

import connectDB from "@/database/connection/mongoose";
import Post from "@/database/models/Post.schema";

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();

    const reqBody = await request.json();

    const { caption, images, likes } = reqBody;

    const newPost = new Post({
      caption,
      images,
      likes,
    });

    await newPost.save();

    return NextResponse.json({
      status: 201,
      message: "Post published!",
      newPost,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const GET = async () => {
  try {
    await connectDB();

    const posts = await Post.find();

    return NextResponse.json({
      status: 200,
      posts,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    await connectDB();

    const reqBody = await request.json();

    const { id, likes } = reqBody;

    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json({
        status: 404,
        message: "Post not found!",
      });
    }

    post.likes = likes;

    await post.save();

    return NextResponse.json({
      status: 200,
      message: "Likes updated!",
      post,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
