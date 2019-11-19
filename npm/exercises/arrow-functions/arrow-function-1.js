// ## Krótszy zapis
// Skróć maksymalnie zapis poniszych funkcji przez wykorzystanie `arrow function`

let evens = [1, 3, 5, 7];

// ES5
const odds = evens.map(v => v + 1);

const pairs = evens.map(v => ({ even: v, odd: v + 1 }));

const nums = evens.map((v, i) => v + i);

const add = (a, b) => a + b;