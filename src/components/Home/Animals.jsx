import React from "react";
import { getAnimalsData } from "@/actions/server/data";
import { ImgCard } from "../card/Card";

const Animals = async () => {
  const data = await getAnimalsData();
  return (
    <div>
      <h2 className="text-2xl text-center font-bold py-5">
        Know about <span className="text-secondary">Them</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 md:px-25 lg:px-5">
        {data.map((d, index) => (
          <div key={index}>
            <ImgCard data={d}></ImgCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals;
