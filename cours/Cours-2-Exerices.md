## 🔄 **SÉANCE 2 - Structures de contrôle et objets**

### **Partie Pratique**

**Exercice 1 : Fonctions de base**

Créer des fonctions simples pour commencer.

```javascript
// 1. Fonction qui dit bonjour
function direBonjour(nom) {
    // TODO
}

// 2. Fonction qui calcule le carré d'un nombre
function carre(nombre) {
    // TODO
}

// 3. Fonction qui vérifie si un nombre est pair
function estPair(nombre) {
    // TODO
}

// Test des fonctions
direBonjour("Baptiste");
console.log(carre(5)); // 25
console.log(estPair(8)); // true
console.log(estPair(7)); // false
```

**Exercice 2 : Fonctions avec plusieurs paramètres**

Créer des fonctions qui prennent plusieurs paramètres.

```javascript
// 1. Fonction qui calcule l'aire d'un rectangle
function aireRectangle(longueur, largeur) {
    // TODO
}

// 2. Fonction qui trouve le plus grand de 3 nombres
function plusGrand(a, b, c) {
    // TODO
}

// 3. Fonction qui génère une phrase personnalisée
function genererPhrase(nom, age, ville) {
    // TODO
}

// Test des fonctions
console.log(aireRectangle(5, 3)); // 15
console.log(plusGrand(10, 25, 15)); // 25
console.log(genererPhrase("Baptiste", 27, "Provins")); // Je m'appelle Baptiste, j'ai 27 ans et j'habite à Provins.
```

**Exercice 3 : Fonctions avec conditions**

Créer des fonctions qui utilisent des conditions.

```javascript
// 1. Fonction qui calcule le prix avec remise
function prixAvecRemise(prix, pourcentageRemise) {
    // TODO
}

// 2. Fonction qui détermine la catégorie d'âge
function categorieAge(age) {
    // TODO (mineur/adulte/senior)
}

// 3. Fonction qui calcule la note en lettres
function noteEnLettres(note) {
    // Note sur 100 -> A, B, C, D, E ou F ?
}

// Test des fonctions
console.log(prixAvecRemise(100, 20)); // 80
console.log(categorieAge(25)); // "adulte"
console.log(noteEnLettres(85)); // "B"
```

**Exercice 4 : Fonctions avec tableaux**

Créer des fonctions qui manipulent des tableaux.

```javascript
// 1. Fonction qui compte les éléments d'un tableau
function compterElements(tableau) {
    // TODO
}

// 2. Fonction qui trouve le plus petit nombre d'un tableau
function plusPetit(tableau) {
    // TODO
}

// 3. Fonction qui inverse un tableau
function inverserTableau(tableau) {
    // TODO
}

// 4. Fonction qui filtre les nombres pairs
function nombresPairs(tableau) {
    // TODO
}

// Test des fonctions
let nombres = [3, 7, 2, 9, 1, 8, 4];
console.log(compterElements(nombres)); // 7
console.log(plusPetit(nombres)); // 1
console.log(inverserTableau(nombres)); // [4, 8, 1, 9, 2, 7, 3]
console.log(nombresPairs(nombres)); // [2, 8, 4]
```

**Exercice 5 : Fonctions avec objets**

Créer des fonctions qui travaillent avec des objets.

```javascript
// 1. Fonction qui calcule l'IMC
function calculerIMC(poids, taille) {
    // TODO : la fonction doit retourner 2 choses : la valeur de l'IMC et la catégorie (maigre, normal, supoids, obésité)
}

// 2. Fonction qui valide un objet utilisateur
function validerUtilisateur(utilisateur) {
    // vérifier que le nom est ok, + 2 caractères sans chiffres,
    // que l'email est valide, et qu'il y a un arobase @ dedans
    // Que l'age de l'utilisateur est supérieur à 13 ans
    
    // la fonction doit renvoyer si l'utilisateur est valide, et si non, les messages d'erreurs
}

// Test des fonctions
console.log(calculerIMC(70, 1.75));

let utilisateur1 = { nom: "Jean", email: "jean@email.com", age: 25 };
let utilisateur2 = { nom: "A", email: "email-invalide", age: 10 };

console.log(validerUtilisateur(utilisateur1));
console.log(validerUtilisateur(utilisateur2));
```

**Exercice 6 : Gestion d'une liste de courses**

Créer un système pour gérer une liste de courses avec les fonctions suivantes :
- Ajouter un article
- Afficher la liste
- Supprimer un article

```javascript
let courses = [];

// ... reste du code et des fonctions à créer ici

// Test des fonctions
ajouterArticle("pain");
ajouterArticle("lait");
ajouterArticle("pommes");
afficherListe();
supprimerArticle("lait");
afficherListe();
```

**Exercice 7 : Carnet d'adresses**

Créer un système pour gérer des contacts avec nom, email, téléphone.

```javascript
let contacts = [];

// ... reste du code et des fonctions à créer ici

// Test des fonctions
ajouterContact("Dupont", "jean.dupont@email.com", "0123456789");
ajouterContact("Martin", "marie.martin@email.com", "0987654321");
ajouterContact("Bernard", "pierre.bernard@email.com", "0555666777");
afficherTousContacts();
rechercherContact("Martin");
rechercherContact("Durand"); // Contact non trouvé
```
