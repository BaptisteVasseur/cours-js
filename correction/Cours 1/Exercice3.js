// Exercice 3 : Jeu du nombre mystère (version simple)

const nombreMystere = Math.floor(Math.random() * 10) + 1;
let nombreUtilisateur;
let tentatives = 0;
let trouve = false;

console.log("Jeu du nombre mystère !");
console.log("Je pense à un nombre entre 1 et 10. Devinez lequel !");

while (!trouve) {
    nombreUtilisateur = parseInt(prompt("Entrez votre nombre (entre 1 et 10) :"));
    tentatives++;
    
    if (isNaN(nombreUtilisateur) || nombreUtilisateur < 1 || nombreUtilisateur > 10) {
        console.log("Veuillez entrer un nombre valide entre 1 et 10 !");
        continue;
    }
    
    if (nombreUtilisateur === nombreMystere) {
        trouve = true;
        console.log(`Bravo ! Vous avez trouvé le nombre ${nombreMystere} en ${tentatives} tentative(s) !`);
    } else if (nombreUtilisateur < nombreMystere) {
        console.log("C'est plus grand !");
    } else {
        console.log("C'est plus petit !");
    }
}

console.log("Merci d'avoir joué !");
