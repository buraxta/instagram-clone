import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Story = ({ img, username, isUser }) => {
  return (
    <div className="relative group cursor-pointer">
      <Image
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 
         group-hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt={username}
        width={400}
        height={400}
      />
      {isUser && (
        <AiOutlinePlus className="h-6 w-7  absolute top-4 left-3 text-white" />
      )}
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
