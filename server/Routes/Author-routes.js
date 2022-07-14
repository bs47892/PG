const express=require("express");
const router = express.Router();
const Authors=require("../Models/Authors");
const authorsController = require ("../Controllers/author-controller")

router.get("/", authorsController.getAllAuthors);
router.post("/", authorsController.addAuthor);
router.get("/:id", authorsController.getById);
router.put("/:id", authorsController.updateAuthor);
router.delete("/:id", authorsController.deleteAuthor);

module.exports = router;