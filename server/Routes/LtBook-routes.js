const express=require("express");
const router = express.Router();
const LtBook=require("../Models/LtBook");
const ltBooksController = require ("../Controllers/LtBook-controller")

router.get("/", ltBooksController.getAllBooks);
router.post("/", ltBooksController.addBook);
router.get("/:id", ltBooksController.getById);
router.put("/:id", ltBooksController.updateBook);
router.delete("/:id", ltBooksController.deleteBook);

module.exports = router;