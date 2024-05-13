"use client";

import { Post } from "@/templates/home";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";
import { UserContext } from "@/contexts/user";

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
      _id: "",
    },
  ]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/post");
      const sortedPosts = response.data.posts.sort((a:any, b:any) => {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
      console.log("after sorting: ", sortedPosts.reverse())
      setPosts(sortedPosts.reverse());
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchAddress = () => {
      const address = Cookies.get("walletAddress");
      setUserDetails({
        ...userDetails,
        userAddress: address,
      });
    };

    fetchAddress();
  }, []);

  const { userDetails, setUserDetails } = useContext(UserContext);

  return (
    <section className="p-3 flex flex-col gap-10">
      {posts.map((post) => (
        <Post
          key={post._id}
          creatorImg="/images/user-avatar.jpg"
          creatorName={userDetails.userAddress}
          timestamp={post.timestamp}
          text={post.caption}
          image={post.images}
          likes={post.likes}
          comments={post.comments}
          _id={post._id}
        />
      ))}

      <Post
        creatorImg="/images/user-avatar.jpg"
        creatorName={userDetails.userAddress}
        timestamp="20m ago"
        text="“If you think you are too small to make a difference, try sleeping with a mosquito.”
        ~ Dalai Lama"
        image={["/images/land.png", "/images/land2.jpg", "/images/land2.avif"]}
        likes={["Ravi", "Rahul", "Rachit", "Rohit", "Rajat"]}
        comments={["Hello there", "General Kenobi", "You are a bold one"]}
      />
      <Post
        creatorImg="/images/user-avatar.jpg"
        creatorName={userDetails.userAddress}
        timestamp="20m ago"
        text="“If you think you are too small to make a difference, try sleeping with a mosquito.”
        ~ Dalai Lama"
        image={["/images/land.png", "/images/land2.jpg", "/images/land2.avif"]}
        likes={["Ravi", "Rahul", "Rachit", "Rohit", "Rajat"]}
        comments={["Hello there", "General Kenobi", "You are a bold one"]}
      />
      <Post
        creatorImg="/images/user-avatar.jpg"
        creatorName={userDetails.userAddress}
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
