const booksApp = require('./booksApp');
jest.mock('./booksApp');

booksApp.getBooks.mockImplementation(() => {
    return [
        {
            id: 11,
            title: 'title11'
        },
        {
            id: 12,
            title: 'title12'
        },
    ];
});

booksApp.getBookById.mockImplementation(() => {
    return {
        id: '45',
        title: 'Title45'
    };
});

test('mocked booksApp getBooks', () => {
    expect(booksApp.getBooks()).toEqual([
        {
            id: 11,
            title: 'title11'
        },
        {
            id: 12,
            title: 'title12'
        },
    ]);
});

test('mocked booksApp getBookById', () => {
    expect(booksApp.getBookById()).toEqual({
        id: '45',
        title: 'Title45'
    });
});