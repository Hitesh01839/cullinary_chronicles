"use client";

import React, { useState } from "react";
import AddRecipieModal from "./AddRecipieModal";

const AddRecipieBtn = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleClick = () => {
    setToggleModal(true);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="text-main-text-color cursor-pointer bg-btn-bg px-4 py-1 rounded-sm"
      >
        ADD RECIPIE
      </button>

      <div className="absolute bottom-7 left-6 bg-secondary-bg text-main-text-color rounded-lg shadow-md shadow-secondary-bg ">
        {toggleModal && (
          <button className="p-3" onClick={() => setToggleModal(false)}>
            Close
          </button>
        )}
        {toggleModal && <AddRecipieModal onClose={toggleModal} />}
      </div>
    </>
  );
};

export default AddRecipieBtn;
