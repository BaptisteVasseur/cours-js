// On recupere les elements principaux dans la page.
// Ils seront reutilises a plusieurs endroits dans le script.
const inputTitre = document.querySelector('#champ-titre')
const selectCategorie = document.querySelector('#champ-categorie')
const btnAjouter = document.querySelector('.btn-ajouter')
const liste = document.querySelector('#liste-medias')

// Cette fonction lit ce que l'utilisateur a tape dans le formulaire.
// Elle verifie aussi que les donnees sont valides.
function lireSaisie() {
  // trim() retire les espaces au debut et a la fin.
  // Comme ca "   " ne sera pas accepte comme vrai titre.
  const titre = inputTitre.value.trim()
  if (titre === '') {
    alert('Merci de saisir un titre.')
    return null
  }
  // Ici on lit la categorie choisie dans la liste.
  // On recupere:
  // - sa valeur technique (ex: "film") : selectCategorie.value
  // - son texte visible (ex: "Film") : opt.text
  const opt = selectCategorie.options[selectCategorie.selectedIndex]
  return {
    titre,
    categorieValue: selectCategorie.value,
    categorieLibelle: opt.text,
  }
}

// Cette fonction construit UNE ligne de watchlist (<li>).
// Elle ne l'ajoute pas encore dans la page: elle la prepare seulement.
function creerLigneMedia({ titre, categorieValue, categorieLibelle }) {
  const li = document.createElement('li')
  li.className = 'media-item'
  // data-categorie permet au CSS de choisir une couleur selon la categorie.
  li.dataset.categorie = categorieValue

  const spanTitre = document.createElement('span')
  spanTitre.className = 'titre-aff'
  spanTitre.textContent = titre

  const spanCat = document.createElement('span')
  spanCat.className = 'cat-aff'
  spanCat.textContent = categorieLibelle

  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'btn-retirer'
  btn.textContent = 'Retirer'

  // On assemble tous les morceaux dans l'ordre d'affichage. 
  // Exemple : Titre - Catégorie BoutonRetirer
  li.append(spanTitre, document.createTextNode(' — '), spanCat, btn)
  return li
}

// Cette fonction rend le bouton "Retirer" actif sur UNE ligne.
function initialiserLigneMedia(li) {
  const btn = li.querySelector('.btn-retirer')
  if (!btn) return
  btn.addEventListener('click', () => {
    // Enlever la ligne de la page.
    li.remove()
  })
}

// Cette fonction fait tout le flux d'ajout:
// 1) lire le formulaire
// 2) creer la ligne
// 3) l'ajouter dans la liste
// 4) brancher le bouton retirer
// 5) vider/reinitialiser le formulaire
function ajouterMediaDepuisFormulaire() {
  const data = lireSaisie()
  // Si les donnees sont invalides, on arrete ici.
  if (!data) return
  const li = creerLigneMedia(data)
  liste.append(li)
  initialiserLigneMedia(li)
  // On remet le formulaire propre pour la prochaine saisie.
  inputTitre.value = ''
  selectCategorie.selectedIndex = 0
}

// Clic sur le bouton: ajoute un media.
btnAjouter.addEventListener('click', ajouterMediaDepuisFormulaire)

// Raccourci clavier:
// si l'utilisateur appuie sur Entrer dans le champ titre,
// on ajoute aussi le media.
inputTitre.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    // Evite un comportement navigateur non voulu.
    e.preventDefault()
    ajouterMediaDepuisFormulaire()
  }
})

// Les lignes deja presentes dans le HTML doivent aussi etre "initialisees"
// pour que leur bouton "Retirer" fonctionne.
liste.querySelectorAll('.media-item').forEach(initialiserLigneMedia)
