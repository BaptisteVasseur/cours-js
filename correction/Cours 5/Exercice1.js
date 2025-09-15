async function chargerPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const options = {method: 'GET'};
    const divIdContent = document.querySelector('#content')
    const loadingElement = document.querySelector('#loading');

    loadingElement.style.display = 'block';

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        loadingElement.style.display = 'none';

        const newData = data.slice(0, 5);
        newData.forEach(function(post) {
            monNouvelElement = document.createElement('div');
            monNouvelElement.classList.add('post');
            monNouvelElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            divIdContent.appendChild(monNouvelElement);
        })
    } catch (error) {
        console.error(error);
    }
}

async function chargerUtilisateurs() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const options = {method: 'GET'};
    const divIdContent = document.querySelector('#content')
    const loadingElement = document.querySelector('#loading');

    loadingElement.style.display = 'block';

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        loadingElement.style.display = 'none';

        data.forEach(function(toto) {
            monNouvelElement = document.createElement('div');
            monNouvelElement.classList.add('user');
            monNouvelElement.innerHTML = `
                <h2>${toto.name}</h2>
                <p>${toto.company.name}</p>
            `;

            divIdContent.appendChild(monNouvelElement);
        })
    } catch (error) {
        console.error(error);
    }
}

async function chargerPost() {
    const idChoisiParLUtilisateur = prompt('Veuillez choisir un id entre 0 et 100 ?');

    if (idChoisiParLUtilisateur === '') {
        alert('Veuillez choisir un chiffre entre 1 et 100');
        return;
    }

    const url = 'https://jsonplaceholder.typicode.com/posts/' + idChoisiParLUtilisateur;
    const options = {method: 'GET'};

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        const element = document.createElement('div');
        element.classList.add('post');
        element.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `
        const contentElement = document.querySelector('#content');
        contentElement.innerHTML = '';
        contentElement.appendChild(element);

    } catch (error) {
        console.error(error);
    }

}
