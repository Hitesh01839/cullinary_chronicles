import React from "react";
import RecipieCard from "../components/RecipieCard";

const page = () => {
  return (
    <div>
      <div className="all-recipie-section mt-14 bg-main-bg min-h-screen space-y-6 flex flex-col p-10 justify-center">
        <h1 className="font-extrabold text-main-text-color text-3xl">
          RECIPIES
        </h1>
        <RecipieCard />
      </div>
    </div>
  );
};

export default page;
