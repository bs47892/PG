const express=require("express");
const router = express.Router();
const FBook=require("../Models/FBook");
const FBooksController = require ("../Controllers/FBook-controller")

router.get("/", FBooksController.getAllBooks);
router.post("/", FBooksController.addBook);
router.get("/:id", FBooksController.getById);
router.put("/:id", FBooksController.updateBook);
router.delete("/:id", FBooksController.deleteBook);

module.exports = router;