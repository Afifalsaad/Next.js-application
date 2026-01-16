"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const Species = () => {
  const [species, setSpecies] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        return res.json();
      })
      .then((result) => setSpecies(result));
  }, []);

  return (
    <div className="pb-30 px-5 md:px-0">
      <div className="">
        <h2 className="text-7xl font-semibold mb-6">Species</h2>
        <p className="text-[#686868] mb-7 text-2xl">
          Protecting wildlife for a healthy planet
        </p>
        <p className="mb-15 text-[18px]">
          We protect wildlife because they inspire us. But we also focus our
          efforts on those species—like tigers,
          <br /> rhinos, whales and marine turtles—whose protection influences
          and supports the survival of other <br />
          species or offers the opportunity to protect whole landscapes or
          marine areas.
        </p>
      </div>

      {/* Table */}
      <div className="max-w-4xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="gap-2 underline text-lg text-left">
                  <div className="flex items-center gap-2">
                    Common Name <FaArrowDown className="mt-1" />
                  </div>
                </th>
                <th className="gap-2 underline text-lg text-right">
                  <div className="flex items-center gap-2">
                    Conservation status <FaArrowDown className="mt-1" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {species.map((data) => (
                <tr key={data.id}>
                  <td>
                    <div className="flex items-center gap-10">
                      <div className="avatar">
                        <div className="mask mask-squircle h-13 w-13">
                          <Image
                            src={data.image}
                            alt={data.imageDescription}
                            width={200}
                            height={200}></Image>
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl mb-2">{data.name}</div>
                        <div className="text-sm opacity-50">
                          {data.scientificName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data.conservationStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Species;
