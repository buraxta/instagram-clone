import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: "user1",
      userImg: "https://i.pravatar.cc/300",
      img: "https://picsum.photos/200/300",
      caption: "Nice picture",
    },
    {
      id: 2,
      username: "user2",
      userImg: "https://i.pravatar.cc/300",
      img: "https://picsum.photos/300",
      caption: "New picture from user2",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
