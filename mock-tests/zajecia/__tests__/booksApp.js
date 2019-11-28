const booksApp = require('../booksApp');

test("should return all author's books", () => {
    const MOCKED_BOOKS = [
        {
            id: 1,
            title: 'Book1MOcked',
            author: 'Author2Mocked',
            createdYear: '1992',
            genre: 'drama'
        },
        {
            id: 2,
            title: 'Book2MOcked',
            author: 'Author2Mocked',
            createdYear: '1993',
            genre: 'science-fiction'
        },
        {
            id: 3,
            title: 'Book3',
            author: 'Author2Mocked',
            createdYear: '1992',
            genre: 'science-fiction'
        },
    ];

    expect(booksApp.getBooksByAuthor('Author2Mocked', MOCKED_BOOKS)).toEqual([
        {
            id: 1,
            title: 'Book1MOcked',
            author: 'Author2Mocked',
            createdYear: '1992',
            genre: 'drama'
        },
        {
            id: 2,
            title: 'Book2MOcked',
            author: 'Author2Mocked',
            createdYear: '1993',
            genre: 'science-fiction'
        },
        {
            id: 3,
            title: 'Book3',
            author: 'Author2Mocked',
            createdYear: '1992',
            genre: 'science-fiction'
        },
    ]);
});

test('should return all books with the genre - PROMISE', () => {

    const MOCKED_BOOKS = [
        {
            id: 1,
            title: 'Book1MOcked',
            author: 'Author2Mocked',
            createdYear: '1992',
            genre: 'drama'
        },
        {
            id: 2,
            title: 'Book2MOcked',
            author: 'Author2Mocked',
            createdYear: '1993',
            genre: 'science-fiction'
        },
        {
            id: 3,
            title: 'Book3',
            author: 'Author2Mocked',
            createdYear: '1992',
            genre: 'science-fiction'
        },
    ];

    return booksApp.getBooksByGenre('science-fiction', MOCKED_BOOKS).then(books => {
        expect(books).toEqual([
            {
                id: 2,
                title: 'Book2MOcked',
                author: 'Author2Mocked',
                createdYear: '1993',
                genre: 'science-fiction'
            },
            {
                id: 3,
                title: 'Book3',
                author: 'Author2Mocked',
                createdYear: '1992',
                genre: 'science-fiction'
            },
        ]);
    });
});