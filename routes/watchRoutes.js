import express from "express";
import { getWatches, getWatchById, addWatch, updateWatch, deleteWatch } from "../controllers/watchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getWatches);
router.get("/:id", getWatchById);
router.post("/", protect, addWatch); // only logged-in users can post
router.put("/:id", updateWatch);
router.delete("/:id", deleteWatch);

export default router;
