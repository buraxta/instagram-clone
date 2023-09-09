import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Post = ({ img, userImg, caption, username, id }) => {
  return (
    <div className="bg-white my-7 p-5 border rounded-md">
      <section className="flex justify-between  ">
        <div className="flex space-x-3 items-center">
          <img
            className="h-12 rounded-full object-cover p-1 ring-1 ring-gray-300"
            src={userImg}
            alt="profile image"
          />

          <p className="font-semibold">{username}</p>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </section>
      <img className="w-full h-80 object-contain" src={img} alt="post image" />
    </div>
  );
};

export default Post;
