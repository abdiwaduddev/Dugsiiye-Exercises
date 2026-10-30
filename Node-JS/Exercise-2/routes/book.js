import express from "express";
const router = express.Router();

import {
  createBook,
  deleteBook,
  getBooks,
  getOneBook,
  updateBook,
} from "../controllers/bookControllers.js";

router.get("/", getBooks);
router.get("/:id", getOneBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
