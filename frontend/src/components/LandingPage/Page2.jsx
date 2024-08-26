import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import thoughts from "./data/thoughts.js";
import blogs from "./data/blogs.js";
import poadcasts from "./data/podcast.js";
import Card from "../Card.jsx";
import Button from "../Button.jsx";

function Page2() {
  const [isActive, setIsActive] = useState("thoughts");

  return (
    <div className="h-auto w-fit bg-[#f8f9fb] flex flex-col gap-4 pt-16 items-center justify-center pb-8">
      <div
        id="text"
        className="items-center justify-center flex flex-col gap-1"
      >
        <h1 className="text-black font-extrabold text-3xl uppercase text-center">
          Share your progress with others on our community forum
        </h1>
        <p className="font-light text-[10px] w-[75%] text-center mt-1">
          Connect with the community of knowledge seekers and skillful
          individuals from all over the world and enhance the quality of your
          life.
        </p>
      </div>

      <div
        id="buttons"
        className="p-1 bg-[#ededed] flex justify-center items-center gap-2 rounded-full"
      >
        <button
          className={`${
            isActive === "thoughts" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("thoughts");
          }}
        >
          Thoughts
        </button>
        <button
          className={`${
            isActive === "blogs" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("blogs");
          }}
        >
          Blogs
        </button>
        <button
          className={`${
            isActive === "podcasts" ? "bg-white" : "bg-[#EDEDED]"
          } px-4 py-1 rounded-full text-[11px] flex items-center justify-center`}
          onClick={() => {
            setIsActive("podcasts");
          }}
        >
          Podcasts
        </button>
      </div>

      <div
        id="content"
        className="flex flex-wrap gap-8 w-full justify-center items-center mt-6"
      >
        {isActive === "thoughts" &&
          thoughts.map((thought, index) => <Card data={thought} key={index} />)}

        {isActive === "blogs" &&
          blogs.map((blog, index) => <Card data={blog} key={index} />)}

        {isActive === "podcasts" &&
          poadcasts.map((podcast, index) => (
            <Card data={podcast} key={index} />
          ))}
      </div>

      <Button text={"view more"} linkClassName={"hover:bg-[#f8f9fb]"} />
    </div>
  );
}

export default Page2;
