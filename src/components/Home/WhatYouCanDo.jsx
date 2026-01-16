import Image from "next/image";
import React from "react";

const WhatYouCanDo = () => {
  return (
    <div>
      <h2 className="font-bold text-center text-3xl mt-20">
        Make a <span className="text-secondary">Difference</span>
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mt-2 mb-8">
        Your support helps protect nature and create a better future.
      </p>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between pb-30">
        <div className=" bg-[#ffefe9] px-10 py-5 md:p-7 w-100 md:w-110 relative left-0 md:left-5 lg:left-20 z-50 md:rounded-md">
          <h2 className="text-black text-3xl font-semibold mb-2">
            Nature needs you now
          </h2>
          <p className="text-[#4b4b4b]">
            Nature gives us everything we need to survive,
            <br /> but it`s under threat like never before. The crisis demands
            immediate action from all of us. Sign the pledge to protect nature.
          </p>
          <button className="bg-black rounded-full px-3 py-2 mt-5 font-semibold">
            Take action
          </button>
        </div>
        <div className="relative md:right-10 lg:right-20">
          <Image
            className="rounded-t-xl md:rounded-xl  px-1.5"
            alt="lion"
            width={600}
            height={300}
            src={"/lion-pride-dry-forest.jpg"}></Image>
        </div>
      </div>
    </div>
  );
};

export default WhatYouCanDo;
