## 🔄 **SÉANCE 2 - Structures de contrôle et objets**

### **Partie Théorique**

#### **2.1 Les boucles**

Les boucles permettent de répéter un bloc de code plusieurs fois. C'est très utile quand on veut faire la même action sur plusieurs éléments.

**Boucle for classique :**
```javascript
// Boucle for classique
for (let i = 0; i < 5; i++) {
    console.log(`Itération ${i}`);
}
```

> La boucle for a 3 parties séparées par des points-virgules :
> 1. `let i = 0` : initialisation (on commence à 0)
> 2. `i < 5` : condition (on continue tant que i est inférieur à 5)
> 3. `i++` : incrémentation (on ajoute 1 à i à chaque tour)

**Boucle for...of (pour les tableaux) :**
```javascript
let fruits = ["pomme", "banane", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

> Cette boucle est plus simple quand on veut parcourir tous les éléments d'un tableau. On n'a pas besoin de gérer l'index manuellement.

**Boucle for...in (pour les objets) :**
```javascript
let personne = { nom: "Alice", age: 30, ville: "Paris" };
for (let cle in personne) {
    console.log(`${cle}: ${personne[cle]}`);
}
```

> Cette boucle permet de parcourir toutes les propriétés d'un objet. `cle` contient le nom de la propriété, et `personne[cle]` contient sa valeur.

**Boucle while :**
```javascript
let compteur = 0;
while (compteur < 5) {
    console.log(`Compteur: ${compteur}`);
    compteur++;
}
```

> La boucle while continue tant que la condition est vraie. Attention à ne pas oublier d'incrémenter le compteur, sinon on a une boucle infinie !

**Boucle do...while :**
```javascript
let nombre;
do {
    nombre = parseInt(prompt("Entrez un nombre positif:"));
} while (nombre <= 0);
```

> Cette boucle fait au moins une fois le code, puis vérifie la condition. Utile quand on veut demander quelque chose à l'utilisateur au moins une fois.

#### **2.2 Les fonctions**

Les fonctions permettent de regrouper du code réutilisable. C'est comme une recette de cuisine : on définit les étapes une fois, puis on peut les réutiliser.

**Déclaration de fonction classique :**
```javascript
function saluer(nom) {
    return `Bonjour ${nom}!`;
}

// Appel de fonction
let message = saluer("Alice");
console.log(message);
```

> `function` est le mot-clé pour déclarer une fonction. `nom` est un paramètre (une variable qui reçoit une valeur). `return` permet de renvoyer une valeur.

**Fonction avec plusieurs paramètres :**
```javascript
function calculer(a, b, operation) {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}

console.log(calculer(10, 5, '+')); // 15
console.log(calculer(10, 5, '*')); // 50
```

**Fonctions fléchées (arrow functions) :**
```javascript
// Syntaxe courte (une seule ligne)
const carre = x => x * x;

// Avec plusieurs paramètres
const additionner = (a, b) => a + b;

// Avec corps de fonction (plusieurs lignes)
const analyserAge = age => {
    if (age < 18) return "mineur";
    if (age < 65) return "adulte";
    return "senior";
};
```

> Les fonctions fléchées sont une syntaxe plus moderne et plus courte. Elles sont très utilisées dans le JavaScript moderne.

#### **2.3 Les tableaux**

Les tableaux permettent de stocker plusieurs valeurs dans une seule variable. C'est comme une liste de courses.

**Création et manipulation de base :**
```javascript
// Création de tableaux
let vide = [];
let nombres = [1, 2, 3, 4, 5];
let mixte = ["texte", 42, true, null];

// Accès aux éléments
console.log(nombres[0]); // 1 (premier élément)
console.log(nombres.length); // 5 (nombre d'éléments)
```

> Les tableaux commencent à l'index 0 ! Le premier élément est à l'index 0, le deuxième à l'index 1, etc.

**Méthodes principales :**
```javascript
let fruits = ["pomme", "banane"];

// Ajouter des éléments
fruits.push("orange");           // Ajouter à la fin
fruits.unshift("fraise");        // Ajouter au début

// Retirer des éléments
let dernier = fruits.pop();      // Retirer le dernier
let premier = fruits.shift();    // Retirer le premier

// Recherche
let index = fruits.indexOf("banane"); // Trouver l'index
let existe = fruits.includes("pomme"); // Vérifier la présence
```

**Méthodes de transformation :**
```javascript
let nombres = [1, 2, 3, 4, 5];

// map : transformer chaque élément
let doubles = nombres.map(x => x * 2);
console.log(doubles); // [2, 4, 6, 8, 10]

// filter : garder seulement certains éléments
let pairs = nombres.filter(x => x % 2 === 0);
console.log(pairs); // [2, 4]

// reduce : combiner tous les éléments
let somme = nombres.reduce((acc, x) => acc + x, 0);
console.log(somme); // 15
```

> Ces méthodes sont très puissantes et permettent de manipuler les tableaux de façon élégante.

#### **2.4 Les objets**

Les objets permettent de regrouper des données liées ensemble. C'est comme une fiche d'identité.

**Création d'objets :**
```javascript
let personne = {
    nom: "Vasseur",
    prenom: "Baptiste",
    age: 30,
    email: "bvasseur5@myges.fr",
    
    // Méthode (fonction dans un objet)
    sePresenter: function() {
        return `Je suis ${this.prenom} ${this.nom}`;
    }
};
```

> `this` fait référence à l'objet lui-même. Dans `this.prenom`, `this` c'est l'objet `personne`.

**Accès aux propriétés :**
```javascript
// Notation point
console.log(personne.nom);        // "Vasseur"

// Notation crochet (utile quand le nom de la propriété est dans une variable)
let propriete = "email";
console.log(personne[propriete]); // "bvasseur5@myges.fr"
```

**Modification d'objets :**
```javascript
// Modifier une propriété existante
personne.age = 31;

// Ajouter une nouvelle propriété
personne.telephone = "0123456789";
```

**Destruction (destructuring) :**
```javascript
let { nom, prenom, age } = personne;
console.log(`${prenom} ${nom} a ${age} ans`);
```

> Le destructuring permet d'extraire des propriétés d'un objet dans des variables séparées. C'est très pratique !

#### **2.5 Introduction au DOM**

Le DOM (Document Object Model) est une représentation en mémoire de la structure HTML d'une page. JavaScript peut l'utiliser pour modifier dynamiquement le contenu, la structure et le style.

**Concept de base :**
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="titre">Mon Titre</h1>
    <p class="description">Description du contenu</p>
    <button onclick="changerTitre()">Changer le titre</button>
    
    <script>
        function changerTitre() {
            let titre = document.getElementById('titre');
            titre.textContent = 'Nouveau Titre!';
            titre.style.color = 'blue';
        }
    </script>
</body>
</html>
```

> `document.getElementById('titre')` permet de récupérer un élément HTML par son ID. `textContent` permet de modifier le texte, et `style.color` permet de modifier la couleur.
