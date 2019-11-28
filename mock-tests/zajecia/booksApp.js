const BOOKS = require('./books');

const getBooksByAuthor = (author, books) =>
    books.filter(book => book.author === author);

const getBooksByGenre = (genre, books) =>
    new Promise((resolve, reject) => {
        const booksByGenre = books.filter(book => book.genre === genre);
        resolve(booksByGenre);
    });

module.exports = {
    getBooksByAuthor, getBooksByGenre
};