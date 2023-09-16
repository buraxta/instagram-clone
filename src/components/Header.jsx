"use client";
import Image from "next/image";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SignInOut from "./SignInOut";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="shadow-sm border-b mb-3 sticky top-0 bg-white pt-1 z-30">
      <div
        className="flex justify-between  px-10 mt-5 max-w-7xl 
    mx-4 lg:mx-auto pb-3"
      >
        <div>
          <Image
            className="hidden lg:inline-grid cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
            alt="logo"
            width={150}
            height={40}
            onClick={() => router.push("/")}
          />
          <Image
            className="cursor-pointer lg:hidden mr-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png"
            alt="logo"
            width={150}
            height={120}
            onClick={() => router.push("/")}
          />
        </div>
        <div className="flex items-center space-x-2 relative ">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 absolute top-2 left-3" />
          <input
            className="bg-gray-50 pl-10 border-gray-500 text-sm 
          focus:ring-black focus:border-black rounded-md"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <AiFillHome
            onClick={() => router.push("/")}
            className="hidden md:inline-flex text-2xl hover:scale-125 transition-transform duration-200 ease-out cursor-pointer"
          />
          <SignInOut />
        </div>
      </div>
    </div>
  );
};

export default Header;
