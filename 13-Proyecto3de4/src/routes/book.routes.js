const express = require("express");
const router = express.Router();
const Book = require("../models/book.model");

// ** Middleware
const getBook = async (req, res, next) => {
  let book;
  const { id } = req.params;

  // ** Típico ID de MongoDB
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({
      message: "El ID del libro no es válido",
    });
  }

  try {
    book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        message: "El libro no fue encontrado",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ** Obtener todos los libros [GET ALL]
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    console.log("GET ALL", books);
    if (books.lenght === 0) {
      return res.status(204).json([]);
    }
    res(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.book = book;
  next();
});

// ** Crear un nuevo libro (recurso) [POST]
router.post("/", async (req, res) => {
  const { title, author, genre, publication_date } = req?.body;
  if (!title || !author || !genre || !publication_date) {
    return res.status(400).json({
      message:
        "Los campos de: título, autor, género, y fecha de publicación; son obligatorios",
    });
  }

  const book = new Book({
    title,
    author,
    genre,
    publication_date,
  });
  try {
    const newBook = await book.save();
    console.log(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
