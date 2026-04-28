// On prend le bouton dans la page.
// Ce bouton sera cliqué par l'utilisateur.
const bouton = document.querySelector('#btn-darkmode')

// Cette fonction change le theme de la page:
// soit clair, soit sombre.
function toggleDarkMode() {
  // Ici, on recupere le body dans le DOM.
  // Le body contient toute la page.
  // Donc si on ajoute une classe sur le body,
  // on peut changer le style de toute la page d'un coup.
  const body = document.querySelector('body')
  // On ajoute ou on retire la classe "darkmode".
  // Si la classe est ajoutee, le CSS avec ".darkmode ..."
  // devient actif et l'apparence change tout de suite.
  // Si on retire la classe, on revient au style normal.
  body.classList.toggle('darkmode')
  // Ensuite, on change le texte du bouton.
  // Le texte doit dire ce qui se passera au prochain clic.
  if (body.classList.contains('darkmode')) {
    bouton.textContent = 'Désactiver le dark mode'
  } else {
    bouton.textContent = 'Activer le dark mode'
  }
}

// A chaque clic, on lance la fonction.
// C'est ce lien qui rend le bouton cliquable et interactif.
bouton.addEventListener('click', toggleDarkMode)
