import { getDetails } from "@/actions/server/data";
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
  console.log(animal);
  return (
    <div>
      <div className="min-h-screen bg-slate-100 py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
              <img
                src={animal.image}
                alt={animal.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-5xl font-black text-gray-900 tracking-tighter">
                    {animal.name}
                  </h1>
                  <p className="text-xl text-amber-600 font-medium italic">
                    {animal.species}
                  </p>
                </div>
                <span className="px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold border border-amber-200">
                  {animal.conservationStatus}
                </span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {animal.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl mb-8">
                <InfoItem label="📍 Where to find" value={animal.whereToFind} />
                <InfoItem label="🏠 Habitat" value={animal.habitat} />
                <InfoItem label="🥩 Diet" value={animal.diet} />
                <InfoItem label="⏳ Lifespan" value={animal.lifespan} />
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-1 rounded-xl">
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="text-amber-600 font-bold flex items-center gap-2 mb-1">
                    💡 Fun Fact
                  </h4>
                  <p className="text-gray-700 italic">{animal.funFacts}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
