"use client";
import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";

const Suggestion = () => {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    const storyUsers = new Array(5).fill(0).map((_, i) => ({
      username: faker.internet.userName().toLowerCase(),
      jobTitle: faker.name.jobTitle(),
      img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
  }, []);

  return (
    <div>
      <div className="flex justify-between ml-12 my-3">
        <h3 className="font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-800 font-semibold">See All</button>
      </div>
      {storyUsers.map((profile) => (
        <div className="flex space-x-2 ml-12 mt-4">
          <img
            src={profile.img}
            alt={profile.username}
            className="rounded-full h-14 border p-[2px]"
          />
          <div className="flex-1">
            <p className="font-bold text-sm">{profile.username}</p>
            <p className="text-gray-500">{profile.jobTitle}</p>
          </div>
          <button className="text-blue-500 font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
