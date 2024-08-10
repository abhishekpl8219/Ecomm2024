import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";

import authRoutes from "./routes/authRoute.js";
dotenv.config();
//database config
connectDb();
const app = express();

//midlleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("Welcome to ecomm app");
});

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `.bgCyan.white);
});
