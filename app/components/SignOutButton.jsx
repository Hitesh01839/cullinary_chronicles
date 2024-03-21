import React from "react";

const SignOutButton = () => {
  return (
    <form action="/auth/signout" method="post">
      <button type="submit" className="font-bold">
        SIGNOUT
      </button>
    </form>
  );
};

export default SignOutButton;
