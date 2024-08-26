import React from "react";
import Button from "../Button";

function Page5() {
  return (
    <div className="flex flex-wrap pb-12 justify-center items-center pt-12 gap-6 overflow-x-hidden bg-[#FFE0C3]">
      <div
        id="left"
        className="flex items-start justify-center flex-col gap-3 p-4 min-w-[350px] w-[20vw]"
      >
        <div id="top" className="flex flex-col gap-1">
          <div id="title" className="w-full">
            <h1 className="text-black uppercase text-5xl text-center sm:text-left">
              Immerse in
            </h1>
            <h1 className="text-black uppercase text-5xl text-center sm:text-left">
              Engaging
            </h1>
            <h1 className="text-black uppercase text-5xl text-center sm:text-left">
              Content
            </h1>
          </div>
          <p className="text-[12px] font-light text-center sm:text-left">
            Dive into the ocean of content from thought-provoking ideas,
            in-depth blogs, and insightful podcasts.
          </p>
        </div>
        <div className="flex w-full justify-center sm:justify-start">
          <Button text={"Explore More"} linkClassName={"hover:bg-[#ffe0c3]"} />
        </div>
      </div>
      <div
        id="right"
        className="bg-black h-[37.5vh] w-[37.5vw] min-w-[340px] rounded-2xl"
      >
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-excited-girl-talking-on-video-call-with-her-cell-phone-8745-large.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-contain"
        ></video>
      </div>
    </div>
  );
}

export default Page5;
