// User: Jnpa
// Pass: lLvdK8ubXiZ7J3do
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export async function connectDB() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongodb is connected to", mongoose.connection.db.databaseName);
});
