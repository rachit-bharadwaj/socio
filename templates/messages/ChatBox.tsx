import { Messages } from "@/types";
import Image from "next/image";
import React from "react";

const ChatBox = ({ name, lastMessage, profileImg, timestamp }: Messages) => {
  return (
    <div>
      <div className="flex items-center justify-between my-3">
      <div className="flex gap-5 items-center">
        <div>
          <Image
            src={profileImg}
            alt="Profile Picture"
            width={100}
            height={100}
            className="h-12 w-12 rounded-full "
          />
        </div>
        <div>
          <p className="">{name}</p>
          <p className="text-xs text-gray-400">{lastMessage}</p>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-500">{timestamp}</p>
      </div>
    </div>
    <hr className="border border-gray-700 my-2"/>
    </div>
  );
};

export default ChatBox;