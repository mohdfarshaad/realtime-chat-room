import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Server is running on Port : ", process.env.PORT);
});
