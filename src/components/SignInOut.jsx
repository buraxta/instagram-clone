"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";
import Image from "next/image";

const SignInOut = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div className="flex space-x-4 items-center">
          <IoMdAddCircleOutline
            onClick={() => setOpen(true)}
            className="text-2xl hover:scale-125 transition-all duration-200 ease-out cursor-pointer"
          />
          <Image
            onClick={signOut}
            src={session.user.image}
            alt="user-image"
            className="h-10 rounded-full cursor-pointer"
            width={40}
            height={50}
          />
        </div>
      ) : (
        <>
          <button
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/  " })
            }
            className="bg-red-400 p-3 rounded-lg text-white hover:bg-red-500"
          >
            Sign in
          </button>
        </>
      )}
    </div>
  );
};

export default SignInOut;
