"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabaseClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogginIn, setIsLogginIn] = useState(true);

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
    try {
      setIsLogginIn(false);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        router.push("/error");
      } else {
        router.push("/recipies");
        router.refresh();
        notify();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="bg-main-bg min-h-screen space-y-6 flex flex-col align-middle justify-center items-center">
        <div className="login_section">
          <div className="container space-y-4 flex flex-col bg-secondary-bg py-16 px-14">
            <h1 className="text-center text-4xl text-main-text-color">LOGIN</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-[25vw] text-main-text-color space-y-4"
            >
              <label htmlFor="name">EMAIL</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-main-bg border border-main-text-color outline-none p-1"
              />
              <label htmlFor="name">PASSWORD</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-main-bg border border-main-text-color outline-none p-1"
              />
              <button
                type="submit"
                className="bg-btn-bg w-1/3 mx-auto px-4 py-2"
              >
                {isLogginIn ? "SUBMIT" : "LOGGING"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
