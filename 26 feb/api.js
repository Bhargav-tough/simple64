const express = require('express');
const app = express();
const PORT = 3880;

let books = [
 {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", publishedYear: 1925, genre: "Classic Fiction", price: 12.99, available: true},
 {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084", publishedYear: 1960, genre: "Fiction", price: 14.99, available: true},
 {id: 3, title: "1984", author: "George Orwell", isbn: "9780451524935", publishedYear: 1949, genre: "Dystopian Fiction", price: 13.99, available: false}
];

// Get all books
app.get('/api/books', (req, res) => {
 res.json(books);
});

// Get book by ID
app.get('/api/books/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const book = books.find(b => b.id === id);
 if (!book) return res.status(404).json({ error: "Book not found" });
 res.json(book);
});

// Get available books
app.get('/api/books/available', (req, res) => {
 res.json(books.filter(b => b.available));
});

// Get books by author
app.get('/api/books/author/:author', (req, res) => {
 const author = req.params.author;
 res.json(books.filter(b => b.author.includes(author)));
});

app.listen(PORT, () => {
 console.log(`API running on http://localhost:${PORT}`);
});
