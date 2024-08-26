import React from "react";

function Card({ data }) {
  return (
    <div className="bg-white flex items-start justify-center gap-4 h-[200px] w-[300px] flex-col p-4 rounded-2xl">
      <div id="top" className="flex gap-4 ">
        <div id="user-info" className="flex items-center">
          <div
            id="img"
            className="h-[35px] w-[35px] rounded-full overflow-hidden"
          >
            <img
              src={data.profile}
              alt={data.username}
              className="h-full w-full object-cover"
            />
          </div>
          &nbsp;
          <div id="text-info" className="flex flex-col">
            <h3 className=" text-[12px]">{data.name}</h3>
            <h3 className="text-slate-600 text-[10px]">@{data.username}</h3>
          </div>
        </div>
        <div id="settings"></div>
      </div>

      <div id="content" className="text-[12px]">
        {data.content}
      </div>

      <div
        id="features"
        className="flex justify-between w-full items-center border-t-[0.5px] border-t-slate-200 pt-2"
      >
        <div id="left" className="flex gap-3">
          <p className="text-[10px] font-light font-mono">
            <i class="ri-heart-fill text-red-500 text-[10px]"></i>
            {` ${data.likes}`}
          </p>
          <p className="text-[10px] font-light font-mono">
            <i class="ri-shape-fill text-[10px]"></i>
            {` ${data.shares}`}
          </p>
          <p className="text-[10px] font-light font-mono">
            <i class="ri-send-plane-2-line text-[10px]"></i>
            {` ${data.comments}`}
          </p>
        </div>
        <div id="right">
          <p className="text-[10px] font-light font-serif">{data.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
