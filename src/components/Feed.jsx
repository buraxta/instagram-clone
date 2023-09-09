import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

const Feed = () => {
  return (
    <main>
      <section>
        <Stories />
        <Posts />
      </section>
      <section></section>
    </main>
  );
};

export default Feed;
