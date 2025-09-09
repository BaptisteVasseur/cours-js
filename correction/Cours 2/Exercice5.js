// Exercice 5 : Fonctions avec objets

// Fonction qui calcule l'IMC
function calculerIMC(poids, taille) {
    const imc = poids / (taille * taille);
    let categorie;
    
    if (imc < 18.5) {
        categorie = "maigre";
    } else if (imc < 25) {
        categorie = "normal";
    } else if (imc < 30) {
        categorie = "surpoids";
    } else {
        categorie = "obésité";
    }
    
    return {
        imc: Math.round(imc * 10) / 10, // Arrondi à 1 décimale
        categorie: categorie
    };
}

// Fonction qui valide un objet utilisateur
function validerUtilisateur(utilisateur) {
    let erreurs = [];
    let valide = true;
    
    // Vérification du nom
    if (!utilisateur.nom || utilisateur.nom.length < 2) {
        erreurs.push("Le nom doit contenir au moins 2 caractères");
        valide = false;
    } else if (/\d/.test(utilisateur.nom)) {
        erreurs.push("Le nom ne peut pas contenir de chiffres");
        valide = false;
    }
    
    // Vérification de l'email
    if (!utilisateur.email || !utilisateur.email.includes('@')) {
        erreurs.push("L'email doit contenir un @");
        valide = false;
    }
    
    // Vérification de l'âge
    if (!utilisateur.age || utilisateur.age < 13) {
        erreurs.push("L'utilisateur doit avoir au moins 13 ans");
        valide = false;
    }
    
    return {
        valide: valide,
        erreurs: erreurs
    };
}

// Test des fonctions
console.log(calculerIMC(70, 1.75));

let utilisateur1 = { nom: "Jean", email: "jean@email.com", age: 25 };
let utilisateur2 = { nom: "A", email: "email-invalide", age: 10 };

console.log(validerUtilisateur(utilisateur1));
console.log(validerUtilisateur(utilisateur2));
