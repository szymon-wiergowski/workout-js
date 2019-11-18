const rodzajeMiesa = ["wołowina", "jagnięcina", "drób", "wieprzowina", "ryby"];

const wildPlant = {
  domain: "Eukaryota",
  kingdom: "Plantae",
  family: "Araceae",
  habitat: "Europe, Asia",
  leaves: 5,

  grow: function () {
    return this.leaves++;
  }
};

const homeDecoration = {
  style: ["nordic", "natural", "wild"]
};

let plant = {}
Object.assign(plant, wildPlant, homeDecoration);
console.log('połączone obiekty to : ', plant)

function znajdzDanieWegetarianskie() {
  const elements = document.querySelectorAll("li");

  elements.forEach(function (element) {
    rodzajeMiesa.forEach(function (mieso) {
      const ind = element.innerText.toLowerCase().indexOf(mieso);
      if (ind > -1) {
        element.classList.add("miesna");
      }
    });
  });
}

znajdzDanieWegetarianskie();

function sprawdzCzyZdanieToPangram(zdanie) {
  const literki = [
    "a",
    "ą",
    "b",
    "c",
    "ć",
    "d",
    "e",
    "ę",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "ł",
    "m",
    "n",
    "ń",
    "o",
    "ó",
    "p",
    "r",
    "s",
    "ś",
    "t",
    "u",
    "w",
    "y",
    "z",
    "ź",
    "ż"
  ];

  const bezSpacji = zdanie
    .split(" ")
    .join("")
    .toLowerCase();

  if (bezSpacji.length == 32) {
    const literki2 = literki.filter(function (litera) {
      return bezSpacji.indexOf(litera) == -1;
    });

    if (!literki2.length) {
      console.log(`${zdanie.toUpperCase()} jest pangramem`);
    }
  }
}

// sprawdzCzyZdanieToPangram("Ala ma kota");
// sprawdzCzyZdanieToPangram("Puść mą dłoń Gnij schab frytkę Zwóź żel");
// sprawdzCzyZdanieToPangram("Auść mą dłoń Gnij schab frytkę Zwóź żel");

function losujLotto() {
  const szczesliwaSzostka = [];
  for (let i = 0; szczesliwaSzostka.length < 6; i++) {
    const losowaLiczba = Math.round(Math.random() * 48 + 1);
    if (szczesliwaSzostka.indexOf(losowaLiczba) == -1) {
      szczesliwaSzostka.push(losowaLiczba);
    }
  }

  console.log(szczesliwaSzostka);
}

//losujLotto();

const pizzas = [
  { r: "15", price: "35 PLN" },
  { r: "20", price: "42 PLN" },
  { r: "30", price: "55 PLN" }
];

function wybierzNajtansza() {
  let najtanszaPizza = {};
  let najmniejszyWspolczynnik;
  pizzas.forEach(function (pizza) {
    const powierzchniaPizzy = Math.PI * Math.sqrt(pizza.r);
    const wspolczynnikOplacalnosci =
      parseFloat(pizza.price) / powierzchniaPizzy;
    if (
      !najmniejszyWspolczynnik ||
      wspolczynnikOplacalnosci < najmniejszyWspolczynnik
    ) {
      najmniejszyWspolczynnik = wspolczynnikOplacalnosci;
      najtanszaPizza = pizza;
    }
  });
  console.log("najtansza " + najtanszaPizza);
}

//wybierzNajtansza();

const person = {
  name: "Ania",

  hello: function () {
    console.log(`Cześć ${this.name}`);
  },

  fullName: function () {
    console.log("ajashkhk");
  }
};

//person.hello();

function showCatProperties(obj) {
  let message = "";

  for (let catProperty in obj) {
    message = `${message}The ${catProperty} of this object is ${obj[catProperty]}. `;
  }

  console.log(message);
}
let cat = { name: "Peru", age: "3Y" };
cat.name = "Lizbona";
cat["name"] = "Lizbona2";
// cat['name'] === cat.name
const ageProperties = "age";
cat[ageProperties];
//showCatProperties(cat);

const obj = {
  user1: ["Jan", "Kowalski"],
  user2: ["Monika", "Nowak"],
  user3: ["Krzysztof", "Dąbek"],
  user4: ["Marianna", "Fiołek"],
  user5: ["Zuzanna", "Tata"]
};

let arrayFromObj = Object.values(obj);
const personArray = [];

arrayFromObj.forEach(function (person) {
  const personObj = {
    firstName: person[0],
    lastName: person[1]
  };

  personArray.push(personObj);
});

//console.log(personArray);

obj1 = { name: "xxx", family: "yyy" };
obj2 = { key: "zzz", newKey: "aaa" };

// for (let klucz in obj2) {
//   obj1[obj2[klucz]] = null;
// }

let wartosci = Object.values(obj2);
wartosci.forEach(function (wartosc) {
  obj1[wartosc] = null;
});

console.log(obj1);

const myObject = {
  a: 'somestring',
  b: 42,
  c: false
};

function checkAge(person) {
  if (person.hasOwnProperty('age') === false) {
    person.age = Math.round(Math.random() * 80);
  }
}
console.log('Po warunku', person);

checkAge({ lastnumber: 18, name: 'Ania' });

const weekTemperature = [7, 8, 4, 3, 2, 2.5, 0, -1, -1.5, -2, -2.5, 0, 2, 3.5, 5.5, 9, 10.5, 4, 11, 11.5, 10, 9.5, 8, 9, 7.5, 9, 11, 11.5, 12, 9, 7, 6.5, 4, 3, 5, 3.5, 3, 2, 2.5, 3, 2, 1, 2, 1.5, 0, -2]

const maxTemp = Math.max(...weekTemperature);
function avg(tempArray) {
  const avgTemp =
    tempArray.reduce(function (suma, temp) {
      return (suma = suma + temp);
    }) / tempArray.length;
  console.log("Średnia temperatura to: ", avgTemp);
}
avg(weekTemperature);
console.log("Najwyższa temperatura to: ", maxTemp);

const words = "String will never be empty and you do not need to account for different data types";

function findShortest(longString) {
  let shortest;
  const arrayFromLongString = longString.split(" ");
  for (word of arrayFromLongString) {
    if (!shortest || shortest > word.length) {
      shortest = word.length;
    }
  }
  console.log("shortest", shortest);
}
findShortest(words);

function multiplicativeNum(num) {
  const stringFromNum = [...`${num}`];
  if (stringFromNum.length > 1) {
    let separateString = stringFromNum.split('');
    suma = separateString.reduce(function (suma, temp) {
      return (suma = temp * temp);
    })
    console.log('string z 2 liczby to :', separateString);
    console.log('typ zmiennej :', typeof separateString);
    console.log('suma :', suma);



  }
  console.log('string z liczby to :', stringFromNum);
  console.log('typ zmiennej :', typeof stringFromNum);



}
multiplicativeNum(345);