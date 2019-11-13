// Zadanie 2
const name = "Twoje imie";
console.log(typeof name)

let variable = "inna zmienna";
variable = "ktora moge zmieniac"
console.log(typeof variable)

// Zadanie 3 
const myImportantVariable = "jakas wazna wartosc"
console.log(typeof myImportantVariable);

// Zadanie 4
// Stwórz obiekt opisujący twój wymarzony samochód lub dom. Wydrukuj wszystkie własności do konsoli
const Car = {
    name: "Ferrari",
    doors: "2",
    engine: "5.0",
    hp: 600
}
console.log(Car)
console.log(Car.name)
console.log(Car.doors)
console.log(Car.engine)
console.log(Car.hp)

// Zadanie 6

// Stwórz tablice zawierającą 1000 losowych wartości. 
// Spróbuj użyć metody obiektu Math (Math.random()). 
let array = [];
for (let i = 0; i < 100; i++) {
    array[i] = Math.random();
}
console.log(array)

// Zadanie 7
// Stwórz tablice z pięcioma losowymi wartościami.
// Wydrukuj pierwszą i trzecią wartość. Zwiększ drugą wartość o 2. 

const array2 = [1,2,3,4,5];
console.log(array2[0])
console.log(array2[2])
array[1] += 2; // lub array[1] = array[1] + 2;


// Zadanie 8

// Znajdź 9 w [1,2,3,4,5,6,7,8,9,10]
const array3 = [1,2,3,4,5,6,7,8,9,10];
indexof9 = array3.indexOf(9);
console.log("Liczba 9 jest na miejscu numer: " + indexof9)


// Zadanie 10

// Porównaj różne rodzaje zmiennych różnych typów. Sprawdź kiedy warto użyć == a kiedy nie. 
console.log('1' == 1)
console.log('1' === 1)
console.log('1' !== 1)
console.log('1' != 1)
console.log('1' != 'a')
console.log('1' != [1])
console.log(1 != [1])


// Zadanie 11

// Stwórz zmienna, która jest falsy.
// Stwórz kolejna zmienną i przypisz jej pierwszą zmienna OR 1. 
// Zweryfikuj wynik

const falsyValue = ""  // pusty string jest FALSY

const variable2 = falsyValue || 1;
console.log(variable2)


// Zadanie 12

// Stwórz zmienną.
//  Napisz instrukcję warunkową IF, 
// Która wydrukuje:
// 1 kiedy zmienna jest równa 1
// 2 kiedy zmienna jest równa 2
const variable3 = 1;

if (variable3 === 1) {
    console.log(1)
} else if (variable3 === 2) {
    console.log(2)
}


// Zadanie 13

// Stwórz zmienną.
// Napisz instrukcję warunkową IF, 
// Która wydrukuje:
// 1 kiedy zmienna jest równa 1
// 2 kiedy zmienna jest równa 2
// 3 kiedy zmienna jest równa 3
// ‘Error’ dla każdego innego przypadku

// Opcja numer 1:
const variable4 = 1;

if (variable4 === 1) {
    console.log(1)
} else if (variable4 === 2) {
    console.log(2)
} else if (variable4 === 3) {
    console.log(2)
} else {
    console.log("ERROR");
}

// Opcja numer 2:
const variable5 = 1;

if (variable5 === 1 || variable5 === 2 || variable5 === 3) {
    console.log(variable5)
} else {
    console.log("ERROR")
}


// Zadanie 14

// Stwórz zmienną.
// Napisz instrukcję warunkową switch, 
// Która wydrukuje:
// 1 kiedy zmienna jest równa 1
// 2 kiedy zmienna jest równa 2
// 3 kiedy zmienna jest równa 3
// ‘Error’ dla każdego innego przypadku
const variable6 = 1;

switch (variable6) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
            console.log('error');
        
}

// Zadanie 15

// Stwórz funkcję dodającą dwie liczby

// Opcja numer 1
const sumOfTwoNumbers = function(num1, num2) {
    return num1 + num2;
}

// Opcja numer 2
// const sumOfTwoNumbers = function(num1, num2) {
//     const sum = num1 + num2; 
//         return sum
// }


// Opcja numer 3
// const sumOfTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }

// Wszystkie opcje mozna wywolac w taki sposob
const sum1 = sumOfTwoNumbers(1,2);
console.log(sum1)



// Zadanie 16

// Stwórz funkcję, która dodaje 3 liczby. Zwróć je. 
// Spraw, aby funkcja sama się wywołała.

(function(num1, num2, num3) {
    const sum =  num1 + num2 + num3;
    console.log(sum)
    return sum;
})(1,2,3);


// Zadanie 17

// Stwórz funkcję, która zwiększa przekazaną do niej liczbę o 1, jeśli ta liczba jest ujemna, 
// Lub zmniejszą tę liczbę, jeśli ta jest dodatnia. 
// Zawsze zwracaj zmodyfikowaną wartość

const func1 = (number) => {
    if (number >= 0) {
        return number-=1;
    }

    return number+=1;
}

console.log(func1(-1))


