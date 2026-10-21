const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Deep Work", author: "Cal Newport" },
];

// 👇 Your routes go here

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Get All Books
// GET
app.get("/books", (req, res) => {
  res.json(books);
});

// get one Book
// GET

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).send("User not found");
  res.json(book);
});

// Add new Book
// POST
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update Book
// PUT
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).send("User not found");
  book.title = req.body.title;
  res.json(book);
});

// Delete

app.delete("/books/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);
  res.send("Book Deleted");
});
