const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

export const collections = {
  ANIMALS: "animals",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// let isConnected = false;

export const dbConnect = async (collectionName) => {
  // if (!isConnected) {
  //   try {
  //     await client.connect();
  //     isConnected = true;
  //     console.log("MongoDB connected successfully");
  //   } catch (error) {
  //     console.error("MongoDB connection error:", error);
  //     throw error;
  //   }
  // }
  return client.db(dbName).collection(collectionName);
};
