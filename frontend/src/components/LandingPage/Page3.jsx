import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "../../App.css";

function Page3() {
  const [index, setIndex] = useState(0);

  const data = [
    {
      option: "Ask Saraswati, Your AI guide",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0u87GahnlqyeFMLhQAyXNaKn-bqAIKUb9_aKlzxYUl09NoUejixhAw58H6fvCETx6fk&usqp=CAU",
      text: "Explore a rich collection of thought-provoking blogs or share your own insights. Our user-friendly platform allows seamless reading and effortless uploading to foster a vibrant community of ideas",
    },
    {
      option: "Learn about mind & brain from experts",
      src: "https://i.pinimg.com/474x/7f/a4/1e/7fa41ebe20861a4338f90b7e1363a5a9.jpg",
      text: "Dive into a diverse repository of captivating stories and articles, or contribute your unique perspective. While its seamless publishing process fosters an inclusive ecosystem where voices from all walks of life converge.",
    },
    {
      option: "Podcast Listening",
      src: "https://i.pinimg.com/236x/d9/40/4a/d9404acd8e235172dc53c184ee99ef54.jpg",
      text: "Embark on a journey through a myriad of enlightening narratives and essays, or pen down your own reflections. Our platform's simplicity ensures a delightful reading experience.",
    },
    {
      option: "Meditation & Sleep Sounds",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3MNPgAEEjF2phJFIgyTwRBQFZmn9VNKVaA&usqp=CAU",
      text: "Immerse yourself in a treasure trove of compelling narratives and insightful musings, or add your voice to the conversation. Thanks to our streamlined platform.",
    },
    {
      option: "Healthy Recipe library",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&usqp=CAU",
      text: "Indulge in an array of captivating tales and thought-provoking analyses, or share your own profound insights. With our user-centric platform, navigating through engaging content is a breeze.",
    },
    {
      option: "Habit Tracking & Workout Routines",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&usqp=CAU",
      text: "Indulge in an array of captivating tales and thought-provoking analyses, or share your own profound insights. With our user-centric platform, navigating through engaging content is a breeze, and sharing your thoughts with the world becomes a seamless endeavor.",
    },
    {
      option: "Learn different skills from available courses",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&usqp=CAU",
      text: "Indulge in an array of captivating tales and thought-provoking analyses, or share your own profound insights. With our user-centric platform, navigating through engaging content is a breeze, and sharing your thoughts with the world becomes a seamless endeavor.",
    },
    {
      option: "Share your progress on community forum",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG7bjaEFwSdVs4KvkIleUaasOjgFKrf7z6g&usqp=CAU",
      text: "Indulge in an array of captivating tales and thought-provoking analyses, or share your own profound insights. With our user-centric platform, navigating through engaging content is a breeze, and sharing your thoughts with the world becomes a seamless endeavor.",
    },
  ];

  return (
    <div className="h-auto w-fit sm:w-full bg-[#1b181f] pb-8 overflow-x-hidden">
      <div
        id="top"
        className="flex flex-col sm:text-7xl items-center justify-center pt-12 text-center"
      >
        <h1 className="text-6xl sm:text-7xl uppercase text-[#ffe0c3]">
          Features with
        </h1>
        <h1 className="text-6xl sm:text-7xl uppercase text-[#ffe0c3]">
          More Wonders
        </h1>
      </div>

      <div
        id="bottom"
        className="w-full h-auto gap-8 flex justify-center items-center mt-6 flex-wrap overflow-hidden"
      >
        <div
          id="left"
          className="flex flex-col gap-3 p-4 min-w-[250px] w-[21vw] max-h-[245px] overflow-y-auto features"
        >
          {/* <div id="option1" className="flex w-full justify-between">
            <button>Thoughts Sharing</button>
            <i class="ri-arrow-right-circle-line"></i>
          </div> */}

          {data.map((item, i) => (
            <div
              id={`option${i}`}
              className={`${
                index === i ? "bg-white text-black" : " text-white"
              } flex w-full justify-between gap-4 uppercase hover:bg-white hover:text-black p-1 px-3 rounded-lg transition-all duration-200`}
              key={i}
            >
              <button
                className="uppercase text-[12.5px] text-left"
                onClick={() => setIndex(i)}
              >
                {item.option}
              </button>
              <i className="ri-arrow-right-circle-line"></i>
            </div>
          ))}
        </div>
        <div
          id="right"
          className="h-full bg-white w-[40vw] min-w-[335px] rounded-xl "
        >
          <div id="block" className="flex gap-2 pr-2" key={index}>
            <div
              id="img"
              className="h-[215px] w-[50%] overflow-hidden p-2 translate-y-2 rounded-lg translate-x-1"
            >
              <img
                src={data[index].src}
                alt=""
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div id="text" className="w-[50%] pt-4">
              <div id="top">
                <h1 className="text-[12px]">{data[index].text}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-end pr-4 -translate-y-8 md:-translate-y-12">
            <div className="border-b-2 border-slate-300 rotate-180 w-[15%] sm:w-[16.5%] md:w-[17.5%] lg:w-[22%] translate-y-12"></div>
            <Button
              text={"TRY NOW"}
              className={"translate-y-4"}
              linkClassName={"hover:bg-[white]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
