"use client";

import { Post } from "@/templates/home";
import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      creatorImg: "",
      creatorName: "",
      timestamp: "",
      caption: "",
      images: [""],
      likes: [""],
      comments: [""],
    },
  ]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/post");
      console.log(response)
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  useEffect(() => {

    fetchPosts();
  }, []);

  return (
    <section className="p-3 flex flex-col gap-10">
      {posts.map((post, index) => (
        <Post
          key={index}
          creatorImg="/images/user.jpg"
          creatorName="Rachit Bharadwaj"
          timestamp={post.timestamp}
          text={post.caption}
          image={post.images}
          likes={post.likes}
          comments={post.comments}
        />
      ))}

      <Post
        creatorImg="/images/user.jpg"
        creatorName="Rachit Bharadwaj"
        timestamp="20m ago"
        text="“If you think you are too small to make a difference, try sleeping with a mosquito.”
        ~ Dalai Lama"
        image={["/images/land.png", "/images/land2.jpg", "/images/land2.avif"]}
        likes={["Ravi", "Rahul", "Rachit", "Rohit", "Rajat"]}
        comments={["Hello there", "General Kenobi", "You are a bold one"]}
      />
      <Post
        creatorImg="/images/user.jpg"
        creatorName="Rachit Bharadwaj"
        timestamp="20m ago"
        text="“If you think you are too small to make a difference, try sleeping with a mosquito.”
        ~ Dalai Lama"
        image={["/images/land.png", "/images/land2.jpg", "/images/land2.avif"]}
        likes={["Ravi", "Rahul", "Rachit", "Rohit", "Rajat"]}
        comments={["Hello there", "General Kenobi", "You are a bold one"]}
      />
      <Post
        creatorImg="/images/user.jpg"
        creatorName="Rachit Bharadwaj"
        timestamp="20m ago"
        text="“If you think you are too small to make a difference, try sleeping with a mosquito.”
        ~ Dalai Lama"
        image={["/images/land.png", "/images/land2.jpg", "/images/land2.avif"]}
        likes={["Ravi", "Rahul", "Rachit", "Rohit", "Rajat"]}
        comments={["Hello there", "General Kenobi", "You are a bold one"]}
      />
    </section>
  );
};

export default Posts;
