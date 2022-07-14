const express=require("express");
const router = express.Router();
const Accessory=require("../Models/Accessories");
const accessoriesController = require ("../Controllers/Accessory-controller")

router.get("/", accessoriesController.getAllAccessories);
router.post("/", accessoriesController.addAccessory);
router.get("/:id", accessoriesController.getById);
router.put("/:id", accessoriesController.updateAccessory);
router.delete("/:id", accessoriesController.deleteAccessory);

module.exports = router;