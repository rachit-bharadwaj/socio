"use client";

import type { Post } from "@/types";

import Image from "next/image";

// icons
import { HiDotsVertical } from "react-icons/hi";
import { RiHeart3Line } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa6";
import { TbShare3 } from "react-icons/tb";
import { HiOutlineBookmark } from "react-icons/hi2";

// shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";

// axios
import axios from "axios";

const Post = ({
  comments,
  creatorImg,
  creatorName,
  image,
  likes,
  text,
  timestamp,
  _id,
}: Post) => {
  const [liked, setLiked] = useState(false);
  var likesCount = likes?.length ?? 0;

  const handleLike = async () =>{
    setLiked(!liked);
    {
      liked ? likesCount-- : likesCount++;
    }
    

    // update it into the db
    try {
      const response = await axios.put("/api/post", {
        _id: _id,
        likes: likesCount,
      });
      console.log(_id);
      console.log(response);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  useEffect(() => {
   
  }, [likesCount])
  

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={creatorImg}
            alt="Creator Image"
            width={500}
            height={500}
            className="h-10 w-fit rounded-full"
          />
          <div>
            <p className="font-bold text-lg text-primary-100">{creatorName}</p>
            <p className="text-sm text-primary-300">{timestamp}</p>
          </div>
        </div>

        <button>
          <HiDotsVertical className="text-2xl text-primary-300 hover:text-primary-100" />
        </button>
      </div>

      <div className="py-3 flex gap-1 flex-col">
        <p>{text}</p>

        <Carousel>
          <CarouselContent>
            {image?.map((img, index) => (
              <CarouselItem key={index}>
                <Image
                  src={img}
                  alt="Post Image"
                  width={500}
                  height={500}
                  className="w-full h-fit aspect-video rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-7 items-center">
          <button className="flex items-center gap-1" onClick={handleLike}>
            <RiHeart3Line
              className={`text-xl ${
                !liked ? `hover:fill-red-200` : `bg-red-200 rounded-full`
              }`}
            />
            <p>{likesCount}</p>
          </button>

         
          <button>
            <TbShare3 className="text-xl hover:text-indigo-500" />
          </button>
        </div>

        <button>
          <HiOutlineBookmark className="text-xl hover:text-green-200" />
        </button>
      </div>

    </div>
  );
};

export default Post;
