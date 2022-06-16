const express=require("express");
const router = express.Router();
const AlBook=require("../Models/AlBook");
const alBooksController = require ("../Controllers/AlBook-controller")

router.get("/", alBooksController.getAllBooks);
router.post("/", alBooksController.addBook);
router.get("/:id", alBooksController.getById);
router.put("/:id", alBooksController.updateBook);
router.delete("/:id", alBooksController.deleteBook);

module.exports = router;