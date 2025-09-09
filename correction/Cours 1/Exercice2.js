// Exercice 2 : Calculatrice simple

let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
let choix = prompt("Quel calcul voulez-vous faire ? (+, -, *, /)");

let resultat;
let operateur;

switch(choix) {
    case '+':
        resultat = nombre1 + nombre2;
        operateur = '+';
        break;
    case '-':
        resultat = nombre1 - nombre2;
        operateur = '-';
        break;
    case '*':
        resultat = nombre1 * nombre2;
        operateur = 'x';
        break;
    case '/':
        if (nombre2 !== 0) {
            resultat = nombre1 / nombre2;
            operateur = '/';
        } else {
            console.log("Erreur : Division par zéro impossible !");
        }
        break;
    default:
        console.log("Opération non reconnue !");
}

if (resultat !== undefined) {
    console.log(`${nombre1} ${operateur} ${nombre2} = ${resultat}`);
}
