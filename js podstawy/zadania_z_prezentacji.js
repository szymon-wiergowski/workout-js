// // // const pokemons = ["Bulbasaur", "Ivysaur", "Venusaur"];

// // function modifyMember(reference) { 
// //     reference.foo = "bar" 
// // } 

// // var obj = { foo: "foo" } 
// // modifyMember(obj) 
// // console.log(obj) // { foo: "bar" }


// // function modifyString(stringValue) {
// //     stringValue = "new string value";
// //     console.log("stringValue", stringValue);
// // }

// // const someStringValue = "value 123";

// // modifyString(someStringValue);
// // console.log(someStringValue);




// // const condition = false;

// // if (condition) {
// //     console.log("JEST GIT")
// // } 

// // if (!condition) {
// //     console.log("NIE JEST GIT, ALE DAMY RADE");
// // }



// // const condition = false;

// const index = 1;

// if (index === 2) {
//     console.log("JEST GIT")
// } else if(index === 3) {
//     console.log("NO NIE JEST GIT ALE JEST OK")
// } else {
//     console.log("MAM DOBRY WARUNEK")
// }


// // Stwórz zmienną.
// // Napisz instrukcję warunkową IF, 
// // Która wydrukuje:
// // 1 kiedy zmienna jest równa 1
// // 2 kiedy zmienna jest równa 2

// const variable = 123;

// if (variable === 1) {
//     // console.log('1')
//     console.log(variable)
// } 

// if (variable === 2) {
//     // console.log(variable)
//     console.log(2)
// }





// // Stwórz zmienną.
// // Napisz instrukcję warunkową IF, 
// // Która wydrukuje:
// // 1 kiedy zmienna jest równa 1
// // 2 kiedy zmienna jest równa 2
// // 3 kiedy zmienna jest równa 3
// // ‘Error’ dla każdego innego przypadku

// const variable2 = 1;

// if (variable2 === 1) {
//     console.log(1)
// } else if (variable2 === 2) {
//     console.log(2)
// } else if (variable2 === 3) {
//     console.log(3)
// // } else {
// //     console.log("error")
// // }


// // if (variable2 === 1 || variable2 === 2 || variable2 === 3) {
// //     console.log(variable2)
// // } else {
// //     console.log("error")
// // }


// // if (variable2 < 4 && variable2 > 0) {
// //     console.log(variable2)
// // } else {
// //     console.log("error")
// // }











// const variable4 = 4 > 1;


// const evaluatedExpression = variable4 ? "jest ok" : "jest nie ok"

// console.log(evaluatedExpression)

// const temporaryVariable;
// if (variable4) {
//     temporaryVariable = "jest ok"
// } else {
//     temporaryVariable = "jest nie ok"
// }




// const sayHello = function(name) {
//     console.log("No hej: " + name )
// }

// sayHello("Michal");
// sayHello("Joanna");
// sayHello("Janek");




// const doubleN = function() {
//     console.log(number * 2);
// }

// doubleN();



// const doubleN = function(number) {
//     const result = number * 2;
//     // console.log(result);

//     return result;
// }


// console.log('wartosc zwrocona ' + doubleN(2));
// console.log('wartosc zwrocona ' + doubleN(4));

// const double2 = doubleN(2)
// const double4 = doubleN(4);

// const variable3 = 'cos innego';

// switch(variable3) {
//     case 'test':
//         console.log('test');
//         break;
//     case 'cos innego':
//         console.log('cos innego')
//         break;
//     default: 
//         console.log('zupelnie cos innego nie umiem tego obsluzyc') 

// }







// const addOne = function() {
//     if(false) {
//         return;
//     }

//     console.log('bardzo wazna kwestia')
// }







// Stwórz funkcję dodającą dwie liczby i zwroc wynik tego dodawania

// const sum = function(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(2,3));


// const func1 = function() {
//     const variable = 1;
//     console.log(variable)
// }

// const func2 = function() {
//     const variable = 2;
//     console.log(variable)
// }





// func1();
// func2();



// console.log(variable);


// (function(number) {
//     console.log('test ', number)
// })(10);



// Stwórz funkcję, która dodaje 3 liczby. Zwróć je. 
// Spraw, aby funkcja sama się wywołała.

// (function(number1, number2, number3) {
//     console.log(number1 + number2 + number3)
// })(1,2,3);


// const sum = function(number1, number2, number3) {
//     return number1 + number2 + number3;
// };



// console.log(sum(1, 2, 3));







// Stwórz funkcję, która zwiększa przekazaną do niej liczbę o 1, jeśli ta liczba jest ujemna, 
// Lub zmniejszą tę liczbę, jeśli ta jest dodatnia. 
// Zawsze zwracaj zmodyfikowaną wartość


// const func2 = function(number) {
//     if (number >= 0) {
//         number = number - 1;
//         // return number;
//     } else {
//         number = number + 1;
//         // return number;
//     }

//     return number;

// }


// function modifyMember(reference) {
//     reference.foo = "bar"
//  }
 
//  var obj = { foo: "foo" }
//  modifyMember(obj)
//  console.log(obj) // { foo: "bar" }
 





//  function modifyString(stringValue) {
//     stringValue = "new string value";
//     console.log("stringValue", stringValue);
//  }
 
//  const someStringValue = "value 123";
 
//  modifyString(someStringValue); //stringValue new string value

//  console.log(someStringValue); //value 123
 




//   Napisz funkcje, która sprawdza czy w przekazanej jako parametr liscie
// jest element (rowniez przekazany jako parametr)

const arr = [1,2,4];

const fun1 = (arr, element) => {
    console.log(arr.indexOf(element))
    if (arr.indexOf(element) === -1) {
        console.log("true")
    }
    
} 

console.log(fun1(arr, 2))

