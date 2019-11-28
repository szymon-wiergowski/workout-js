const BOOKS = require('../books');
const getBooks = () => {
    return new Promise((resolve, reject) => {
        resolve(BOOKS);
    });
};

const getBookById = (id) => {
    return new Promise((resolve, reject) => {
        const book = BOOKS.filter(b => b.id === id);
        if (book) {
            resolve(book);
        } else {
            reject('error');
        }
    });
};

module.exports = { getBooks, getBookById };