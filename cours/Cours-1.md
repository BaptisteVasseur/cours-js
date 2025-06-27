## 🎯 **SÉANCE 1 - Découverte du JavaScript**

### **Partie Théorique**

#### **1.1 Qu'est-ce que JavaScript ?**

JavaScript est un langage de programmation interprété, utilisé pour rendre les pages web interactives. Il est l'un des langages les plus populaires au monde.

**Caractéristiques principales :**
- Langage interprété (pas de compilation)
- Typé dynamiquement
- Multi-paradigme (orienté objet, fonctionnel, procédural)
- Exécuté côté client (navigateur) et serveur (Node.js)

> On va étudier dans ce cours uniquement le côté client. Pour la partie côté serveur, ce sera dans les prochaines années. Le JS côté serveur c'est un peu comme PHP en gros.

> On parle ici bien de JavaSCRIPT et non pas de Java !! Attention c'est pas le même langage.

#### **1.2 Où écrire du JavaScript ?**

Le Javascript s'execute côté Navigateur. Par besoin d'installer d'outils/de logiciels pour executer du JS, un navigateur c'est OK. Je vous recommande cependant d'installer Visual Studio Code et d'installer une extension sur VSCode : (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)[https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer]

Ensuite on doit créer un fichier HTML. Peu importe le nom, mais en général on mets le nom de la page qu'on veux créer.

**Structure de base d'un fichier HTML avec JS :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Super Site</title>
</head>
<body>
    <h1>Bonjour !</h1>
    
    <!-- JavaScript intégré -->
    <script>
        console.log("Ici c'est du javascript 'inline', on écrit le JS directement dans une balise <script>");
    </script>
    
    <!-- JavaScript externe -->
    <script src="mon-fichier-javascript.js"></script>
</body>
</html>
```

**Fichier mon-fichier-javascript.js :**
```javascript
console.log("Ici on écrit du Javascript dans un fichier séparé, c'est plus maintenable.");
```

Je vous conseilles de toujours écrire votre Javascript dans un fichier séparé. En règle générale vous avez un fichier Javascript par page HTML.

Dans les prochaines années, vous verrez comment avoir un fichier Javascript pour 5/10/20/100 pages HTML, mais là c'est encore trop tôt. 


#### **1.3 Syntaxe de base du langage**

**1.3.1 Variables et constantes :**
```javascript
// Déclaration de variables
let nom = "Alice";
let age = 25;
let estEtudiant = true;

// Constante (valeur non modifiable)
const PI = 3.14159;

// Ancienne syntaxe (à éviter)
var ancienneVariable = "deprecié";
```

Dans la pratique, maintenant on utilise que des ``let`` et des ``const``. Les ``var`` marchent aussi mais c'est plus une bonne pratique. 

La différence entre une ``let`` et une ``var`` c'est ce qu'on appele la (portée des variables)[https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var]

**1.3.2 Types de données primitifs :**
```javascript
// String (chaîne de caractères)
let prenom = "Jean";
let message = `Bonjour ${prenom}!`; // 

// Vous pouvoir voir que pour la variable au dessus, on utilise des backquotes (guillements inversés en Français) : ` , cela permet de faire de l'interpolation de variable. C'est un peu comme en PHP quand vous avez des chaines de caractères avec des doubles guillements et que vous mettez des variables avec des $ dans la chaine de caractère, c'est la valeur qui est remplacé à l'intérieur
// -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


// Number (nombre)
let entier = 42;
let decimal = 3.14;
let negatif = -10;

// Boolean (booléen)
let vrai = true;
let faux = false;

// Undefined (non défini)
let nonDefini;
console.log(nonDefini); // undefined

// Null (valeur nulle)
let vide = null;
```

**1.3.3 Opérateurs :**
```javascript
// Arithmétiques
let a = 10;
let b = 3;

console.log(a + b); // 13 (addition), que ce passe t'il si on mets des plus avec des chaines de caractères ? -> ça concatène
console.log(a - b); // 7 (soustraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.333... (division)
console.log(a % b); // 1 (modulo)
console.log(a ** b); // 1000 (puissance)

// Comparaison
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= b);  // true
console.log(a <= b);  // false
console.log(a === b); // false (égalité stricte)
console.log(a !== b); // true (inégalité stricte)

// Logiques
let x = true;
let y = false;
console.log(x && y); // false (ET logique)
console.log(x || y); // true (OU logique)
console.log(!x);     // false (NON logique)
```

#### **1.4 Fonctions d'interaction avec l'utilisateur**

JavaScript dispose de plusieurs fonctions intégrées pour interagir avec l'utilisateur et déboguer le code.

**1.4.1 console.log() - Affichage dans la console :**
```javascript
// Affichage simple
console.log("Bonjour le monde");

