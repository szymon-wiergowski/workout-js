const app = require('./app');
jest.mock('./app');

app.add.mockImplementation((a,b,c) => a+b+c);
app.distract.mockImplementation((a,b,c) => a-b-c);
app.multiply.mockImplementation((a,b,c) => a*b*c);
app.divide.mockImplementation((a,b,c) => a/b/c);

test('mocked app', () => {
    expect(app.add(1,2,3)).toBe(6);
});

test('mocked distract', () => {
    expect(app.distract(1,2,3)).toBe(-4);
});
test('mocked multiply', () => {
    expect(app.multiply(1,2,3)).toBe(6);
});
test('mocked divide', () => {
    expect(app.divide(100,4,5)).toBe(5);
});