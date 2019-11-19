<<<<<<< HEAD
import { generateUsersDOMElements,  } from './invoices/users-service';
import { users } from './invoices/users';

=======
import { users } from './invoices/users';
import { generateUsersDOMElements } from './invoices/users-service';
>>>>>>> 0b965f12e3fed8cb33b7eee3a71244089a7055a6

const resultElement = document.getElementById('result');

generateUsersDOMElements(users).map(userElement => {
    resultElement.appendChild(userElement);
});