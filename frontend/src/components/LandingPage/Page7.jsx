import React from "react";
import features from "./data/features.js";
import Button from "../Button";

function Page7() {
  return (
    <div className="flex flex-col w-full items-center justify-center pt-12 bg-white pb-8 overflow-x-hidden">
      <div
        id="top"
        className="flex  flex-col items-center justify-center gap-2"
      >
        <h1 className="text-3xl uppercase text-center">
          What our users say about us
        </h1>
        <p className="font-light text-[12px] w-[90%] text-center sm:w-[70%]">
          Thoughts is rulling in the digital world and our users has something
          to say about the same. Do check their individual stories of
          transformation and get inspired today!
        </p>
      </div>

      <div className="flex gap-6 pt-8 sm:pt-12 justify-center md:ml-0 sm:pl-0 flex-wrap md:flex-wrap mb-3 w-[90%] md:w-[auto]">
        {features.map((item, index) => (
          <div
            id="card"
            key={index}
            className="flex flex-col md:flex-row bg-[#f8f9fb] rounded-xl gap-4 p-6"
          >
            <div id="left" className="w-full md:w-[180px]">
              <div
                id="img"
                className="h-[200px] md:h-full w-full md:w-auto overflow-hidden rounded-lg pt-4 md:pt-2 relative"
              >
                <img
                  src={item.profile}
                  alt=""
                  className="h-full w-full object-contain lg:object-cover rounded-xl"
                />
                <div className="absolute bottom-0 pl-2 sm:bottom-0 md:bottom-0 bg-[#504237] w-full md:w-[180px] flex gap-2 text-[12.5px] text-white py-1 rounded-lg items-center justify-center">
                  <h4>{item.name} </h4>
                  <i className="ri-checkbox-circle-fill text-blue-500"></i>
                </div>
              </div>
            </div>
            <div
              id="right"
              className="w-full md:w-[220px] font-light flex flex-col gap-2 pt-6"
            >
              <div id="top">
                <p className="text-[10px]">{item.ratings}</p>
              </div>
              <p className="text-[12px] font-light">{item.content}</p>
              <div
                id="info"
                className="flex flex-wrap md:flex-nowrap gap-4 justify-center md:justify-start"
              >
                <div className="flex flex-col gap-1 text-[18px] bg-white p-2 h-auto w-[80px] items-center justify-center rounded-lg">
                  <h1 className="font-bold">{item.likes}</h1>
                  <p className="text-[8.5px] font-light">Thoughts</p>
                </div>
                <div className="flex flex-col gap-1 text-[18px] bg-white p-2 h-auto w-[80px] items-center justify-center rounded-lg">
                  <h1 className="font-bold">{item.blogs}</h1>
                  <p className="text-[8.5px] font-light">Blogs</p>
                </div>
                <div className="flex flex-col gap-1 text-[18px] bg-white p-2 h-auto w-[80px] items-center justify-center rounded-lg">
                  <h1 className="font-bold">{item.podcasts}</h1>
                  <p className="text-[8.5px] font-light">Podcasts</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button text={"All Review"} linkClassName={"hover:bg-[#F8F9FB]"} />
    </div>
  );
}

export default Page7;
