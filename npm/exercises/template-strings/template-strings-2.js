// ## Interpolacja
// Zadeklaruj poprawnie zmienną `msg`, aby otrzymać 'Mam na imię John, mam 18 lat'
//   uzywajac string templates i zmiennych / funkcji ponizej.

const name = 'John';
const age = function() {
  return 18;
};

const msg = `Mam na imię ${name}, mam ${age()} lat`;

console.log(msg);