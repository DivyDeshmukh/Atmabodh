import React from "react";
import Header from "../Header/Header";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import Button from "../Button";
import "../../App.css";

function Page1() {
  return (
    <div className="h-screen w-full bg-[#ffe0c3] flex flex-col justify-center items-center gap-6 overflow-hidden pt-[112px]">
      <div id="title" className="flex flex-col items-center text-center gap-4">
        <div
          id="title-text"
          className="relative"
          style={{ fontFamily: "gilroy" }}
        >
          <h1
            className="text-[#FF9400] font-extrabold text-6xl md:text-7xl uppercase relative"
            style={{ WebkitTextStroke: "1px #D3E9E6" }}
          >
            Atmabodh
          </h1>
          <h2 className="text-black font-extrabold text-4xl md:text-5xl uppercase">
            For the
          </h2>
          <h3 className="text-[#718a86] font-extrabold text-6xl md:text-7xl uppercase">
            Modern Soul
          </h3>
        </div>

        <div
          id="followers-info"
          className="flex justify-center items-center gap-4 bg-[#faecde] rounded-3xl px-4 py-1 border-2 border-[#000080]"
        >
          <p className="text-[14px] md:text-[16px] font-bold text-[#000080]">
            Ditch the Drama, Find Your Dharma
          </p>
        </div>

        <div id="desc" className="w-[90%] md:w-[70%] text-center">
          <p className="text-[14px] md:text-[16px] font-semibold">
            Introducing{" "}
            <span className="text-[#FF9400] uppercase">Atmabodh</span> - Your
            Companion on the Journey to Self-Discovery.
          </p>
        </div>

        <Button
          text={"Get Started"}
          className={"-translate-y-4"}
          linkClassName={"hover:bg-[#ffe0c3]"}
        />
      </div>

      <div
        id="bottom-part"
        className="flex flex-col items-center gap-6 px-4 w-full max-w-[800px]"
      >
        <div
          id="video"
          className="w-[650px] max-h-[300px] rounded-xl overflow-hidden"
        >
          <video
            src="./introduction.mp4"
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            muted
            controls
          ></video>
        </div>

        <div
          id="info"
          className="flex justify-around items-center gap-4 w-full"
        >
          <button className="bg-[#FAECDE] px-4 py-2 rounded-xl flex flex-col items-center">
            <i className="ri-checkbox-circle-line text-red-600 font-bold"></i>
            <p className="text-[16px] font-bold">30K</p>
            <p className="text-[12px] md:text-[14px] font-light">
              Daily Thoughts
            </p>
          </button>
          <button className="bg-[#FAECDE] px-4 py-2 rounded-xl flex flex-col items-center">
            <i className="ri-checkbox-circle-line text-red-600 font-bold"></i>
            <p className="text-[16px] font-bold">25K</p>
            <p className="text-[12px] md:text-[14px] font-light">Daily Blogs</p>
          </button>
          <button className="bg-[#FAECDE] px-4 py-2 rounded-xl flex flex-col items-center">
            <i className="ri-checkbox-circle-line text-red-600 font-bold"></i>
            <p className="text-[16px] font-bold">22K</p>
            <p className="text-[12px] md:text-[14px] font-light">
              Daily Podcasts
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
