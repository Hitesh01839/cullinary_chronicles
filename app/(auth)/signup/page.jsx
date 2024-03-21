"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabaseClient";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogginIn, setIsLogginIn] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLogginIn(false);
      // const { loggedIn, error } = await SignUpAction({
      //   email,
      //   password,
      //   username,
      // });
      // if (loggedIn) {
      //   router.push("/recipies"); // Redirect to dashboard upon successful login
      // } else {
      //   // Handle login failure or display error message
      //   console.error("Login failed:", error);
      // }
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        router.push("/error");
      } else {
        router.push("/recipies");
        router.refresh();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-main-bg min-h-screen space-y-6 flex flex-col align-middle justify-center items-center">
      <div className="signup_section">
        <div className="container space-y-4 flex flex-col bg-secondary-bg mt-16 py-16 px-14">
          <h1 className="text-center text-4xl text-main-text-color">SIGNUP</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[25vw] text-main-text-color space-y-4"
          >
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-main-bg border border-main-text-color outline-none p-1"
            />
            <label htmlFor="email">EMAIL</label>
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
            <button type="submit" className="bg-btn-bg w-1/3 mx-auto px-4 py-2">
              {isLogginIn ? "SUBMIT" : "SIGNING"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
