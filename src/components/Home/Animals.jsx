import React from "react";
import ImgMediaCard from "../card/Card";
import { getAnimalsData } from "@/actions/server/data";
import Card from "../card/Card";

const Animals = async () => {
  const data = await getAnimalsData();
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-10">
        Our <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {data.map((d, index) => (
          <div key={index}>
            <Card data={d}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals;
