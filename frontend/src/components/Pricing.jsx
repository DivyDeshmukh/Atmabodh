import React from "react";

function Pricing() {
  return (
    <div className="flex gap-4 justify-center items-center bg-[#F8F9FB] p-52">
      <div className="w-96 h-48 bg-[#FFE0C3] rounded-lg shadow-md flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl font-bold">$15</h2>
        <p className="text-gray-600">Monthly</p>
        <button className="mt-4 px-4 py-2 bg-[#1B181F] font-semibold text-white rounded hover:bg-[#FFE0C3] hover:text-black hover:border-2 hover:border-[#1B181F]">
          Subscribe
        </button>
      </div>
      <div className="w-72 h-48 bg-[#FFE0C3] rounded-lg shadow-md flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl font-bold">$100</h2>
        <p className="text-gray-600">6 Months</p>
        <button className="mt-4 px-4 py-2 bg-[#1B181F] font-semibold text-white rounded hover:bg-[#FFE0C3] hover:text-black hover:border-2 hover:border-[#1B181F]">
          Subscribe
        </button>
      </div>
      <div className="w-72 h-48 bg-[#FFE0C3] rounded-lg shadow-md flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl font-bold">$200</h2>
        <p className="text-gray-600">Yearly</p>
        <button className="mt-4 px-4 py-2 bg-[#1B181F] font-semibold text-white rounded hover:bg-[#FFE0C3] hover:text-black hover:border-2 hover:border-[#1B181F]">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Pricing;
