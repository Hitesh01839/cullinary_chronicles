"use client";

import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const finalSlug = params.slug.replaceAll("%20", " ");

  const [recipie, setRecipie] = useState([]);

  const fetchRecipie = async () => {
    const res = await fetch(
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/show-recipie/`,
      {
        method: "POST",
        withCredentials: true,
        crossorigin: true,
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ finalSlug }),
      }
    );

    const data = await res.json();
    setRecipie(data);
  };

  useEffect(() => {
    fetchRecipie();
  }, []);

  return (
    <div className="bg-main-bg min-h-screen space-y-6 text-main-text-color flex flex-col p-10 justify-center">
      {recipie.map((ele) => (
        <div key={ele.id} className="space-y-3">
          <h1 className="text-3xl">{ele.title}</h1>
          <p>{ele.description}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
