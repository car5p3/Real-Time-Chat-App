import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { getMessages, getUsersForSideBar } from "../controllers/message.controller.js";

const messageRouter = express.Router();

messageRouter.get("/users", protect, getUsersForSideBar);
messageRouter.get("/:id", protect, getMessages);
messageRouter.post("/send/:id", protect, );

export default messageRouter;