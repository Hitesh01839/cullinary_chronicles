"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserRecipiesCard = () => {
  const [recipies, setRecipies] = useState([]);
  const fetchData = async () => {
    const user_recipies = await fetch(
      "http://localhost:80/api/show-user-recipie"
    );
    const data = await user_recipies.json();

    setRecipies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  return (
    <div>
      <div className="space-y-10 text-main-text-color">
        {recipies.map((recipie) => (
          <div
            onClick={() => {
              router.push("/user-recipies/" + recipie.title);
            }}
            key={recipie.title}
            className="bg-secondary-bg p-7 rounded-md cursor-pointer"
          >
            <h2 className="text-xl font-bold pb-3">{recipie.title}</h2>
            <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
              {recipie.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRecipiesCard;
