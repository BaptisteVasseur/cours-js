async function recupererDonnee() {
    const url = 'https://tyradex.app/api/v1/pokemon';
    const options = {method: 'GET'};

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        data.forEach(function(monPokemon) {
            const monElementQuiVaAllerDansLeDOM = document.createElement('div');
            monElementQuiVaAllerDansLeDOM.classList.add('pokemon')
            monElementQuiVaAllerDansLeDOM.innerHTML = `
                ${monPokemon.name.fr}
                <img src="${monPokemon.sprites.regular}" />
            `;

            document.body.appendChild(monElementQuiVaAllerDansLeDOM);
        })


    } catch (error) {
        console.error(error);
    }
}

recupererDonnee();
