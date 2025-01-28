import dotenv from "dotenv";
import { app } from "./app.js";
import { connectMongoDB } from "./config/db.js";

dotenv.config();

connectMongoDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on Port : ", process.env.PORT);
  });
});
