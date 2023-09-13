import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

const ServerPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <h1 className="text-3xl">Not signed in</h1>;
  }
  return <h1 className="text-3xl">ServerPage</h1>;
};

export default ServerPage;
