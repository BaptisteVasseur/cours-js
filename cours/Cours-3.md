## 🌐 **SÉANCE 3 - DOM API - Sélection, modification et événements**

### **Partie Théorique**

#### **3.1 Qu'est-ce que le DOM ?**

Le DOM (Document Object Model) est une représentation en mémoire de votre page HTML. C'est comme un arbre généalogique de votre page web où chaque élément HTML devient un "nœud" dans cet arbre.

> Le DOM permet à JavaScript de "voir" et de modifier votre page HTML. Sans le DOM, JavaScript ne pourrait pas interagir avec les éléments de votre page.

**Structure du DOM :**
```html
<!DOCTYPE html>
<html>                    <!-- Nœud racine (parent de tout) -->
  <head>                  <!-- Enfant de html -->
    <title>Ma Page</title> <!-- Enfant de head -->
  </head>
  <body>                  <!-- Enfant de html, frère de head -->
    <div id="container">  <!-- Enfant de body -->
      <h1>Titre</h1>      <!-- Enfant de div -->
      <p class="text">Paragraphe</p> <!-- Frère de h1 -->
    </div>
  </body>
</html>
```

> Chaque élément HTML devient un objet JavaScript qu'on peut manipuler. C'est comme si votre page HTML était transformée en objets JavaScript que vous pouvez modifier en temps réel.

#### **3.2 Comment sélectionner des éléments ?**

Il existe plusieurs façons de sélectionner des éléments dans le DOM. Chaque méthode a ses avantages.

**Sélection par ID (le plus simple) :**
```javascript
// Sélection par ID (retourne UN élément ou null)
let element = document.getElementById('monId');
```

> `getElementById` est la méthode la plus rapide car l'ID doit être unique dans une page. Elle retourne soit l'élément, soit `null` si l'ID n'existe pas.

**Sélection par classe :**
```javascript
// Sélection par classe (retourne une liste)
let elements = document.getElementsByClassName('maClasse');
```

> `getElementsByClassName` retourne une collection d'éléments. Même s'il n'y a qu'un seul élément avec cette classe, vous obtenez une collection (un collection = un tableau, donc il faudra le parcourir pour accéder à chacun des éléments).

**Sélection par balise :**
```javascript
// Sélection par balise (retourne une HTMLCollection)
let paragraphes = document.getElementsByTagName('p');
```

> Cette méthode retourne tous les éléments d'un certain type (tous les `<p>`, toutes les `<div>`, tous les H1, etc ... de votre page web).

**Sélecteurs CSS modernes :**
```javascript
// Sélecteur CSS (retourne le PREMIER élément trouvé)
let premier = document.querySelector('.maClasse');
let premierParagraphe = document.querySelector('p');

// Sélecteur CSS (retourne TOUS les éléments - NodeList)
let tous = document.querySelectorAll('.maClasse');
let tousLesParagraphes = document.querySelectorAll('p');
```

> `querySelector` et `querySelectorAll` sont les méthodes les plus puissantes car elles utilisent la syntaxe CSS que vous connaissez déjà !

**Exemples pratiques :**
```javascript
let bouton = document.querySelector('#monBouton');
let tousLesBoutons = document.querySelectorAll('button');
let premierParagraphe = document.querySelector('.container > p');
```

#### **3.3 Comment modifier le contenu ?**

Une fois que vous avez sélectionné un élément, vous pouvez modifier son contenu de plusieurs façons.

**Modifier le texte :**
```javascript
let element = document.getElementById('monElement');

// Modifier le texte (sans HTML)
element.textContent = 'Nouveau texte';

// Modifier le HTML
element.innerHTML = '<strong>Texte en gras</strong>';

// Ajouter du HTML
element.innerHTML += '<br>Ligne supplémentaire';
```

> `textContent` est plus sûr car il traite tout comme du texte. `innerHTML` permet d'ajouter du HTML mais attention aux injections de code !

**Travailler avec les attributs :**
```javascript
// Obtenir/modifier les attributs
element.getAttribute('class');
element.setAttribute('data-info', 'valeur');
element.removeAttribute('style');
```

