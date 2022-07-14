const express=require("express");
const router = express.Router();
const Event=require("../Models/Events");
const eventController = require ("../Controllers/Event-controller")

router.get("/", eventController.getAllEvents);
router.post("/", eventController.addEvent);
router.get("/:id", eventController.getById);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;