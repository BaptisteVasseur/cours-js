const API_BASE_URL = 'https://tyradex.app/api/v1/gen'

// On recupere les elements utiles dans la page.
const champGeneration = document.querySelector('#champ-generation')
const boutonRafraichir = document.querySelector('#btn-rafraichir')
const zoneStatut = document.querySelector('#zone-statut')
const zoneErreur = document.querySelector('#zone-erreur')
const listePokemon = document.querySelector('#liste-pokemon')

// Transforme un numero comme 1 en texte "#001".
function formaterNumero(id) {
  var numero = String(id)

  // Tant que le numero fait moins de 3 caracteres,
  // on ajoute un 0 au debut.
  while (numero.length < 3) {
    numero = '0' + numero
  }

  return '#' + numero
}

// Cree une carte HTML pour un Pokemon.
function creerCartePokemon(pokemon) {
  const carte = document.createElement('article')
  carte.classList.add('carte-pokemon')

  // On construit d'abord la liste des types.
  var types = ''
  var i = 0

  for (i = 0; i < pokemon.types.length; i++) {
    types = types + '<span class="badge-type">' + pokemon.types[i].name + '</span>'
  }

  // Puis on remplit la carte avec l'image, le nom, le numero et les types.
  carte.innerHTML = `
    <div class="visuel-pokemon">
      <img src="${pokemon.sprites.regular}" alt="${pokemon.name.fr}" />
    </div>
    <div class="meta-pokemon">
      <h2>${pokemon.name.fr}</h2>
      <p class="numero-pokemon">${formaterNumero(pokemon.pokedex_id)}</p>
    </div>
    <div class="types-pokemon">${types}</div>
  `

  return carte
}

// Affiche tous les Pokemon dans la page.
function afficherPokemon(pokemons) {
  var i = 0

  // On vide la liste avant de remettre les nouvelles cartes.
  listePokemon.textContent = ''

  for (i = 0; i < pokemons.length; i++) {
    var carte = creerCartePokemon(pokemons[i])
    listePokemon.append(carte)
  }
}

// Fonction principale :
// elle charge les Pokemon de la generation choisie.
async function chargerPokemon() {
  const generation = champGeneration.value

  // Mise a jour de l'interface avant l'appel API.
  zoneStatut.textContent = `Chargement de la generation ${generation}...`
  zoneErreur.textContent = ''
  zoneErreur.hidden = true
  listePokemon.textContent = ''

  try {
    // Requete vers l'API Tyradex.
    const response = await fetch(`${API_BASE_URL}/${generation}`)

    // Si la reponse HTTP n'est pas correcte, on declenche une erreur.
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`)
    }

    // On transforme la reponse JSON en tableau JavaScript.
    const data = await response.json()

    // On affiche les cartes puis un message de succes.
    afficherPokemon(data)
    zoneStatut.textContent = `${data.length} Pokemon affiches pour la generation ${generation}.`
  } catch (error) {
    // Si quelque chose casse, on montre le message d'erreur.
    zoneErreur.textContent =
      error instanceof Error ? error.message : 'Impossible de charger les Pokemon.'
    zoneErreur.hidden = false
    zoneStatut.textContent = 'Erreur de chargement.'
  }
}

// Clic sur le bouton : on recharge la generation choisie.
boutonRafraichir.addEventListener('click', chargerPokemon)

// Changement dans la liste : on recharge aussi.
champGeneration.addEventListener('change', chargerPokemon)

// Chargement automatique au demarrage de la page.
chargerPokemon()
