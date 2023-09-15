import React from "react";
import { BsThreeDots, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Post = ({ img, userImg, caption, username, id }) => {
  const { data: session } = useSession();
  const [comment, setComment] = React.useState("");
  // console.log(img, userImg, caption, username, id);

  const sentComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

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

      {session && (
        <div className="flex justify-between p-2 mt-2">
          <div className="flex space-x-3">
            <AiOutlineHeart className="btn" />
            <FaRegCommentDots className="btn" />
          </div>
          <BsBookmark className="btn" />
        </div>
      )}

      <div className="flex space-x-2 truncate">
        <p className="font-bold">{username}</p>
        <p>{caption}</p>
      </div>

      {session && (
        <form className="flex items-center space-x-3 mt-3">
          <BsEmojiSmile className="text-xl" />
          <input
            type="text"
            className=" w-full border-none focus:ring-0"
            placeholder="Enter your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            disabled={!comment.trim()}
            onClick={sentComment}
            type="submit"
            className="text-blue-500 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
