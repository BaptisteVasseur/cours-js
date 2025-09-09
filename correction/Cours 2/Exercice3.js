// Exercice 3 : Fonctions avec conditions

// Fonction qui calcule le prix avec remise
function prixAvecRemise(prix, pourcentageRemise) {
    const remise = (prix * pourcentageRemise) / 100;
    return prix - remise;
}

// Fonction qui détermine la catégorie d'âge
function categorieAge(age) {
    if (age < 18) {
        return "mineur";
    } else if (age < 65) {
        return "adulte";
    } else {
        return "senior";
    }
}

// Fonction qui calcule la note en lettres
function noteEnLettres(note) {
    if (note >= 90) return "A";
    if (note >= 80) return "B";
    if (note >= 70) return "C";
    if (note >= 60) return "D";
    if (note >= 50) return "E";
    return "F";
}

// Test des fonctions
console.log(prixAvecRemise(100, 20)); // 80
console.log(categorieAge(25)); // "adulte"
console.log(noteEnLettres(85)); // "B"
