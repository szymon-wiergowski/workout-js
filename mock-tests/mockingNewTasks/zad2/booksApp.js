const BOOKS = require('../books');

const getBooks = () => BOOKS;
const getBookById = (id) => BOOKS.filter(b => b.id === id);

module.exports = { getBooks, getBookById };