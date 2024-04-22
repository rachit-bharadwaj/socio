"use client"

import { Post } from "@/templates/home";
import { useEffect, useState } from "react";

const Posts = () => {

  const [localPosts, setLocalPosts] = useState({
    text: "",
    image: "",
  })

  useEffect(() => {
    const posts = localStorage.getItem("post")
    if (posts) {
      setLocalPosts(JSON.parse(posts))
    }
  }, [])


  return (
    <section className="p-3 flex flex-col gap-10">

      {localPosts &&
        <Post
          creatorImg="/images/user.jpg"
          creatorName="Rachit Bharadwaj"
          timestamp="just now"
          text={localPosts.text}
          image={[
            localPosts.image
          ]}

        />
      }

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
