import React from "react";

function Page6() {
  return (
    <div className="flex gap-6 flex-wrap justify-center items-center bg-[#f8f9fb] pt-20 pb-12">
      <div
        id="top"
        className="uppercase flex flex-col items-center justify-center gap-2 text-center"
      >
        <h1 className="text-3xl">Powerful security by</h1>
        <h1 className="text-5xl sm:text-7xl font-extrabold">Cyberguard</h1>
        <p className="text-[10px] font-light w-[90%] sm:w-[60%]">
          Empower Ideas, Elevating Voices: Your gateway to insightful blogging.
          Thoughtful Sharing and Dynamic Podcasting with CyberGuard security
          welcome to a world beyond words.
        </p>
      </div>
      <div
        id="video"
        className="bg-black h-[42.5vh] w-[42.5vw] min-w-[340px] rounded-2xl"
      >
        <video
          src="https://videos.pexels.com/video-files/3999371/3999371-uhd_3840_2160_24fps.mp4"
          className="h-full w-full object-contain"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
}

export default Page6;
