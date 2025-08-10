import express from "express";
import { getWatches, getWatchById, createWatch, updateWatch, deleteWatch } from "../controllers/watchController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getWatches);
router.get("/:id", getWatchById);
router.post("/", protect, createWatch); 
router.put("/:id", protect, updateWatch);
router.delete("/:id", protect, deleteWatch);

export default router;
