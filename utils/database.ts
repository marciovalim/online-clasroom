import { Db, MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

interface ConnectionResponse {
  db: Db;
  client: MongoClient;
}

export default async function connectToDatabase(): Promise<ConnectionResponse> {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db("online-classroom");
  return { db, client };
}
