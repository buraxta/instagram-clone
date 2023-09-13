"use client";
import { signIn } from "next-auth/react";
import React from "react";

const GoogleButton = ({ provider }) => {
  return (
    <button
      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
      className="bg-red-400 p-3 rounded-lg text-white hover:bg-red-500"
    >
      Sign in with {provider.name}
    </button>
  );
};

export default GoogleButton;
