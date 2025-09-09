// Exercice 1 : Fonctions de base

// Fonction qui dit bonjour
function direBonjour(nom) {
    console.log(`Bonjour ${nom} !`);
}

// Fonction qui calcule le carré d'un nombre
function carre(nombre) {
    return nombre * nombre;
}

// Fonction qui vérifie si un nombre est pair
function estPair(nombre) {
    return nombre % 2 === 0;
}

// Test des fonctions
direBonjour("Baptiste");
console.log(carre(5)); // 25
console.log(estPair(8)); // true
console.log(estPair(7)); // false
