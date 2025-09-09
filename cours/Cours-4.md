## 🌐 **SÉANCE 4 - DOM API avancée et événements**

### **Partie Théorique**

#### **4.1 Gestion avancée des événements**

Les événements permettent de créer des interfaces vraiment interactives. Nous allons approfondir leur utilisation.

**Types d'événements courants :**
```javascript
// Événements de souris
element.addEventListener('click', function() {
    console.log('Clic simple');
});

element.addEventListener('dblclick', function() {
    console.log('Double-clic');
});

element.addEventListener('mouseover', function() {
    console.log('Souris entre dans la zone');
});

element.addEventListener('mouseout', function() {
    console.log('Souris sort de la zone');
});

element.addEventListener('mousedown', function() {
    console.log('Bouton de souris pressé');
});

element.addEventListener('mouseup', function() {
    console.log('Bouton de souris relâché');
});
```

**Événements de clavier :**
```javascript
// Événements de clavier
document.addEventListener('keydown', function(event) {
    console.log('Touche pressée:', event.key);
    console.log('Code de la touche:', event.keyCode);
});

document.addEventListener('keyup', function(event) {
    console.log('Touche relâchée:', event.key);
});

// Vérifier des combinaisons de touches
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Empêcher la sauvegarde du navigateur
        console.log('Ctrl+S détecté !');
    }
});
```

**Événements de formulaire :**
```javascript
// Événements de formulaire
let input = document.getElementById('monInput');
let form = document.getElementById('monForm');

input.addEventListener('input', function() {
    console.log('Valeur changée:', this.value);
});

input.addEventListener('focus', function() {
    console.log('Champ sélectionné');
    this.style.border = '2px solid blue';
});

input.addEventListener('blur', function() {
    console.log('Champ déselectionné');
    this.style.border = '1px solid gray';
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi normal
    console.log('Formulaire soumis');
});
```

#### **4.2 L'objet Event**

Chaque événement fournit un objet `event` qui contient des informations utiles.

```javascript
element.addEventListener('click', function(event) {
    // Informations sur l'événement
    console.log('Type d\'événement:', event.type);
    console.log('Élément ciblé:', event.target);
    console.log('Élément actuel:', event.currentTarget);
    
    // Position de la souris
    console.log('Position X:', event.clientX);
    console.log('Position Y:', event.clientY);
    
    // Touches modificatrices
    console.log('Ctrl pressé:', event.ctrlKey);
    console.log('Shift pressé:', event.shiftKey);
    console.log('Alt pressé:', event.altKey);
    
    // Empêcher le comportement par défaut
    event.preventDefault();
    
    // Empêcher la propagation
    event.stopPropagation();
});
```

#### **4.3 Propagation des événements (avancé)**

Les événements "remontent" dans l'arbre DOM depuis l'élément ciblé vers ses parents.

```javascript
// HTML : <div id="parent"><button id="enfant">Cliquez</button></div>

let parent = document.getElementById('parent');
let enfant = document.getElementById('enfant');

parent.addEventListener('click', function() {
    console.log('Clic sur le parent');
});

enfant.addEventListener('click', function(event) {
    console.log('Clic sur l\'enfant');
    
    // Empêcher la propagation vers le parent
    event.stopPropagation();
});
```

#### **4.4 Délégation d'événements (avancé)**

Technique avancée pour gérer les événements sur des éléments créés dynamiquement.

```javascript
// Au lieu d'ajouter un événement à chaque bouton
let container = document.getElementById('container');

container.addEventListener('click', function(event) {
    // Vérifier si l'élément cliqué est un bouton
    if (event.target.tagName === 'BUTTON') {
        console.log('Bouton cliqué:', event.target.textContent);
        
        // Ou vérifier par classe
        if (event.target.classList.contains('delete-btn')) {
            // Supprimer l'élément parent
            event.target.parentElement.remove();
        }
    }
});
```

#### **4.5 localStorage et sessionStorage**

localStorage et sessionStorage sont deux mécanismes de stockage côté client qui permettent de sauvegarder des données dans le navigateur. La principale différence entre les deux réside dans la durée de vie des données stockées.

**localStorage** : Les données stockées dans localStorage sont persistantes, c'est-à-dire qu'elles ne sont pas supprimées lorsque le navigateur est fermé. Elles restent disponibles jusqu'à ce qu'elles soient explicitement supprimées par le code JavaScript ou par l'utilisateur. C'est idéal pour stocker des préférences utilisateur ou des données qui doivent être disponibles même après la fermeture du navigateur.

**sessionStorage** : Les données stockées dans sessionStorage sont temporaires et ne persistent que pour la durée de la session de navigation. Elles sont supprimées dès que l'onglet ou la fenêtre du navigateur est fermé. C'est utile pour stocker des informations qui ne sont nécessaires que pendant la session en cours, comme un jeton d'authentification temporaire.

**Cas d'utilisation :**

- **localStorage ((permanent)** : 
  - Sauvegarder les préférences de l'utilisateur, comme le thème choisi (clair ou sombre).
  - Stocker des données de formulaire pour les remplir automatiquement lors de la prochaine visite.
  - Conserver l'état d'une application web entre les sessions.

```javascript
// Sauvegarder des données
localStorage.setItem('nom', 'Alice');
localStorage.setItem('age', '25');

// Sauvegarder un objet (il faut le convertir en JSON)
let utilisateur = { nom: 'Bob', age: 30 };
localStorage.setItem('utilisateur', JSON.stringify(utilisateur));

// Récupérer des données
let nom = localStorage.getItem('nom');
let age = localStorage.getItem('age');

// Récupérer un objet
let utilisateurStr = localStorage.getItem('utilisateur');
let utilisateur = JSON.parse(utilisateurStr);

// Supprimer des données
localStorage.removeItem('nom');

// Tout supprimer
localStorage.clear();
```

- **sessionStorage (temporaire)** :
  - Stocker un jeton d'authentification pour une session sécurisée.
  - Garder des données temporaires qui ne doivent pas être partagées entre les onglets.
  - Suivre l'état de navigation ou les étapes d'un formulaire multi-pages dans un seul onglet.

```javascript
// Même syntaxe que localStorage mais les données disparaissent à la fermeture de l'onglet
sessionStorage.setItem('token', 'abc123');
let token = sessionStorage.getItem('token');
```

#### **4.6 Validation de formulaires avancée**

Techniques pour valider les formulaires côté client.

```javascript
function validerEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validerTelephone(telephone) {
    let regex = /^(\+33|0)[1-9](\d{8})$/;
    return regex.test(telephone);
}

function validerMotDePasse(motDePasse) {
    // Au moins 8 caractères, une majuscule, une minuscule, un chiffre
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(motDePasse);
}

// Validation en temps réel
let emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
    let valide = validerEmail(this.value);
    
    if (valide) {
        this.classList.remove('error'); // la classe error affiche les contours du champs en rouge
        this.classList.add('success'); // et success en vert
    } else {
        this.classList.remove('success');
        this.classList.add('error');
    }
});
```
