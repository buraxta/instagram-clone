"use client";
import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const { data: session } = useSession();
  const [storyUsers, setStoryUsers] = React.useState([]);

  useEffect(() => {
    const storyUsers = new Array(19).fill(0).map((_, i) => ({
      username: faker.internet.userName().toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
    border-1 overflow-x-scroll rounded-sm scrollbar-none"
    >
      {session && (
        <Story
          key={session.user.id}
          username={session.user.username}
          img={session.user.image}
          isUser="true"
        />
      )}
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
};

export default Stories;
