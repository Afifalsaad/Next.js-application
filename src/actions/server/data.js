"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export const getAnimalsData = async () => {
  const collection = await dbConnect(collections.ANIMALS);
  const animalsData = await collection.find().toArray();

  // Convert ObjectId to string for client components
  const serializedData = animalsData.map((animal) => ({
    ...animal,
    _id: animal._id.toString(),
  }));

  return serializedData;
};

// export const addToDB = async () => {
//   const doc = { name: "Test", email: "test@gmail.com" };

//   const collection = await dbConnect(collections.TEST);

//   const res = await collection.insertOne(doc);
//   if (res.acknowledged) {
//     console.log("This is from test", res.insertedId);
//     return res;
//   }
// };
