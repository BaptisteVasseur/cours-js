// Exercice 2 : Fonctions avec plusieurs paramètres

// Fonction qui calcule l'aire d'un rectangle
function aireRectangle(longueur, largeur) {
    return longueur * largeur;
}

// Fonction qui trouve le plus grand de 3 nombres
function plusGrand(a, b, c) {
    return Math.max(a, b, c);
    // Alternative avec if/else :
    // if (a >= b && a >= c) return a;
    // if (b >= a && b >= c) return b;
    // return c;
}

// Fonction qui génère une phrase personnalisée
function genererPhrase(nom, age, ville) {
    return `Je m'appelle ${nom}, j'ai ${age} ans et j'habite à ${ville}.`;
}

// Test des fonctions
console.log(aireRectangle(5, 3)); // 15
console.log(plusGrand(10, 25, 15)); // 25
console.log(genererPhrase("Baptiste", 27, "Paris")); // Je m'appelle Baptiste, j'ai 27 ans et j'habite à Paris.
