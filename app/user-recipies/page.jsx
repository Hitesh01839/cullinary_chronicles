import React from "react";
import UserRecipiesCard from "../components/UserRecipiesCard";
import AddRecipieBtn from "../components/AddRecipieBtn";

const page = () => {
  return (
    <>
      <div className="user-recipies mt-14 bg-main-bg min-h-screen space-y-6 flex flex-col p-10 justify-center">
        <div className="flex space-x-7">
          <h1 className="font-extrabold text-main-text-color text-3xl">
            MY RECIPIES
          </h1>
          <AddRecipieBtn />
        </div>
        <UserRecipiesCard />
      </div>
    </>
  );
};

export default page;
