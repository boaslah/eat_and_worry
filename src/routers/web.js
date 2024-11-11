import express from "express";
import webControllers from "../controllers/webControllers.js";
import { decode } from "jsonwebtoken";


const router = express.Router();

router.get("/", webControllers.index);
router.get("/chat", webControllers.chat)
router.post("/web/chat", webControllers.sendRequest)



export default router