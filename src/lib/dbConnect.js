const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

export const collections = {
  ANIMALS: "animals",
  CONCERNS: "concerns",
};

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    maxPoolSize: 10,
  });

  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export const dbConnect = async (collectionName) => {
  const { db } = await connectToDatabase();
  return db.collection(collectionName);
};
