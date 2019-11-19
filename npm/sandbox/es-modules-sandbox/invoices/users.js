// Ex.: Rozbij ten plik na wiele modułów.
//    formatUser --> do modułu `user-formater.js`
//    generateUsersDOMElements --> do modułu `user-service.js`
//    createUserElement --> do modułu `user-service.js`
//             (czy musimy go eksportować?)
// Pamiętaj aby poprawić plik `index.js` !!

export const users = [
    {
        id: 1,
        name: 'Marian',
        surname: 'Kowalski'
    },
    {
        id: 2,
        name: 'Anna',
        surname: 'Nowak'
    },
    {
        id: 3,
        name: 'Maria',
        surname: 'Awaria'
    }
];