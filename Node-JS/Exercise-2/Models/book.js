import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publisherYear: Number,
  genra: String,
});

const Book = mongoose.model("Book", BookSchema);
export default Book;