**Gérer les classes CSS :**
```javascript
// Classes CSS
element.classList.add('nouvelle-classe');
element.classList.remove('ancienne-classe');
element.classList.toggle('active');
element.classList.contains('ma-classe'); // true/false
```

> Si vous ajoutez des classes à vos éléments en Javascript et que les classes ont du style CSS, alors le style est automatiquement appliqué à vos éléménts.

#### **3.4 Comment créer de nouveaux éléments ?**

Parfois, vous voulez ajouter de nouveaux éléments à votre page au lieu de modifier ceux qui existent déjà.

**Créer un nouvel élément :**
```javascript
// Créer un nouvel élément
let nouveauParagraphe = document.createElement('p');
let nouveauBouton = document.createElement('button');
let nouvelleDiv = document.createElement('div');
```

> `createElement()` crée un nouvel élément HTML mais ne l'ajoute pas encore à la page. Il "flotte" en mémoire jusqu'à ce que vous l'ajoutiez quelque part.

**Ajouter du contenu à l'élément :**
```javascript
// Ajouter du texte
nouveauParagraphe.textContent = 'Ceci est un nouveau paragraphe';

// Ajouter du HTML
nouveauBouton.innerHTML = '<strong>Cliquez-moi</strong>';

// Ajouter des attributs
nouveauBouton.setAttribute('id', 'monBouton');
nouveauBouton.setAttribute('class', 'btn-primary');

// Ajouter des classes CSS
nouveauParagraphe.classList.add('important', 'nouveau');
```

**Ajouter l'élément à la page :**
```javascript
// Ajouter à la fin d'un élément parent
let container = document.getElementById('container');
container.appendChild(nouveauParagraphe);

// Ajouter à la fin du body
let body = document.body;
body.appendChild(nouveauParagraphe);

```

> `appendChild()` ajoute l'élément à la fin. D'autres fonctions existent comme `insertBefore()` qui vous permet de contrôler où l'élément sera placé, mais c'est des notions plus avancés. Dans tous les cas, vous retrouverez pleins d'exemples dans la doc Javascript !

**Supprimer des éléments :**
```javascript
// Supprimer un élément
let elementASupprimer = document.getElementById('aSupprimer');
elementASupprimer.remove();
```

**Exemple complet :**
```javascript
// Créer une nouvelle tâche
function creerNouvelleTache(texte) {
    // Créer l'élément
    let divTache = document.createElement('div');
    divTache.className = 'task';
    
    // Ajouter le contenu
    divTache.innerHTML = `
        <span>${texte}</span>
        <button class="supprimer-tache">Supprimer</button>
    `;
    
    // Ajouter à la liste
    document.getElementById('taskList').appendChild(divTache);
}
```

> Cette technique est très utile pour créer des interfaces dynamiques où le contenu change selon les actions de l'utilisateur.

On verra que c'est surtout très pratique quand on fait des appels à des APIs (prochain cours) pour afficher le résultat de l'API sur notre page HTML (on testera ça avec la création d'un pokédex)

#### **3.5 Comment réagir aux événements ?**

Les événements sont ce qui rend votre page interactive. Ils permettent de détecter quand l'utilisateur fait quelque chose.

**Événements de base :**
```javascript
// Types d'événements courants
element.addEventListener('click', function(event) {
    console.log('Élément cliqué!');
    console.log('Coordonnées:', event.clientX, event.clientY);
});

element.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});

element.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
```

> `this` fait référence à l'élément qui a déclenché l'événement. C'est très pratique pour modifier l'élément cliqué.

**Événements de formulaire :**
```javascript
// Événements de formulaire
input.addEventListener('input', function() {
    console.log('Valeur changée:', this.value);
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire
    console.log('Formulaire soumis');
});
```

> `event.preventDefault()` empêche le comportement par défaut (comme l'envoi d'un formulaire). C'est très utile pour gérer les formulaires en JavaScript.
