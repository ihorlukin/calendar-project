import express from "express";
import {getEvents, createEvent, deleteEvent} from "../controllers/events.js"
const router = express.Router()

router.get("/:userId", getEvents)
router.post("/", createEvent)
router.delete("/:id", deleteEvent)

export default router