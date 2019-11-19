// ## Ponowna deklaracja
// Zmień deklaracje `var` zmiennej `x` na `let`, i spraw aby kod zadziałał.
"use strict"
function fn() {
  let x;
  if (true) {
    x = 'ok';
  }
  x = "inner";
  console.log(x);
};

fn();