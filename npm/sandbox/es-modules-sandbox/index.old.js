import { clients, generateClients } from './clients';
import { generateName } from './clients-generator';

const resultElement = document.getElementById('result');

generateClients().map(client => {
    const li = document.createElement('li');
    li.textContent = `${client.name} ${client.surname}`;

    resultElement.appendChild(li);
});
