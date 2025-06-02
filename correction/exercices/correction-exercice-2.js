// 21
let nombre1 = 15;
let nombre2 = 10;
console.log(nombre1 > nombre2); // true

// 22
let mot1 = "bonjour";
let mot2 = "Bonjour";
console.log(mot1 === mot2); // false (différence de casse)

// 23
let entier = 25;
let limite = 20;
console.log(entier >= limite); // true

// 24
let motDePasse = "azerty123";
let motInterdit = "admin";
console.log(motDePasse !== motInterdit); // true

// 25
let valeur1 = 60;
let valeur2 = 50;
let somme = valeur1 + valeur2;
console.log(somme > 100); // true

// 26
let age = 19;
console.log(age > 18); // true

// 27
let prenom = "Baptiste";
let ageBaptiste = 17;
console.log(prenom === "Baptiste" && ageBaptiste < 20); // true

// 28
let mot = "ordinateur";
console.log(mot.length > 5); // true

// 29
let estConnecte = true;
let estAdmin = false;
console.log(estConnecte === estAdmin); // false

// 30
let valeur = 12;
console.log(valeur !== 10); // true

// 31
let note = 15;
console.log(note >= 10 && note <= 20); // true

// 32
let utilisateurConnecte = true;
if (utilisateurConnecte) {
    console.log("Utilisateur connecté");
}

// 33
let motDePasseLong = "securite123";
console.log(motDePasseLong.length > 8); // true

// 34
let jour = "lundi";
console.log(jour !== "dimanche"); // true

// 35
let ageUtilisateur = 70;
if (ageUtilisateur < 13 || ageUtilisateur > 65) {
    console.log("Utilisateur trop jeune ou senior");
}

// 36
let heure = 10;
if (heure < 12) {
    console.log("Bonjour");
}

// 37
let code1 = "ABC";
let code2 = "abc";
if (code1 === code2) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}

// 38
let agePersonne = 22;
if (agePersonne >= 18) {
    console.log("Adulte");
} else {
    console.log("Mineur");
}

// 39
let utilisateurEstConnecte = true;
let utilisateurEstAdmin = true;
if (utilisateurEstConnecte && utilisateurEstAdmin) {
    console.log("Accès autorisé");
}

// 40
let utilisateurInactif = false;
let utilisateurBloque = true;
if (utilisateurInactif || utilisateurBloque) {
    console.log("Attention : accès restreint");
}
