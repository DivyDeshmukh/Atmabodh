import React from "react";
import Button from "../Button.jsx";
import { Link } from "react-router-dom";
import thoughts from "./data/thoughts.js";
import Card from "../Card.jsx";

function Page8() {
  return (
    <div className="w-full h-auto pb-12 bg-[#f8f9fb] overflow-x-hidden">
      <div id="top" className="bg-[#1b181f] py-12 ">
        <div id="text">
          <h1 className="text-[#FFE0C3] text-center text-[4.25vmax] uppercase">
            Collect Stories & Seek
          </h1>
          <h1 className="text-[#FFE0C3] text-center text-[4.25vmax] uppercase -translate-y-4">
            Inspirations!
          </h1>
        </div>
        <div
          id="button"
          className={` relative flex items-center justify-center uppercase -translate-y-4 `}
        >
          <Link
            to="/"
            className={`relative text-black bg-[#FFE0C3] hover:border-2 hover:border-[#FFE0C3] hover:text-[#FFE0C3] hover:bg-[#1b181f] text-[8px] px-4 py-2 rounded-full z-[10]`}
          >
            Sign up now
          </Link>
          <i class="ri-logout-circle-r-line font-sans font-extralight text-3xl ml-[-11.5px] text-[#FFE0C3]"></i>
        </div>
      </div>
      <div
        id="bottom"
        className="uppercase flex flex-col items-center justify-center gap-2 text-center bg-[#f8f9fb] pt-12"
      >
        <div
          id="part1"
          className="flex flex-col gap-2 text-center items-center mb-2"
        >
          <h1 className="text-3xl">Our Latest Insights</h1>
          <p className="text-[10px] font-light w-[90%] sm:w-[60%] text-center">
            Stay updated and inspired with our latest insights into a variety of
            topics, ranging from technology trends to lifestyle tips.
          </p>
        </div>

        <div
          id="part2"
          className="flex flex-wrap w-full justify-center items-center text-left gap-6"
        >
          {thoughts.map(
            (item, index) => index < 3 && <Card data={item} key={index} />
          )}
        </div>

        <Button text={"View MORE"} linkClassName={"hover:bg-[#F8F9FB]"} />
      </div>
    </div>
  );
}

export default Page8;
