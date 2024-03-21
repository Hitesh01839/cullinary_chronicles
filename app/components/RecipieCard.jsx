"use client";

import React, { useEffect, useState } from "react";

const RecipieCard = () => {
  const [recipies, setRecipies] = useState([]);
  const fetchData = async () => {
    const user_recipies = await fetch(
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/show-all-recipies/`,
      {
        mode: "cors",
      }
    );
    const data = await user_recipies.json();

    setRecipies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-10 text-main-text-color">
      {recipies.map((recipie) => (
        <div
          onClick={() => {
            console.log(recipie);
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
  );
};

export default RecipieCard;
