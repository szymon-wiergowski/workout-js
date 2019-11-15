// QUIZ na rozgrzewkę!!

var person = {
    name: "John",
    surname: "Doe",
    getFullName: function() {
        return this.name + ' ' + this.surname;
    }
};
var doctor = Object.create(person);
var journalist = Object.create(person);
var surgeon = Object.create(doctor);
var remodelingSurgeon = Object.create(surgeon);
remodelingSurgeon.getFullName = function() {
    return "Unknown"
};
var petSurgeon = Object.create(surgeon);
surgeon.name = "Dana";
remodelingSurgeon.name = "Scully";
Object.getPrototypeOf(doctor).surname = "Fox";
Object.getPrototypeOf(journalist).surname = "Parker";
Object.getPrototypeOf(Object.getPrototypeOf(petSurgeon)).surname = "Hide";
// Try to guess results
console.log('person', person.getFullName(), "John Doe");
console.log('doctor', doctor.getFullName(), "John Fox");
console.log('journalist', journalist.getFullName(), "John Parker");
console.log('surgeon', surgeon.getFullName(), "Dana Doe");
console.log('remodelingSurgeon', remodelingSurgeon.getFullName(), "Unknown");
console.log('petSurgeon', petSurgeon.getFullName(), "Dana Hide");

// let's code!

var PLASTIC_BAG_CAPACITY = 3500;

// AD 1 - zaimplementuje function constructor dla produktów 'new NAZWA(price, amount)'

class Product {
    constructor(price, amount) {
        this.price = price;
        this.amount = amount;
    }
    displayFullInfo() {
        return (`Cena: ${this.price}, ilość: ${this.amount}`);
    }
}

class Fruit extends Product {
    constructor(price, amount) {
        super(price, amount);
    }
    displayFullInfo() {
        return (`Cena: ${this.price}, ilość: ${this.amount}`);
    }
}

class Fish extends Product {
    constructor(price, amount) {
        super(price, amount);
    }
    displayFullInfo() {
        return (`Cena: ${this.price}, ilość: ${this.amount}`);
    }
}

class Dairy extends Product {
    constructor(price, amount) {
        super(price, amount);
    }
    displayFullInfo() {
        return (`Cena: ${this.price}, ilość: ${this.amount}`);
    }
}

var watermelon = new Fruit(12.90, 1500);
var apple = new Fruit(1.90, 200);
var cheese = new Dairy(2.39, 100);
var milk = new Dairy(3.19, 1000);
var balticCod = new Fish(2.28, 100);
var salmon = new Fish(3.28, 100);

// AD 2 - zaimplementuje function constructor dla shoppingCart

let cart = [];
let allToPay = [];
let sumAllToPay = 0;
let allWeight = [];
let sumAllWeight = 0;

class ShoppingCart {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

var shoppingCart = new ShoppingCart();

// AD 3
shoppingCart.addProduct(watermelon, 2);
shoppingCart.addProduct(apple, 10);
shoppingCart.addProduct(cheese, 2);
shoppingCart.addProduct(milk, 1);
shoppingCart.addProduct(balticCod, 7);
shoppingCart.addProduct(salmon, 8);

// AD 4
console.log('Is 60PLN enough?', shoppingCart.isEnoughMoney(60)); // false
console.log('Is 80PLN enough?', shoppingCart.isEnoughMoney(80)); // false
console.log('Is 100PLN enough?', shoppingCart.isEnoughMoney(100)); // true
console.log('Total price of added products:', shoppingCart.getTotalPrice()); // 94.97
console.log('Total weight of added products:', shoppingCart.getTotalWeight()); // 7700

// AD 5
console.log('Do I have a fish?', shoppingCart.containFish()); // true

// AD 6
console.log('How many plastic bags I need:', shoppingCart.getNumberOfNeededPlasticBags()); // 3

