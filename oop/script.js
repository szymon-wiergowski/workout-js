// QUIZ na rozgrzewkę!!

var person = {
    name: "John",
    surname: "Doe",
    getFullName: function () {
        return this.name + ' ' + this.surname;
    }
};
var doctor = Object.create(person);
var journalist = Object.create(person);
var surgeon = Object.create(doctor);
var remodelingSurgeon = Object.create(surgeon);
remodelingSurgeon.getFullName = function () {
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

class Fruit extends Product {
    constructor(price, amount) {
        super(price, amount);
        this.type = "fruit";
    };
};

class Dairy extends Product {
    constructor(price, amount) {
        super(price, amount);
        this.type = "dairy";
    };
};

class Fish extends Product {
    constructor(price, amount) {
        super(price, amount);
        this.type = "fish";
    };
};

var watermelon = new Fruit(12.90, 1500);
var apple = new Fruit(1.90, 200);
var cheese = new Dairy(2.39, 100);
var milk = new Dairy(3.19, 1000);
var balticCod = new Fish(2.28, 100);
var salmon = new Fish(3.28, 100);

// AD 2 - zaimplementuje function constructor dla shoppingCart

class ShoppingCart {
    constructor() {
        this.productList = [];
    }
};

var shoppingCart = new ShoppingCart();

// AD 3

ShoppingCart.prototype.addProduct = function (product, quantity) {
    for (let i = 0; i < quantity; i++) {
        this.productList.push(product);
    };
};

shoppingCart.addProduct(watermelon, 2);
shoppingCart.addProduct(apple, 10);
shoppingCart.addProduct(cheese, 2);
shoppingCart.addProduct(milk, 1);
shoppingCart.addProduct(balticCod, 7);
shoppingCart.addProduct(salmon, 8);

// AD 4

ShoppingCart.prototype.isEnoughMoney = function (money) {
    return money > this.getTotalPrice();
};

ShoppingCart.prototype.getTotalPrice = function () {
    const totalPrice = this.productList.map(product => product.price).reduce((a, b) => a + b);
    return totalPrice;
};

ShoppingCart.prototype.getTotalWeight = function () {
    const totalWeight = this.productList.map(product => product.amount).reduce((a, b) => a + b);
    return totalWeight;
};

console.log('Is 60PLN enough?', shoppingCart.isEnoughMoney(60)); // false
console.log('Is 80PLN enough?', shoppingCart.isEnoughMoney(80)); // false
console.log('Is 100PLN enough?', shoppingCart.isEnoughMoney(100)); // true
console.log('Total price of added products:', shoppingCart.getTotalPrice()); // 94.97
console.log('Total weight of added products:', shoppingCart.getTotalWeight()); // 7700

// AD 5

ShoppingCart.prototype.containFish = () => {
    if (Fish) {
        return true
    } else {
        return false
    };
};

console.log('Do I have a fish?', shoppingCart.containFish()); // true

// AD 6

ShoppingCart.prototype.getNumberOfNeededPlasticBags = () =>
    Math.ceil(this.sumAllWeight / PLASTIC_BAG_CAPACITY);

console.log('How many plastic bags I need:', shoppingCart.getNumberOfNeededPlasticBags()); // 3
