import Book from "../Models/book.js";

// Getting All Books
export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Getting one book info

export const getOneBook = async (req, res) => {
  const { id } = req.params;
  try {
    const Book = await Book.findById({ id });

    if (!Book) {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Creating Book

export const createBook = async (req, res) => {
  const book = new Book(req.body);
  const savedBook = await book.save();
  res.status(201).json(savedBook);
};

// Update Book

export const updateBook = async (req, res) => {
  const { id } = req.params;

  try {
    const updateBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateBook) {
      return res.status(404).send("User not found");
    }

    res.json(updateBook);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

//Delete Book
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);

    if (!deleteBook) {
      return res.status(404).send("User not found");
    }

    res.send(`User with id ${id} deleted`);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
