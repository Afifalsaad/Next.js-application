import Image from "next/image";
import React from "react";

const ClimateChange = () => {
  return (
    <div className="pb-30">
      <h2 className="text-3xl font-semibold text-center px-5 md:px-0 mb-2">
        The effects of climate change
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2 mb-8">
        Climate change is altering weather patterns, ecosystems, and livelihoods
        around the world. Understanding its impact is the first step toward
        protecting our planet and ensuring a sustainable future for all.
      </p>
      <div className="space-y-10 md:space-y-28">
        {/* The Amazon */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 flex-1">
          <div>
            <Image
              className="rounded-md px-5 md:px-0"
              src="/Amazon River.jpg"
              width={800}
              height={300}
              alt="amazon river"></Image>
          </div>
          <div className="max-w-xl md:mt-10 pl-5 md:pl-0">
            <h2 className="text-3xl font-semibold mb-5">Amazon River</h2>
            <p className="leading-7">
              The Amazon`s vast forests and rivers keep <br /> soils healthy,
              crops growing, and wildlife <br /> thriving. But as climate change
              dries forests <br /> and disrupts rainfall, this delicate balance
              is <br /> unraveling—putting communities, <br /> biodiversity, and
              the future of the forest <br /> itself at risk. Urgent and
              immediate action is <br /> now needed to ensure its conservation.
            </p>
            <div className="pt-7 md:mt-14">
              <button className="px-4 py-3 border-2 hover:cursor-pointer hover:bg-white/30 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* The Arctic */}
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-2 md:gap-10 flex-1">
          <div className="max-w-xl md:mt-10 pl-5 md:pl-0">
            <h2 className="text-3xl font-semibold mb-5">The Arctic</h2>
            <p className="leading-7">
              The Arctic is warming twice as fast as <br /> anywhere else in the
              world, melting the ice <br /> that regulates our climate. What
              happens <br /> here threatens not only Arctic ecosystems, <br />{" "}
              but will shape weather, seas, and communities <br /> around the
              world. This region <br /> must be protected to preserve its
              fragile <br /> ecosystems and limit dangerous global impacts.
            </p>
            <div className="mt-7 md:mt-14">
              <button className="px-4 py-3 border-2 hover:cursor-pointer hover:bg-white/30 rounded-full">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <Image
              className="rounded-md px-5 md:px-0"
              src="/The Arctic.jpg"
              width={800}
              height={300}
              alt="amazon river"></Image>
          </div>
        </div>

        {/* Disaster */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 flex-1">
          <div>
            <Image
              className="rounded-md px-5 md:px-0"
              src="/Disester.jpg"
              width={800}
              height={300}
              alt="amazon river"></Image>
          </div>
          <div className="max-w-xl md:mt-10 pl-5 md:pl-0">
            <h2 className="text-3xl font-semibold mb-5">
              Disaster preparedness
            </h2>
            <p className="leading-7">
              Climate change is fueling a record number <br /> of increasingly
              extreme weather events and <br /> disasters. From powerful storms
              to <br /> devastating floods and intense heatwaves, <br /> these
              events are putting people’s lives and <br /> livelihoods at
              growing risk. By preparing <br /> now, we can protect both
              communities and <br /> the environments they depend on.
            </p>
            <div className="mt-7 md:mt-14">
              <button className="px-4 py-3 border-2 hover:cursor-pointer hover:bg-white/30 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateChange;
