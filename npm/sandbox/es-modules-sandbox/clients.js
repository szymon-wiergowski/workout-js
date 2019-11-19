import { generateName, generateNameRaw, generateMultipleNames } from './clients-generator';

const createArrayOfSize = n => Array(n).fill().map((_, index) => index + 1);

export const clients = [
    {
        name: 'Andrzej',
        surname: 'Kowalski'
    },
    {
        name: 'Gosia',
        surname: 'Nowak'
    }
];

export function generateClients() {
    return createArrayOfSize(10)
        .map(number => {
            // return some generated data
            // generate name, and surename
            // return {
            //     name: `${generateName()} ${number}`,
            //     surname: `${generateName()} ${number}`
            // };

            // const [name, surname] = generateNameRaw();

            // return {
            //     name, 
            //     surname
            // }

            const [name, surname] = generateMultipleNames(2).split(' ');
            return {
                name: name.toUpperCase(), 
                surname: surname
            }
        });
}