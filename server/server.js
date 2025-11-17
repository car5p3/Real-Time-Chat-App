import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./src/routes/auth.route.js";
import messageRouter from "./src/routes/message.route.js";
import { connectDB } from "./src/lib/mongodb.lib.js";
import cors from "cors";

try {
  await connectDB();
  console.log("Connected to MongoDB");

  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));

  app.use("/api/auth", authRouter);
  app.use("/api/messages", messageRouter);

  app.get("/api/", (req, res) => {
    res.send("Server is running");
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api`);
  });
} catch (error) {
  console.error("Failed to connect to MongoDB", error);
  process.exit(1);
}
