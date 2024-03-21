"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRecipieModal = () => {
  const notify = () => {
    toast.success("Logged In!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: "Slide",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, desc });
    setTitle("");
    setDesc("");
    // notify();

    const res = await fetch("http://localhost:80/api/add-recipie/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, desc }),
    });
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <div className="text-main-text-color flex flex-col space-y-10 items-center justify-start pl-3 h-[70vh] w-[90vw]">
        <h1 className="text-3xl font-bold">ADD RECIPIE</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-2/4 justify-center space-y-3"
        >
          <label htmlFor="name">TITLE</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-main-bg border border-main-text-color outline-none p-1"
          />
          <label htmlFor="name">DESCRIPTION</label>
          <textarea
            name="desc"
            id="desc"
            cols="33"
            rows="6"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="resize-none bg-main-bg border border-main-text-color outline-none p-1"
          ></textarea>
          <button type="submit" className="bg-btn-bg w-1/3 mx-auto px-4 py-2">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default AddRecipieModal;
