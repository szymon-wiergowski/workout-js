// ## Obiekty
// Przypisz wartości do zmiennych `name` i `email` przy pomocy `destructuring`.

// tu zmień
const user = { 
  name: 'Bob', 
  email: 'bob@gmail.com',
  age : 43
};
const {
  name: Username,
  email: UserEmail
} = user

// lub tu zmień ;)


console.log(`My name is ${name}, my email is ${email}`);