// Affichage de variables
let nom = "Alice";
let age = 25;
console.log("Nom:", nom, "Age:", age);

// Affichage d'objets
let utilisateur = { nom: "Bob", age: 30 };
console.log("Utilisateur:", utilisateur);

// Affichage avec formatage
console.log(`L'utilisateur ${nom} a ${age} ans`);

// Différents niveaux de log
console.error("Ceci est une erreur");
console.warn("Ceci est un avertissement");
console.info("Ceci est une information");
```

> **Important :** `console.log()` est essentiel pour déboguer ton code. Ouvre les outils de développement de ton navigateur (F12) pour voir les messages dans l'onglet "Console".

**1.4.2 alert() - Boîte de dialogue d'alerte :**
```javascript
// Message simple
alert("Bienvenue sur notre site !");

// Message avec variable
let message = "Votre compte a été créé avec succès";
alert(message);

// Attention : alert() bloque l'exécution du code jusqu'à ce que l'utilisateur clique sur OK
```

> **Note :** `alert()` est pratique pour les tests mais peu utilisé en production car l'expérience utilisateur n'est pas optimale.

**1.4.3 prompt() - Saisie utilisateur :**
```javascript
// Saisie simple
let nom = prompt("Quel est votre nom ?");
console.log("Bonjour", nom);

// Saisie avec valeur par défaut
let age = prompt("Quel est votre âge ?", "18");
console.log("Vous avez", age, "ans");

// Conversion en nombre
let nombre = parseInt(prompt("Entrez un nombre :"));
let prix = parseFloat(prompt("Entrez un prix :"));

// Gestion des cas d'annulation
let reponse = prompt("Êtes-vous sûr ?");
if (reponse === null) {
    console.log("L'utilisateur a annulé");
} else {
    console.log("Réponse :", reponse);
}
```

> **Important :** `prompt()` retourne toujours une chaîne de caractères. Utilise `parseInt()` ou `parseFloat()` pour convertir en nombre.

**1.4.4 confirm() - Confirmation utilisateur :**
```javascript
// Confirmation simple
let confirmer = confirm("Êtes-vous sûr de vouloir continuer ?");
if (confirmer) {
    console.log("L'utilisateur a confirmé");
} else {
    console.log("L'utilisateur a annulé");
}

// Confirmation avec action
let supprimer = confirm("Voulez-vous vraiment supprimer cet élément ?");
if (supprimer) {
    console.log("Élément supprimé");
    // Code de suppression ici
} else {
    console.log("Suppression annulée");
}

// Confirmation dans une fonction
function demanderConfirmation(message) {
    return confirm(message);
}

let continuer = demanderConfirmation("Continuer l'opération ?");
```

**1.4.5 Exemple pratique combiné :**
```javascript
// Mini application de calculatrice
let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

if (isNaN(nombre1) || isNaN(nombre2)) {
    alert("Veuillez entrer des nombres valides !");
} else {
    let resultat = nombre1 + nombre2;
    let message = `${nombre1} + ${nombre2} = ${resultat}`;
    
    console.log("Calcul effectué :", message);
    alert(message);
    
    let continuer = confirm("Voulez-vous faire un autre calcul ?");
    if (continuer) {
        console.log("Nouveau calcul demandé");
        // Ici on pourrait relancer le processus
    }
}
```

> **Conseil :** Ces fonctions sont parfaites pour apprendre et tester, mais dans une vraie application web, on préfère utiliser des formulaires HTML et des éléments DOM pour une meilleure expérience utilisateur.

> Les fenetres affichés par les fonctions ``prompt``, ``confirm``, ... ne sont pas personnalisables ! Et elle dépendent du navigateur et de l'OS de l'utilisateur

#### **1.5 Conditions**

**Structure if/else :**
```javascript
let age = 18;

if (age >= 18) {
    console.log("Vous êtes majeur");
} else {
    console.log("Vous êtes mineur");
}

// If/else if/else
let note = 85;

if (note >= 90) {
    console.log("Excellent");
} else if (note >= 80) {
    console.log("Très bien");
} else if (note >= 70) {
    console.log("Bien");
} else if (note >= 60) {
    console.log("Passable");
} else {
    console.log("Insuffisant");
}
```

**Switch/case :**
```javascript
let jour = "lundi";

switch (jour) {
    case "lundi":
        console.log("Début de semaine");
        break;
    case "vendredi":
        console.log("Bientôt le weekend!");
        break;
    case "samedi":
    case "dimanche":
        console.log("Weekend!");
        break;
    default:
        console.log("Jour de semaine normal");
}
```

**Opérateur ternaire :**
```javascript
let age = 20;
let message = age >= 18 ? "Majeur" : "Mineur";
console.log(message); // "Majeur"
```
