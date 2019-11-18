// 1) Napisz funkcje, ktora przyjmuje dwie liczby jako argumenty i wyswietla wieksza z nich.

//-----------------------------------------------------------//

// function oneOftwoArgumentIsBigger (x, y){
//   if (x > y){
//     console.log(x);
//   } else {
//     console.log(y);

//     }
//   }
//   oneOftwoArgumentIsBigger(3, -5);

//***********************************************************//

// 2) niech funkcja z zadania 1 bedzie zabezpieczona na wypadek przekazania jednego z argumentów jako tekst.
//    W takiej sytuacji rozpatrz dwie opcje: pokaz blad, lub sprobuj zmienic napis na liczbe i wykonaj porównanie.

//-----------------------------------------------------------//

// function oneOftwoArgumentIsBigger(x, y) {
//   if (y > x) {
//     console.log(y);
//   }
//   else if (x > y) {
//     console.log(x);
//   } else if (x || y !== 'number') {
//     console.log("ERROR");
//   }
// }
// oneOftwoArgumentIsBigger(3, 66);

//***********************************************************//


// 3) Napisz funkcje, która przyjmuje napis jako argument i wyswietli dlugosc przekazanego napisu w postaci:
// "Przekazany napis ma dlugosc: {napis}"

//-----------------------------------------------------------//

// function string(string) {
//   console.log("Przekazany napis ma dlugosc: " + string.length)
// }
// string('SzymonWiergowski');

//***********************************************************//


// 4) Funkcje z zadania 3 zabezpiecz na ewentualnosc przekazania czegos innego niz napis.

//-----------------------------------------------------------//

// function string(string) {
//   if (typeof string !== 'string') {
//     console.log('to nie jest napis')
//   }
//   else {
//     console.log("Przekazany napis ma dlugosc: " + string.length)
//   }
// }
// string('szymon')

//***********************************************************//

// 5) Napisz funkcje, która przyjmuje obiekt opisujący osobe jako argument (Person = {
//     name: "jakies imie",
//     surname: "jakiesnazwisko"
// }) i wykorzysta wlasnosci obiektu do wyswietlenia takiej wiadomosc:
// "Dzien dobry, tu "name". Mam na nazwisko "surname"".

//-----------------------------------------------------------//

// const person = {
//   name : 'Szymon',
//   surname : 'Wiergowski'
// }
//   console.log('Dzien dobry, tu ' + person.name + '.' + ' Mam na nazwisko ' + person.surname + '.');

//***********************************************************//


// 6) Dla ćwiczeń. Napisz pętle while, która nigdy się nie zakończy ;)

//-----------------------------------------------------------//

// let i = 1;

// while (i = 1) {
//   console.log("Nie będę się lenił.");
//   i++;
// }

//***********************************************************//


// 7)  Napisz funkcje, w której wnętrzu jest pętla for. Zadanie tej funkcji, to przyjąć pewną liste z losowymi liczbami. Petla ma za zadanie
//     zacząć sumować wszyskie wartości z przekazanej tablicy aż do osiągniecią pewnego limitu (np suma dodanych już elementów przekracza 100).
//     Po osiągnieciu tego limitu funkcja ma zwrócić informacje na jakim indexie przerwała działanie.

//-----------------------------------------------------------//

//***********************************************************//


// 8) Napisz funkcje, która będzie odliczała czas od 10s do 0. Po osiągnieciu zera napisz użytkownikowi jakąś niespodziankę/nagrode za oczekiwanie

//-----------------------------------------------------------//

//***********************************************************//


// 9) Napisz funkcje, która stworzy i zwróci obiekt Samochod, ktory ma 3 własności:
// engine : "1.8",
// doors : 5,
// name : "Samochod moj"

// Wywolanie funkcji ma stworzyc obiekt i go zwrócić

//-----------------------------------------------------------//

const myCar = {
    engine: "1.8",
    doors: 5,
    name: "Samochod mój",
    print: function () {
        console.log("Engine: ", this.engine);
        console.log("Doors: ", this.doors);
        console.log("Name: ", this.name);
    }
}
myCar.print()

//***********************************************************//


// 10) Przy użyciu function contructor, stwórz klase o nazwie groupMember, i dodaj takie pola jak: imie, nazwisko, rola, wiek, numer telefonu.
//     I stwórz obiekty opisujące członków twojego zepsołu na kursie.

//-----------------------------------------------------------//

//***********************************************************//


// 11) Po swojemu spróbuj pokazać problem, kiedy i w jaki sposób wykonuje się kod z setTimeout.

//-----------------------------------------------------------//

//***********************************************************//


// 12) Napisz funkcje, która zwraca M lub K w zależności od przekazanego imienia (kobiece lub meskie)

//-----------------------------------------------------------//

//***********************************************************//

// 13) Napisz funkcje, która dodaje Twoje imie do localStorage i SesstionStorage. Po czym zamknij taba/przegladarke. Zobacz gdzie są zapisane dane a gdzie nie.

//-----------------------------------------------------------//

//***********************************************************//


// 14) Zapisz do localStorage wybrany obiekt z poprzedniego zadanie. Nastepnie odczytaj zapisany obiekt i wprowadz w nim jakas zmiane.
//     Wykorzystaj metody JSON.parse lub JSON.stringify

//-----------------------------------------------------------//

//***********************************************************//

