// function task() {
//     const ochota = window.confirm("czy ma ochotę odpowiedzieć na więcej pytań?");
//     if (ochota) {
//         const imie = window.prompt('Jak masz na imie?');
//         // window.alert('Cześć ' + imie);
//         imie && window.alert(`Cześć ${imie}`);
//     };
// }
// task();

// const loc = window.location
// console.log('loc', loc)

// function zapytajAdres() {
// const adres = window.prompt('Jaki jest twój adres url?');
//     if (adres){
//         window.open(adres);
//     }
// }
//     zapytajAdres();

// function zaznaczElemnety() {
//     const el = document.querySelectorAll('.pink');
//     const els = el.length;
//     console.log(el[0]);
//     console.log(el[1]);
//     console.log(el[els - 1]);
//     }
// zaznaczElemnety()

// const el = document.getElementsByTagName('body')[0];
//     console.log(el.firstElementChild);

// function znajdzKrewnych(){
// const el = document.getElementById('important');
// console.log('poprzedni krewny', el.previousElementSibling);
// console.log('następny krewny', el.nextElementSibling);
// console.log('rodzic', el.parentElement);
// }
// znajdzKrewnych();

// const el = document.getElementById('important');
// el.remove();

// const body = document.getElementsByTagName('body') [0];

// const newElement = document.createElement('img');

// body.insertBefore(newElement, body.firstChild);

// body.insertBefore(newElement, body.lastChild);

// function dodajDzieci(){
// const important = document.getElementById('important');
// const newElement = document.createElement('p');
// const newElement1 = document.createElement('p');

// important.insertBefore(newElement, important.firstChild);
// important.appendChild(newElement1, important.lastChild);
// }
// dodajDzieci();

function addText (tekst){
    let naglowek = document.createElement('h1');
    const body = document.getElementsByTagName('body') [0];
    
    naglowek.innerText = tekst;
    body.insertBefore(naglowek, body.firstElementChild);
}
    addText('BVVCZBVCXB');

// function podmienKlasy() {
//     const element = document.getElementById("important");
//     console.log("classList", element.classList);
//     console.log("className", element.className);
//     element.className = "blue";
//     // element.classList.add("blue");
//    }
// podmienKlasy()

// function favoritColor() {
//     const color = window.prompt("Jaki jest Twój ulubiony kolor?", 'blue');
//         const body = document.getElementsByTagName('body')[0];
//         body.style.border = `3px solid ${color}`;
//     };

// favoritColor();

function input (){
    const imie = window.prompt("Jaki jest Twoje imie?");
    
    const email = window.prompt("Jaki jest Twoj e-mail?");
    

    if (imie) {
        document.querySelector('input[name="email"]').value = email;
        document.querySelector('input[name="imie"]').value = imie;
    }
}
input ()

// function zmienKolory() {
//     const rozowyElement = document.getElementsByClassName("pink")[0];
//     rozowyElement.addEventListener("click", ustawZielony);
//    }
//    function ustawZielony() {
//     console.log("jestem");
//     const rozowyElement = document.getElementsByClassName("pink")[0];
//     if (rozowyElement) {
//       rozowyElement.className = "green";
//     }
//    }

//    zmienKolory ()

const pinkElement = document.querySelectorAll('.pink')[0];
console.log('pink element0', pinkElement);

const pinkElement1 = document.querySelectorAll('.pink')[-1];
console.log('pink element1', pinkElement1);
