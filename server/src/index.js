import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on Port : ", process.env.PORT);
});
