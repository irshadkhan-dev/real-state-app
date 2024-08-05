import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.DATABASE_URL;

async function testConnection() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Successfully connected to MongoDB");
    await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

testConnection();
