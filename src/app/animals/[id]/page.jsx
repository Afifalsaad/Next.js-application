import { getDetails } from "@/actions/server/data";
import Image from "next/image";
import React from "react";

const InfoItem = ({ label, value }) => (
  <div className="mb-4 last:mb-0">
    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
      {label}
    </p>
    <p className="text-gray-800 font-medium text-lg leading-tight">{value}</p>
  </div>
);

const Details = async ({ params }) => {
  const { id } = await params;
  const animal = await getDetails(id);
  return (
    <div>
      <div className="min-h-screen bg-primary px-4 pb-30">
        <div className="max-w-5xl mx-auto w-full bg-primary rounded-4xl shadow-2xl overflow-hidden border border-white">
          <div className="relative h-137 w-full">
            <Image
              src={animal?.image}
              alt={animal?.name}
              fill
              className="object-fill"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-black text-white leading-none">
                    {animal.name}
                  </h1>
                  <p className="text-amber-400 font-medium italic text-lg">
                    {animal.species}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                    animal.conservationStatus === "Extinct"
                      ? "bg-gray-800 text-white"
                      : animal.conservationStatus === "Endangered"
                      ? "bg-red-500 text-white"
                      : animal.conservationStatus === "Vulnerable"
                      ? "bg-orange-400 text-white"
                      : animal.conservationStatus === "Near Threatened"
                      ? "bg-yellow-300 text-black"
                      : animal.conservationStatus === "Least Concern"
                      ? "bg-green-500 text-white"
                      : "bg-gray-400 text-white"
                  }`}>
                  {animal.conservationStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6 bg-slate-50">
            <div>
              <h3 className="text-gray-900 font-black text-xl mb-2">
                Description
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {animal.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <InfoItem
                icon="📍"
                label="Where to find"
                value={animal.whereToFind}
              />
              <InfoItem icon="🏠" label="Habitat" value={animal.habitat} />
              <InfoItem icon="🥩" label="Diet" value={animal.diet} />
              <InfoItem icon="⌛" label="Lifespan" value={animal.lifespan} />
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white p-4 rounded-2xl border border-amber-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-500 text-lg">💡</span>
                  <h4 className="font-bold text-amber-800 text-sm uppercase tracking-wider">
                    Fun Fact
                  </h4>
                </div>
                <p className="text-gray-600 text-sm italic leading-snug">
                  {`"${animal.funFacts}"`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
