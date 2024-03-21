import React from "react";
import Link from "next/link";
import createClient from "@/app/utils/supabaseServerClient";
import SignOutButton from "./SignOutButton";

const Navbar = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="bg-nav-bg fixed top-0 left-0 py-4 px-24 z-10 flex justify-between items-center min-w-full">
      <div className="logo flex flex-col font-extrabold text-main-text-color">
        CULLINARY <span className="text-btn-bg">CHRONICLES</span>
      </div>
      <div className="links">
        <ul className="flex items-center space-x-5 text-main-text-color font-medium">
          {user ? (
            <>
              <li className="transition ease-in-out cursor-pointer duration-300 hover:bg-btn-bg px-4 py-1 rounded-sm">
                <Link href="/recipies">ALL RECIPIES</Link>
              </li>
              <li className="transition ease-in-out cursor-pointer duration-300 hover:bg-btn-bg px-4 py-1 rounded-sm">
                <Link href="/user-recipies">MY RECIPIES</Link>
              </li>
              <li className="transition ease-in-out cursor-pointer duration-300 hover:bg-nav-bg bg-btn-bg px-3 py-1 rounded-sm">
                <SignOutButton />
              </li>
            </>
          ) : (
            <>
              <li className="transition ease-in-out cursor-pointer duration-300 hover:bg-btn-bg px-4 py-1 rounded-sm">
                <Link href="/login">LOGIN</Link>
              </li>
              <li className="transition ease-in-out cursor-pointer duration-300 hover:bg-nav-bg bg-btn-bg px-3 py-1 rounded-sm">
                <Link href="/signup">SIGNUP</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
