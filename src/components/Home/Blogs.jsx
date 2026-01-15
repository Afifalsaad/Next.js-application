import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <div>
      <div className="flex justify-between gap-8 py-10 px-5">
        <div className="hover:cursor-pointer group">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={"/bradley-singleton-egtekOpqIdY-unsplash.jpg"}
              alt="img"
              width={700}
              height={400}
              className="rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"></Image>
          </div>
          <div>
            <h2 className="flex items-center gap-1.5 text-2xl font-semibold pt-7 group-hover:underline">
              Stop destroying wildlife <FaArrowRight className="text-xl pt-1" />
            </h2>
            <p className="max-w-xl mt-2">
              69% Average Drop: According to the WWF Living Planet Report
              <br /> 2022, there has been an average 69% decline in the
              populations of <br />
              mammals, birds, amphibians, reptiles, and fish since 1970.
            </p>
          </div>
        </div>

        <div className="hover:cursor-pointer group">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={"/tim-mossholder-qq-8dpdlBsY-unsplash.jpg"}
              alt="img"
              width={700}
              height={400}
              className="rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"></Image>
          </div>
          <div>
            <h2 className="flex items-center gap-1.5 text-2xl font-semibold pt-7 group-hover:underline">
              Sea life is in risk <FaArrowRight className="text-xl pt-1" />
            </h2>
            <p className="max-w-xl mt-2">
              Approximately 8 million metric tons of plastic enter our oceans
              every year. To visualize this, it is the equivalent of dumping a
              garbage truck full of plastic into the ocean every single minute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
