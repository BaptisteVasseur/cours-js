// Exercice 4 : Fonctions avec tableaux

// Fonction qui compte les éléments d'un tableau
function compterElements(tableau) {
    return tableau.length;
}

// Fonction qui trouve le plus petit nombre d'un tableau
function plusPetit(tableau) {
    let min = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }
    return min;
}

// Fonction qui inverse un tableau
function inverserTableau(tableau) {
    return tableau.slice().reverse();
}

// Fonction qui filtre les nombres pairs
function nombresPairs(tableau) {
    return tableau.filter(nombre => nombre % 2 === 0);
}

// Test des fonctions
let nombres = [3, 7, 2, 9, 1, 8, 4];
console.log(compterElements(nombres)); // 7
console.log(plusPetit(nombres)); // 1
console.log(inverserTableau(nombres)); // [4, 8, 1, 9, 2, 7, 3]
console.log(nombresPairs(nombres)); // [2, 8, 4]
