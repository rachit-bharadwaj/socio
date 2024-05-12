"use client"

import { useContext, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { UserContext } from "@/contexts/user";

const CreatePost = () => {
  const router = useRouter();
  const { userDetails } = useContext(UserContext);

  const [postData, setPostData] = useState({
    userAddress: userDetails.address,
    text: "",
    images: [] as string[],
  });

  // Function to handle text input change
  const handleTextChange = (e:any) => {
    setPostData({ ...postData, text: e.target.value });
  };

  // Function to handle image selection
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const imageArray: string[] = [];

    if (files) {
      for (const file of Array.from(files)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          // Convert image to base64 string
          const imageBase64 = reader.result as string;
          imageArray.push(imageBase64);
          setPostData({ ...postData, images: imageArray, userAddress: postData.userAddress, text: postData.text });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  // Function to publish the post
  const handlePublish = async () => {
    try {
      console.log("Publishing post:", postData);

      // Send post data to MongoDB
      const res = await axios.post("/api/post", {
        caption: postData.text,
        images: postData.images,
        likes: 0,
      }).then((res) => {
        console.log("Post published:", res.data);
      }
      );

      console.log(res)

      // Redirect to homepage after publishing
      router.push("/");
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <button className="text-red-500">Discard</button>
        <p className="text-xl">CREATE</p>
        <button className="text-white px-3 py-1 bg-purple-600 rounded-full" onClick={handlePublish}>
          Publish
        </button>
      </div>
      <div className="flex py-5 w-[100%]">
        <div className="w-[10%]">
          <div className="bg-purple-700 h-fit w-28 py-1 rounded-lg flex flex-col items-center justify-center">
            <label htmlFor="photo" className="text-lg">
              Photo
            </label>
            <input type="file" id="photo" className="hidden" onChange={handleImageChange} accept="image/*" multiple />
          </div>
        </div>
        <div className="w-[90%]">
          <textarea
            placeholder="What's on your mind?"
            className="bg-transparent rounded-lg px-5 py-3 w-full h-96 outline-none"
            value={postData.text}
            onChange={handleTextChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
