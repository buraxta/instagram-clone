import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestion from "./Suggestion";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
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
