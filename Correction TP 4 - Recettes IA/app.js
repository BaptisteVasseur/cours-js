const API_URL = 'https://api.openai.com/v1/chat/completions'
const OPENAI_MODEL = 'gpt-4o-mini'
const CLE_API_OPENAI = ''
const STORAGE_KEY = 'tp-recettes-v1'

// On recupere les elements utiles dans la page.
const champIngredient = document.querySelector('#champ-ingredient')
const boutonAjouter = document.querySelector('#btn-ajouter')
const boutonGenerer = document.querySelector('#btn-generer')
const boutonViderHistorique = document.querySelector('#btn-vider-historique')
const listeIngredients = document.querySelector('#liste-ingredients')
const listeHistorique = document.querySelector('#liste-historique')
const zoneStatut = document.querySelector('#zone-statut')
const zoneErreur = document.querySelector('#zone-erreur')
const zoneRecette = document.querySelector('#zone-recette')

// Etat de l'application en memoire.
var ingredients = []
var historique = chargerHistorique()
var generationEnCours = false

// Nettoie la saisie d'un ingredient.
function normaliserIngredient(valeur) {
  return valeur.trim()
}

// Verifie si un ingredient existe deja dans la liste.
function ingredientExiste(ingredient) {
  var reference = ingredient.toLowerCase()
  var i = 0

  for (i = 0; i < ingredients.length; i++) {
    if (ingredients[i].toLowerCase() === reference) {
      return true
    }
  }

  return false
}

// Active ou desactive les boutons selon l'etat courant.
function mettreAJourEtatBoutons() {
  boutonGenerer.disabled = ingredients.length === 0 || generationEnCours
  boutonViderHistorique.disabled = historique.length === 0
}

// Affiche la liste des ingredients dans le DOM.
function afficherIngredients() {
  var i = 0
  listeIngredients.textContent = ''

  if (ingredients.length === 0) {
    var vide = document.createElement('li')
    vide.className = 'etat-vide'
    vide.textContent = 'Aucun ingredient ajoute.'
    listeIngredients.append(vide)
    return
  }

  for (i = 0; i < ingredients.length; i++) {
    var item = document.createElement('li')
    item.className = 'ligne-ingredient'

    var nom = document.createElement('span')
    nom.className = 'ingredient-nom'
    nom.textContent = ingredients[i]

    var boutonRetirer = document.createElement('button')
    boutonRetirer.type = 'button'
    boutonRetirer.className = 'btn-retirer'
    boutonRetirer.textContent = 'Retirer'
    boutonRetirer.dataset.index = String(i)

    item.append(nom, boutonRetirer)
    listeIngredients.append(item)
  }
}

// Construit le texte envoye a l'IA.
function construirePrompt(ingredientsUtilises) {
  var prompt = 'Tu es un assistant de cuisine.\n'
  prompt = prompt + 'Propose une recette simple en francais.\n'
  prompt = prompt + 'Ingredients disponibles : '
  var i = 0

  for (i = 0; i < ingredientsUtilises.length; i++) {
    if (i > 0) {
      prompt = prompt + ', '
    }
    prompt = prompt + ingredientsUtilises[i]
  }

  prompt = prompt + '.'
  return prompt
}

// Copie un tableau pour ne pas modifier l'original.
function copierTableau(tableau) {
  var copie = []
  var i = 0

  for (i = 0; i < tableau.length; i++) {
    copie.push(tableau[i])
  }

  return copie
}

// Appelle l'API OpenAI avec un POST.
async function appelerServiceRecette(ingredientsUtilises) {
  var response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + CLE_API_OPENAI,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: construirePrompt(ingredientsUtilises),
        },
      ],
    }),
  })

  var data = await response.json()

  if (!response.ok) {
    var message = 'Erreur HTTP ' + response.status
    if (data.error && data.error.message) {
      message = data.error.message
    }
    throw new Error(message)
  }

  return data
}

// Lit la recette dans la reponse JSON de l'API.
function extraireRecette(data) {
  if (
    data.choices &&
    data.choices[0] &&
    data.choices[0].message &&
    data.choices[0].message.content
  ) {
    return data.choices[0].message.content.trim()
  }

  throw new Error('Aucune recette exploitable dans la reponse JSON.')
}

// Affiche la recette generee dans la page.
function afficherRecette(texte, ingredientsUtilises) {
  var i = 0
  var listeIngredientsTexte = ''

  zoneRecette.className = 'zone-recette'
  zoneRecette.textContent = ''

  for (i = 0; i < ingredientsUtilises.length; i++) {
    if (i > 0) {
      listeIngredientsTexte = listeIngredientsTexte + ', '
    }
    listeIngredientsTexte = listeIngredientsTexte + ingredientsUtilises[i]
  }

  var titre = document.createElement('h3')
  titre.textContent = 'Suggestion du moment'

  var meta = document.createElement('p')
  meta.className = 'meta-historique'
  meta.textContent = 'Ingredients : ' + listeIngredientsTexte

  var contenu = document.createElement('pre')
  contenu.className = 'contenu-recette'
  contenu.textContent = texte

  zoneRecette.append(titre, meta, contenu)
}

// Affiche un message quand aucune recette n'est disponible.
function afficherRecetteVide(message) {
  zoneRecette.className = 'zone-recette recette-vide'
  zoneRecette.textContent = message
}

// Formate une date pour l'historique.
function formaterDate(dateIso) {
  return new Date(dateIso).toLocaleString('fr-FR')
}

