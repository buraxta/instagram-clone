import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between sm:px-40 px-10 mt-5 max-w-7xl">
      <div>
        <Image
          className="hidden lg:inline-grid cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
          alt="logo"
          width={150}
          height={40}
        />
        <Image
          className="cursor-pointer lg:hidden"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png"
          alt="logo"
          width={40}
          height={40}
        />
      </div>
      <div className="flex items-center space-x-2 border p-2 rounded-lg">
        <BsSearch />
        <input className="outline-none" type="text" placeholder="Search" />
      </div>
      <div className="flex space-x-3 items-center">
        <AiFillHome className="text-2xl" />
        <IoMdAddCircleOutline className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
