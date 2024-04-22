"use client"
import { useContext, useState } from "react";
import Web3 from 'web3';
import Image from "next/image";
import { userContractABI, userContractAddress } from "@/constants";
import { useRouter } from "next/navigation";
import { UserContext } from "@/contexts/user";

// Initialize Web3
const web3 = new Web3(window.ethereum);

const CreatePost = () => {

  const router = useRouter()

  const {userDetails} = useContext(UserContext)

  const [postData, setPostData] = useState({
    userAddress: userDetails.address,
    text: "",
    image: "",
  });

  // Function to handle text input change
  const handleTextChange = (e: any) => {
    setPostData({ ...postData, text: e.target.value });
  };

  // Function to handle image selection
  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // Convert image to base64 string
      setPostData({ ...postData, image: reader.result as string });
      console.log("Image uploaded:", reader.result)
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    try {
      console.log("Publishing post:", postData);

      localStorage.setItem("post", JSON.stringify(postData));
      router.push("/")
    } catch (error: any) {
      console.log(error)
    }
    
  }

  // Function to add post to blockchain
  // const addPostToBlockchain = async () => {
  //   try {
  //     // Connect to the contract
  //     const contract = new web3.eth.Contract(userContractABI, userContractAddress);

  //     // Add post to blockchain
  //     await contract.methods.addPost(postData.text, postData.image).send({ from: userContractAddress });

  //     // Clear input fields after posting
  //     setPostData({ text: "", image: "" });
  //     console.log("Post added to blockchain:", postData);
  //     localStorage.setItem("post", JSON.stringify(postData));
  //   } catch (error) {
  //     console.error("Error adding post to blockchain:", error);
  //   }
  // };

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
          <Image
            src="/images/user.jpg"
            height={500}
            width={500}
            alt="profile-image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-8 h-8 bg-gray-800 rounded-full justify-center items-center flex text-2xl my-8 cursor-pointer">
            +
          </div>
          <div className="bg-purple-700 h-fit w-28 py-1 rounded-lg flex flex-col items-center justify-center">
            <label htmlFor="photo" className="text-lg">
              Photo
            </label>
            <input type="file" id="photo" className="hidden" onChange={handleImageChange} accept="image/*" />
            <label htmlFor="video" className="text-lg">
              Video
            </label>
            <input type="file" id="video" className="hidden" />
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

