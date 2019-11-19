import { clients } from './clients';
import { foo } from './foo';
import { range } from 'lodash';

const someArray = range(1, 10);
console.log(someArray.join(' 👍 '));

const resultElement = document.getElementById('result');

clients.map(client => {
    const li = document.createElement('li');
    li.textContent = client.name;

    resultElement.appendChild(li);
});

foo();