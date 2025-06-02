// 1
let nom = "Vasseur";

// 2
let age = 26;

// 3
let estEtudiant = true;

// 4
console.log(nom);

// 5
age = 21;
console.log(age);

// 6
let ville = "Paris";
let pays = "France";
console.log("Je vis à " + ville + ", en " + pays + ".");
// ou console.log(`Je vis à ${ville}, en ${pays}.`)

// 7
let phrase = "J'apprends JavaScript et c'est passionnant";

// 8
let motDePasse = "azerty";
console.log(typeof motDePasse === "string"); // true

// 9
let estConnecte = false;
console.log(estConnecte);

// 10
let annee = 2025;
let anneeTexte = annee.toString();
console.log(anneeTexte);

// 11
let noteTexte = "42";
let noteNombre = Number(noteTexte);
// ou noteNombre = parseInt(noteTexte, 10);
console.log(noteNombre);

// 12
let phraseLongue = "Coucou les amis, comment ça va ?";
console.log(phraseLongue.length);

// 13
let prenom = "Baptiste";
console.log(prenom.charAt(0)); 
// ou prenom[0] ou prenom.slice(0, 1) ou prenom.substring(0, 1)

// 14
let phraseMinuscule = "c'est une phrase simple";
let majuscule = phraseMinuscule.toUpperCase();
console.log(majuscule);

// 15
let texteMajuscule = "JE SUIS EN MAJUSCULE";
let minuscule = texteMajuscule.toLowerCase();
console.log(minuscule);

// 16
let compteur = 0;
compteur += 10;
console.log(compteur);

// 17
let prix = 25;
let prixTotal = prix * 2;
console.log(prixTotal);

// 18
let reponse = "oui";
console.log(typeof reponse === "string"); // true

// 19
let estActif = true;
estActif = false;
console.log(estActif);

// 20
let chaine = "bonjour";
let nombre = 42;
let booleen = true;

console.log(typeof chaine);  // "string"
console.log(typeof nombre);  // "number"
console.log(typeof booleen); // "boolean"
