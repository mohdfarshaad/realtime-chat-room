import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${process.env.DB_NAME}`
    );
    console.log(
      "Mongo DB connection at host : ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Mongo connection error", error);
    process.exit(1);
  }
};

export { connectMongoDB };
