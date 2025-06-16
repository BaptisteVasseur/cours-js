// 1. Déclare une variable nom et assigne-lui ton prénom.
let nom = "Jean";

// 2. Déclare une variable age et donne-lui une valeur numérique.
let age = 25;

// 3. Crée une variable estEtudiant qui contient true.
let estEtudiant = true;

// 4. Affiche dans la console la valeur de la variable nom.
console.log(nom);

// 5. Change la valeur de la variable age et affiche-la.
age = 30;
console.log(age);

// 6. Déclare deux variables ville et pays, puis concatène-les dans une phrase.
let ville = "Paris";
let pays = "France";
let phrase = "Je vis à " + ville + ", en " + pays + ".";
console.log(phrase);

// 7. Crée une variable phrase contenant une phrase complète.
let phraseComplete = "Il fait beau aujourd'hui.";

// 8. Vérifie si une variable motDePasse est de type string.
let motDePasse = "monSecret";
console.log(typeof motDePasse === "string");

// 9. Crée une variable estConnecte et affecte-lui false, puis affiche-la.
let estConnecte = false;
console.log(estConnecte);

// 10. Crée une variable contenant une année et convertis-la en chaîne.
let annee = 2025;
let anneeString = annee.toString();
console.log(anneeString);

// 11. Déclare une variable contenant une note texte, puis transforme-la en nombre.
let noteTexte = "15";
let noteNombre = Number(noteTexte);
console.log(noteNombre);

// 12. Variable avec une phrase, puis affiche le nombre de caractères.
let phrase2 = "Bonjour tout le monde";
console.log(phrase2.length);

// 13. Affiche uniquement la première lettre d'un prénom.
let prenom = "Alice";
console.log(prenom[0]);

// 14. Transforme une phrase en majuscules.
let texteMinuscule = "bonjour";
let texteMajuscule = texteMinuscule.toUpperCase();
console.log(texteMajuscule);

// 15. Transforme un texte en minuscules.
let texteMaj = "HELLO";
let texteMin = texteMaj.toLowerCase();
console.log(texteMin);

// 16. Variable compteur +10 puis affichage.
let compteur = 0;
compteur += 10;
console.log(compteur);

// 17. Prix * 2 puis affichage.
let prix = 20;
let total = prix * 2;
console.log(total);

// 18. Vérifie si une variable est une chaîne.
let reponse = "oui";
console.log(typeof reponse === "string");

// 19. Variable booléenne qui passe de true à false.
let actif = true;
actif = false;
console.log(actif);

// 20. Trois variables et affichage de leur type.
let chaine = "texte";
let nombre = 42;
let booleen = true;
console.log(typeof chaine);
console.log(typeof nombre);
console.log(typeof booleen);
