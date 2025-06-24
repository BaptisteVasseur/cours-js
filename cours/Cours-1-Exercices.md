## 🎯 **SÉANCE 1 - Découverte du JavaScript**

### **Partie Pratique**

**Exercice 1 : Afficher ses informations**

Ajoutez 4 variables différentes pour stocker votre nom, votre prénom, votre age, votre adresse email. Une fois les variables ajoutées, ajoutez une fonction qui permet d'afficher vos informations sous le format suivant : 

```js
const prenom = "Baptiste";
const nom = "Vasseur";
const age = 27;
const email = 'bvasseur5@myges.com';

"Bonjour Baptiste V ! Comment allez-vous ?"
"Vous avez actuellent 27 ans, il vous reste 3 avant la trentaine."
"Vous utilisez myges.com comme boite email et votre pseudo est bvasseur5"
```

**Exercice 2 : Calculatrice simple**
Créer un script qui demande deux nombres à l'utilisateur et demande quel opération il veux faire.

```javascript
// Solution
let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
let choix = prompt("Quel calcul voulez-vous faire ?")

console.log(`CHIFFRE_1 OPERATEUR CHIFFRE_2 = REUSLTAT `);
// exemple : console.log("42 x 10 = 420")
// ou console.log("150 / 10 = 150")
```

**Exercice 3 : Jeu du nombre mystère (version simple)**
L'ordinateur choisit un nombre entre 1 et 10, l'utilisateur doit deviner. (on va devoir utiliser une boucle pour pouoir faire ça)
