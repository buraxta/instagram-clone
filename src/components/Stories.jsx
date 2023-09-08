"use client";
import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
  const [storyUsers, setStoryUsers] = React.useState([]);

  useEffect(() => {
    const storyUsers = new Array(20).fill(0).map((_, i) => ({
      username: faker.internet.userName().toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);

  return (
    <div>
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
};

export default Stories;
