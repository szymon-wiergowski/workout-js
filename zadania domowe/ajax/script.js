const list = document.getElementById('list');
const message = document.getElementById('message');
const button = document.getElementById('button');
const userNameInput = document.getElementById('user-name-input');

// 1. Pobierz dane z endpointu: https://jsonplaceholder.typicode.com/posts na kliknięcie przycisku #button.

{
    const asyncFetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const post = await response.json();
            message.innerText = `${post.length} posts downloaded`;
    
            post.forEach(posts => {
                const liTitle = document.createElement('li');
                liTitle.innerText = `* Title: ${posts.title}`;
                list.appendChild(liTitle);
                const liDescription = document.createElement('li');
                liDescription.innerText = `Description: ${posts.body}`;
                list.appendChild(liDescription);
            });
            return post;
        } catch (err) {
            message.innerText = `Some error occurred.`;
        }
    };
    
    const getPosts = () => {
        button.innerText = "Loading ...";
        button.disabled = true;
        asyncFetchPosts()
            .finally(() => {
                button.innerText = "Pobierz posty";
                button.disabled = false;
            });
    };
    
    button.addEventListener('click', getPosts);
    }

// 2. Wyświetl dane w postaci listy w HTMLu wg. schematu:
// * title
//
//   description
//
// * title
//
//   description

// 3. Jeżeli pobieranie danych się powiedzie wyświetl informację w #message ile postów zostało pobrane.

// 4. Jeżeli pobieranie danych się nie powiedzie wyświetl informację w #message, że nastąpił błąd podczas pobierania.

// 5. Podczas pobierania danych zablokuj button i zmień jego tekst na "Loading...",
// a po udanym pobranu lub błędzie odblokuj go i zmień tekst ponowanie na "Pobierz albumy".

// 6 (*). Jeżeli zostanie wpisana nazwa użytkownika do #user-name-input
// to pobieranie danyh powinno pobierać tylko posty tego użytkownika / jeżeli input będzie pusty ma pobierać wszytskich,
// jeżeli taki użytkownik nie istnieje to powinnien się pokazać stosowny komunikat w #message
// Wykorzystaj endpoint do pobrania postów użytkownika i listy tych użytkowników:
// https://jsonplaceholder.typicode.com/posts?userId={id}
// https://jsonplaceholder.typicode.com/users
//

{
    const fetchPosts = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json());
    };
    
    const fetchUsers = () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json());
    };
    
    const asyncFetchPosts = async () => {
        try {
            const data = await Promise.all([fetchPosts(), fetchUsers()]);
            const postsUser = data[0];
            const users = data[1];
            const userName = userNameInput.value.toLowerCase();
    
            const searchedUser = users.find(user => {
                return user.name.toLowerCase().includes(userName)
            });
    
            const filteredPosts = postsUser.filter(posts => {
                return searchedUser.id === posts.userId
            });
    
            const writeList = (posts) => {
                const liTitle = document.createElement('li');
                liTitle.innerText = `* Title: ${posts.title}`;
                list.appendChild(liTitle);
                const liDescription = document.createElement('li');
                liDescription.innerText = `Description: ${posts.body}`;
                list.appendChild(liDescription);
            }
          
            if (userName === "") {
                postsUser.map((posts) =>
                    writeList(posts)
                );
                return postsUser;
            } else if (userName === searchedUser.name.toLowerCase() || userName !== searchedUser.name.toLowerCase()) {
                filteredPosts.map((posts) =>
                    writeList(posts)
                );
                return filteredPosts;
            }
        } catch (err) {
            message.innerText = `Some error occurred.`;
        }
    };
    
    const getPosts = () => {
        button.innerText = "Loading ...";
        button.disabled = true;
        asyncFetchPosts()
            .finally(() => {
                button.innerText = "Pobierz posty";
                button.disabled = false;
            });
    };
    
    button.addEventListener('click', getPosts);
    }
    

