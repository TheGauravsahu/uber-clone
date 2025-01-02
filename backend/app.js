import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";

connectDB();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Uber clone.");
});

app.use("/api/users", userRoutes);
app.use("/api/captains", captainRoutes);

export default app;
