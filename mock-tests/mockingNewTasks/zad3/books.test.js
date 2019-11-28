const booksService = require('./booksService');
jest.mock('./booksService');

it('should use mocked booksService to get books', () => {
    return booksService.getBooks().then(books => expect(books).toEqual([
        {id: 1, title: 'Mark'},
        {id: 2, title: 'Paul'},
    ]));
});

it('should use mocked booksService to get book - SUCCESS', () => {
    return booksService.getBookById(0).then(book => expect(book).toEqual(
        {id: 1, title: 'Mark'}
    ));
});

it('should use mocked booksService to get book - ERROR', () => {
    return booksService.getBookById(90).catch(e => expect(e).toMatch('error'));
});