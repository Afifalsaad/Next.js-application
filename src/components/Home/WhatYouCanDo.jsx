import Image from "next/image";
import React from "react";

const WhatYouCanDo = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-20 border ">
        <div className=" bg-[#ffefe9] px-10 py-5 md:p-10 w-100 relative left-0 md:left-5 lg:left-30 z-50 md:rounded-md">
          <h2 className="text-black text-2xl font-semibold mb-5">
            Nature needs you now
          </h2>
          <p className="text-[#4b4b4b]">
            Nature gives us everything we need to survive, but it`s under threat
            like never <br /> before. The crisis demands immediate
            <br /> action from all of us. Sign the pledge to
            <br /> protect nature.
          </p>
          <button className="bg-black rounded-full px-3 py-2 mt-5 font-semibold">
            Take action
          </button>
        </div>
        <div className="relative md:right-10 lg:right-20 overflow-hidden rounded-md">
          <Image
            className="rounded-[6px] px-1.5"
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
