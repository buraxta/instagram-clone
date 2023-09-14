import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestion from "./Suggestion";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Feed = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main
      className={`grid ${
        session
          ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
          : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"
      } `}
    >
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="md:col-span-1 md:inline-grid hidden">
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggestion />
        </div>
      </section>
    </main>
  );
};

export default Feed;
