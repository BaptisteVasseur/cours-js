
async function recupererLesPokemons() {
    const url = 'https://tyradex.app/api/v1/pokemon';
    const options = {method: 'GET'};

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        data.forEach(function(pokemon) {
            const maDivPokemon = document.createElement('div');
            maDivPokemon.classList.add('pokemons');
            maDivPokemon.innerHTML = `
                <h2>${pokemon.name.fr}</h2>
                <img src="${pokemon.sprites.regular}">
            `;
            document.body.appendChild(maDivPokemon);
        });
    } catch (error) {
        console.error(error);
    }
}

recupererLesPokemons();

