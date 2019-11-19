<<<<<<< HEAD
import { formatUser } from './user-formater'
=======
import { formatUser } from './user-formater';

>>>>>>> 0b965f12e3fed8cb33b7eee3a71244089a7055a6
const createUserElement = (user) => {
    const element = document.createElement('li');
    element.textContent = formatUser(user);

    return element;
}

export const generateUsersDOMElements = (users) => {
    return users.map(user => createUserElement(user));
}