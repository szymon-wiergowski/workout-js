const mockedBooks = [
    {id: 1, title: 'Mark'},
    {id: 2, title: 'Paul'},
];

function getBooks() {
    return new Promise((resolve, reject) => {
        resolve(mockedBooks);
    });
}

function getBookById(id) {
    return new Promise((resolve, reject) => {
        resolve(mockedBooks[id]);
        // reject(`error`);
    });
}

module.exports = { getBooks, getBookById };