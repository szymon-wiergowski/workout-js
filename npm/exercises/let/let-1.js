// ## Zasięg
// Normalnie zmienna zdeklarowana przez `var`, będzie widoczna poza blokiem.
// Zamień `var i = 0` na `let i = 0` spraw aby kod dział poprawnie.

let numbers = [1,2,3,5,8];
let i;
for (i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);

}
console.log('i = ', i);
