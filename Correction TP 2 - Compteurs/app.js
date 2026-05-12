// Cette variable garde en memoire le compteur "selectionne".
// "Selectionne" veut dire: le compteur sur lequel le clavier va agir.
let conteneurActif = null

// Cette fonction met la bonne couleur selon la valeur du compteur.
// Exemple:
// - de 0 a 9 -> palier-bas
// - de 10 a 20 -> palier-mid
// - 21 et + -> palier-haut
function appliquerPaliers(span, valeur) {
  // On retire d'abord toutes les classes de palier.
  // Comme ca, on est sur d'en avoir une seule a la fin.
  span.classList.remove('palier-bas', 'palier-mid', 'palier-haut')
  if (valeur < 10) {
    span.classList.add('palier-bas')
  } else if (valeur <= 20) {
    span.classList.add('palier-mid')
  } else {
    span.classList.add('palier-haut')
  }
}

// Lit le texte affiche dans le <span> et le transforme en nombre.
function lireValeur(span) {
  const n = parseInt(span.textContent, 10)
  // Si on ne peut pas lire un vrai nombre, on retourne 0.
  // Cela evite des bugs si le contenu n'est pas valide.
  return Number.isNaN(n) ? 0 : n
}

// Ecrit une nouvelle valeur dans le compteur.
function ecrireValeur(span, v) {
  // On bloque la valeur minimale a 0.
  // Donc le compteur ne peut jamais devenir negatif.
  const nv = Math.max(0, v)
  span.textContent = String(nv)
  // On met aussi a jour la couleur du palier.
  appliquerPaliers(span, nv)
}

// Cette fonction "branche" toute la logique sur UN compteur.
// Elle est appelee pour les compteurs deja presents
// et aussi pour ceux crees plus tard.
function initialiserCompteur(conteneur) {
  // On recupere les elements utiles a l'interieur de ce compteur.
  const span = conteneur.querySelector('.valeur')
  const btnPlus = conteneur.querySelector('.btn-plus')
  const btnMoins = conteneur.querySelector('.btn-moins')
  const btnReset = conteneur.querySelector('.btn-reset')
  const btnSupprimer = conteneur.querySelector('.btn-supprimer')

  // Si on clique sur le compteur, il devient le compteur actif.
  // Le clavier (fleche haut/bas) utilisera celui-ci.
  conteneur.addEventListener('click', () => {
    // On enleve l'etat actif des autres compteurs.
    document.querySelectorAll('.compteur.actif').forEach((el) => el.classList.remove('actif'))
    conteneurActif = conteneur
    conteneur.classList.add('actif')
  })

  // Quand on clique sur +, on ajoute 1.
  btnPlus.addEventListener('click', () => {
    ecrireValeur(span, lireValeur(span) + 1)
  })

  // Quand on clique sur -, on retire 1.
  btnMoins.addEventListener('click', () => {
    ecrireValeur(span, lireValeur(span) - 1)
  })

  // Ce bouton remet la valeur a 0.
  btnReset.addEventListener('click', () => {
    ecrireValeur(span, 0)
  })

  // Le bouton supprimer peut ne pas exister selon le HTML.
  // On verifie donc avant de brancher l'evenement.
  if (btnSupprimer) {
    btnSupprimer.addEventListener('click', (e) => {
      // Sans cette ligne, le clic "Supprimer" activerait aussi le compteur.
      e.stopPropagation()
      // Si on supprime le compteur actif, on vide la memoire globale.
      if (conteneurActif === conteneur) {
        conteneurActif = null
      }
      // On enleve son style actif puis on le supprime du DOM.
      conteneur.classList.remove('actif')
      conteneur.remove()
    })
  }

  // On relit puis reecrit la valeur initiale pour appliquer le bon style.
  ecrireValeur(span, lireValeur(span))
}

// Ce modele HTML sera reutilise pour creer un nouveau compteur.
function compteurInnerHTML() {
  return `
    <div class="compteur-head">
      <span class="valeur palier-bas">0</span>
    </div>
    <div class="compteur-actions">
      <button type="button" class="btn-moins" aria-label="Moins">−</button>
      <button type="button" class="btn-plus" aria-label="Plus">+</button>
      <button type="button" class="btn-reset">Remise à zéro</button>
      <button type="button" class="btn-supprimer">Supprimer</button>
    </div>
  `
}

// Ici on ecoute le clavier dans toute la page.
// On veut: fleche haut = +1, fleche bas = -1 sur le compteur actif.
document.addEventListener('keydown', (e) => {
  // Si aucun compteur n'est actif, on ne fait rien.
  // Pareil si le compteur actif a ete supprime.
  if (!conteneurActif || conteneurActif.isConnected !== true) return
  // On ignore toutes les touches sauf ArrowUp et ArrowDown.
  if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
  // On bloque le comportement par defaut du navigateur.
  e.preventDefault()
  const span = conteneurActif.querySelector('.valeur')
  if (!span) return
  const v = lireValeur(span)
  if (e.key === 'ArrowUp') {
    ecrireValeur(span, v + 1)
  } else {
    ecrireValeur(span, v - 1)
  }
})

// Elements principaux de la page.
const liste = document.querySelector('#liste-compteurs')
const btnNouveau = document.querySelector('#btn-nouveau')

// Quand on clique sur "Nouveau compteur", on cree un nouvel article.
btnNouveau.addEventListener('click', () => {
  const art = document.createElement('article')
  art.className = 'compteur'
  // tabindex rend le bloc focusable au clavier.
  art.setAttribute('tabindex', '0')
  art.innerHTML = compteurInnerHTML()
  // On l'ajoute dans la liste puis on branche sa logique.
  liste.append(art)
  initialiserCompteur(art)
})

// Au chargement de la page, on initialise aussi les compteurs deja presents.
document.querySelectorAll('.compteur').forEach(initialiserCompteur)
