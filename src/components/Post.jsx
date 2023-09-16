import React from "react";
import { BsThreeDots, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import moment from "moment/moment";

const Post = ({ img, userImg, caption, username, id }) => {
  const { data: session } = useSession();
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [likes, setLikes] = React.useState([]);
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    const unsub = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, [db, id]);

  React.useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => {
        setLikes(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, [db, id]);

  React.useEffect(() => {
    setIsLiked(
      likes.findIndex((like) => like.username === session?.user?.username) !==
        -1
    );
  }, [likes]);

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

  const handleLike = async () => {
    const likeRef = doc(db, "posts", id, "likes", session.user.username);
    if (isLiked) {
      await deleteDoc(likeRef);
      setIsLiked(false);
    } else {
      await setDoc(likeRef, {
        username: session.user.username,
      });
      setIsLiked(true);
    }
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
        <div>
          <div className="flex justify-between p-2 mt-2">
            <div className="flex space-x-3">
              {isLiked ? (
                <AiFillHeart
                  onClick={handleLike}
                  className="btn text-red-500"
                />
              ) : (
                <AiOutlineHeart onClick={handleLike} className="btn" />
              )}
              <FaRegCommentDots className="btn" />
            </div>
            <BsBookmark className="btn" />
          </div>
          <p className="ml-2 mt-[-5px] font-semibold">
            {likes.length > 0 ? `${likes.length} likes` : null}
          </p>
        </div>
      )}

      <div className="flex space-x-2 truncate">
        <p className="font-bold">{username}</p>
        <p>{caption}</p>
      </div>

      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {console.log(comments)}
          {comments.map((comment) => (
            <div className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full object-cover"
                src={comment.userImg}
                alt="user-image"
              />
              <p className="font-semibold">{comment.username}</p>
              <p className="flex-1 truncate">{comment.comment}</p>
              {moment(comment.timestamp?.toDate()).fromNow()}
            </div>
          ))}
        </div>
      )}

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
