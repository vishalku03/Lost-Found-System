 import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  createItem,
  getItems,
  deleteItem,
  getMatches
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/match", auth, getMatches); 

router.get("/", auth, getItems);

router.post("/", auth, createItem);

router.delete("/:id", auth, deleteItem);

export default router;