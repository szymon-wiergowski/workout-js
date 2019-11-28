const Book = require('./student');

jest.mock('./student', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getWholeName: function() {
                return 'costam';
            }
        };
    });
});

beforeEach(() => {
    Book.mockClear();
});

test('The book should be created', () => {
    const book = new Book();
    expect(book).toBeTruthy();
});

test('We can check if the book called the class constructor', () => {
    const book = new Book();
    expect(Book).toHaveBeenCalledTimes(1);
});

test('we cna check wholename', () => {
    const book = new Book();
    expect(book.getWholeName()).toBe('costam');
});