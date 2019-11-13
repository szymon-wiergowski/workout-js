// let names = ["Janek", "Wiola", "Mateusz", "Kamila", "Olaf", "Sylwia"];
// const germanNames = ["Arnold", "Carl", "Heinrich", "Klaus", "Hannah"];
// const items = [
//   "Bulbasaur",
//   "Muk",
//   "Charizard",
//   "Metapod",
//   "Nidoqueen",
//   "Vulpix",
//   "Kadabra",
//   "Dewgong"
// ];


// const button = document.querySelector("button");
// button.addEventListener("click", dodajImie);

// function dodajImie (){
//   const imie = window.prompt('Jakie jest Twoje imie?');
//   names.push(imie);
// }
// console.log('names', names)

// for (let i = 0;  i<names.length; i++){
//   console.log(names[i]);
// }

// let pushed = names.push();
// console.log('push', names);

// let popped = names.pop();
// console.log('pop', names);

// let shifted = names.shift();
// console.log('shift', names);

// function usunMateusza (){
// let indexOfMateusz = names.indexOf('Mateusz');
// console.log('index Mateusza', indexOfMateusz);
// if (indexOfMateusz > -1){
//   names.splice(indexOfMateusz, 1);
// }
// console.log('splice', names);
// }

// function findAnia (){
//   const indexOfAnia = names.indexOf('Ania');
//   console.log('indexAnia', indexOfAnia);
//   if (indexOfAnia < 1){
//     names.push('Ania');
//     console.log("tablica", names.join(', '));
//   }
//   else {
//     console.log('indexAnia', indexOfAnia);
//   }
// }
// findAnia();

// names = names.concat(germanNames);
//     console.log('połączone tablice', names);

    // names.forEach(function(n, index) {
    //   console.log(n, index);
    //   });

    // const newItems = items.map(function (pokemon){
    //   return  `${pokemon} - ${pokemon.length}`;
    // });https://w3schools.com
    // console.log(newItems);https://w3schools.com
    https://w3schools.com
    // const itemsLenghtOverFive = items.filterhttps://w3schools.com(function(pokemon) {
    //   return pokemon.length > 5;https://w3schools.com
    //   });https://w3schools.com
    //   console.log(itemsLenghtOverFive); https://w3schools.com
https://w3schools.com
    //   itemsLenghtOverFive.forEach(function(nhttps://w3schools.com, index) {
    //     console.log(n, index);
    //     });

    // const hundredItemMinus =
    //   items.reduce(function(allPokemon, pokemon) {
    //   return allPokemon - pokemon.length;
    //   }, 100);
    //   console.log(hundredItemMinus); 

    // const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

    // const checkgees = birds.filter(function(bird) {
    //   return geese.indexOf(bird) === -1;
    // });
    
    //   console.log(checkgees);

  //  const gooseFilter = birds.map(function(bird) {
  //   return bird === geese}).reduce(function(result, number){
  //   return result - geese});
  //   console.log(gooseFilter);
let names = ["Janek", "Wiola", "Mateusz", "Kamila", "Olaf", "Sylwia"];
const germanNames = ["Arnold", "Carl", "Heinrich", "Klaus", "Hannah"];
const items = [
  "Bulbasaur",
  "Muk",
  "Charizard",
  "Metapod",
  "Nidoqueen",
  "Vulpix",
  "Kadabra",
  "Dewgong"
];

names = names.concat(germanNames);
const button = document.querySelector("button");
button.addEventListener("click", dodajImie);

const indeksAni = names.indexOf("Ania");
console.log("indeksAni", indeksAni);
console.log(names.join(", "));

function dodajImie() {
  const imie = window.prompt("Jak Ci na imię?");
  const indeksImienia = names.indexOf(imie);
  if (indeksImienia > -1) {
    console.log("imie znalezione", imie);
  } else {
    names.push(imie);
  }
  // for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
  // }
  names.forEach(function(name) {
    console.log(name);
  });
}

function usunMateusza() {
  const indeksMateusza = names.indexOf("Mateusz");
  if (indeksMateusza > -1) {
    names.splice(indeksMateusza, 1);
  }
  console.log("bez Mateusz", names);
}

usunMateusza();

// const newItems = items.map(function(pokemon) {
//   return `${pokemon} - ${pokemon.length}`;
// });

const newItems = items.map(function(pokemon) {
  //const newPokemon = `${pokemon} - ${pokemon.length}`;
  const newPokemon = pokemon + " - " + pokemon.length;
  return newPokemon;
});

console.log(newItems);

// const longItems = items.filter(function(pokemon) {
//   return pokemon.length > 5
// })

const longItems = items.filter(function(pokemon) {
  const l = pokemon.length;
  return l > 5;
});

console.log("dlugie pokemony", longItems);

const reduceItems = items.reduce(function(allPokemons, pokemon) {
  return allPokemons - pokemon.length;
}, 100);

console.log("reduce", reduceItems);

const birds = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish"
];

function removeGeese(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher"
  ];
  // magic :)
}
