const booksApp = require('./booksApp');

test('spy', () => {
    const getBooksMock = jest.spyOn(booksApp, "getBooks");

    getBooksMock.mockImplementation(() => []);
    expect(booksApp.getBooks()).toEqual([]);

    getBooksMock.mockRestore();
    expect(booksApp.getBooks()).toEqual([
        {
            id: 1,
            book: 'Title1'
        },
        {
            id: 2,
            book: 'Title2'
        }
    ]);
});