// Affiche les recettes sauvegardees dans l'historique.
function afficherHistorique() {
  var i = 0
  var j = 0
  listeHistorique.textContent = ''

  if (historique.length === 0) {
    var vide = document.createElement('li')
    vide.className = 'etat-vide'
    vide.textContent = 'Aucune recette sauvegardee.'
    listeHistorique.append(vide)
    mettreAJourEtatBoutons()
    return
  }

  for (i = 0; i < historique.length; i++) {
    var entree = historique[i]
    var item = document.createElement('li')
    item.className = 'carte-historique'

    var titre = document.createElement('h3')
    titre.textContent = 'Recette enregistree'

    var meta = document.createElement('p')
    meta.className = 'meta-historique'
    meta.textContent =
      formaterDate(entree.createdAt) + ' - ' + entree.ingredients.length + ' ingredient(s)'

    var tags = document.createElement('div')
    tags.className = 'tags-ingredients'

    for (j = 0; j < entree.ingredients.length; j++) {
      var tag = document.createElement('span')
      tag.className = 'tag'
      tag.textContent = entree.ingredients[j]
      tags.append(tag)
    }

    var resume = document.createElement('p')
    resume.className = 'resume-recette'
    resume.textContent = entree.recipe

    item.append(titre, meta, tags, resume)
    listeHistorique.append(item)
  }

  mettreAJourEtatBoutons()
}

// Lit l'historique depuis localStorage.
function chargerHistorique() {
  try {
    var brut = localStorage.getItem(STORAGE_KEY)
    if (!brut) {
      return []
    }

    var data = JSON.parse(brut)
    if (Array.isArray(data)) {
      return data
    }

    return []
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY)
    return []
  }
}

// Sauvegarde l'historique dans localStorage.
function sauvegarderHistorique() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(historique))
}

// Ajoute une recette en haut de l'historique.
function ajouterHistorique(texteRecette, ingredientsUtilises) {
  var nouvelleEntree = {
    id: 'recette-' + Date.now(),
    createdAt: new Date().toISOString(),
    ingredients: copierTableau(ingredientsUtilises),
    recipe: texteRecette,
  }

  historique.unshift(nouvelleEntree)

  if (historique.length > 8) {
    historique = historique.slice(0, 8)
  }

  sauvegarderHistorique()
  afficherHistorique()
}

// Ajoute un ingredient saisi par l'utilisateur.
function ajouterIngredient() {
  var ingredient = normaliserIngredient(champIngredient.value)
  zoneErreur.textContent = ''
  zoneErreur.hidden = true

  if (ingredient === '') {
    zoneErreur.textContent = 'Saisis un ingredient avant de cliquer sur Ajouter.'
    zoneErreur.hidden = false
    return
  }

  if (ingredientExiste(ingredient)) {
    zoneErreur.textContent = 'Cet ingredient est deja dans la liste.'
    zoneErreur.hidden = false
    return
  }

  ingredients.push(ingredient)
  champIngredient.value = ''
  afficherIngredients()
  mettreAJourEtatBoutons()
  zoneStatut.textContent = ingredients.length + ' ingredient(s) pret(s) pour la recette.'
  champIngredient.focus()
}

// Retire un ingredient de la liste.
function retirerIngredient(index) {
  ingredients.splice(index, 1)
  afficherIngredients()
  mettreAJourEtatBoutons()

  if (ingredients.length === 0) {
    zoneStatut.textContent = 'Ajoute au moins un ingredient pour commencer.'
  } else {
    zoneStatut.textContent = ingredients.length + ' ingredient(s) restant(s).'
  }
}

// Fonction principale : demande une recette a l'IA.
async function demanderRecette() {
  if (ingredients.length === 0 || generationEnCours) {
    return
  }

  var ingredientsUtilises = copierTableau(ingredients)

  generationEnCours = true
  mettreAJourEtatBoutons()
  zoneErreur.textContent = ''
  zoneErreur.hidden = true
  zoneStatut.textContent = 'Generation de la recette en cours...'

  try {
    var data = await appelerServiceRecette(ingredientsUtilises)
    var recette = extraireRecette(data)

    afficherRecette(recette, ingredientsUtilises)
    ajouterHistorique(recette, ingredientsUtilises)
    zoneStatut.textContent = 'Recette generee avec succes.'
  } catch (error) {
    if (error instanceof Error) {
      zoneErreur.textContent = error.message
    } else {
      zoneErreur.textContent = 'Erreur reseau inconnue.'
    }
    zoneErreur.hidden = false
    zoneStatut.textContent = 'La generation a echoue.'
  } finally {
    generationEnCours = false
    mettreAJourEtatBoutons()
  }
}

// Vide l'historique sauvegarde.
function viderHistorique() {
  historique = []
  localStorage.removeItem(STORAGE_KEY)
  afficherHistorique()
}

// Ajoute un ingredient quand on appuie sur Entree.
function gererToucheIngredient(event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    ajouterIngredient()
  }
}

// Retire un ingredient quand on clique sur "Retirer".
function gererClicListeIngredients(event) {
  var bouton = event.target.closest('button[data-index]')
  if (!bouton) {
    return
  }

  retirerIngredient(Number(bouton.dataset.index))
}

boutonAjouter.addEventListener('click', ajouterIngredient)
boutonGenerer.addEventListener('click', demanderRecette)
boutonViderHistorique.addEventListener('click', viderHistorique)
champIngredient.addEventListener('keydown', gererToucheIngredient)
listeIngredients.addEventListener('click', gererClicListeIngredients)

afficherIngredients()
afficherHistorique()
afficherRecetteVide('Aucune recette pour le moment.')
mettreAJourEtatBoutons()
