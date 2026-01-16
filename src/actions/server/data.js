"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

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

export const getDetails = async (id) => {
  if (id.length != 24) {
    return {};
  }

  const query = { _id: new ObjectId(id) };

  const collection = await dbConnect(collections.ANIMALS);

  const result = await collection.findOne(query);
  return { ...result, _id: result._id?.toString() } || [];
};

// Add concerns to database
export const postConcern = async (data) => {
  const collection = await dbConnect(collections.CONCERNS);

  const postData = {
    ...data,
    createdAt: new Date(),
  };

  const result = await collection.insertOne(postData);
  if (result.acknowledged) {
    return {
      ...postData,
      _id: result.insertedId.toString(),
      insertedId: result.insertedId.toString(),
      acknowledged: true,
    };
  }
};
