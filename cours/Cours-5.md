## 🌐 **SÉANCE 5 - Introduction aux API REST et programmation asynchrone**

### **Partie Théorique**

#### **5.1 Qu'est-ce qu'une API ?**

Une API (Application Programming Interface) est un ensemble de règles et de protocoles qui permettent à différents logiciels de communiquer entre eux. C'est comme un "menu" qui définit ce qu'on peut demander à un service.

> Une API permet à votre application JavaScript de récupérer des données depuis un serveur distant, comme obtenir la météo, des informations sur des films, ou des données d'utilisateurs.

**Exemples d'utilisation quotidienne :**
- Applications météo qui récupèrent les prévisions
- Sites e-commerce qui affichent les prix en temps réel
- Applications de transport qui montrent les horaires de bus
- Réseaux sociaux qui chargent les posts des amis

**Qui utilise les APIs ?**
- Développeurs web pour créer des sites dynamiques
- Applications mobiles pour récupérer des données
- Entreprises pour partager leurs services
- Services gouvernementaux pour diffuser des informations publiques

#### **5.2 Types d'APIs et formats de données**

**APIs REST (Representational State Transfer) :**
```javascript
// Exemple d'API REST
// GET https://api.meteo.com/v1/meteo?ville=Paris
// POST https://api.facebook.com/v1/create
// PUT https://api.facebook.com/v1/update/123
// DELETE https://api.facebook.com/v1/delete/123
```

> REST est le type d'API le plus courant. Il utilise les verbes HTTP (GET, POST, PUT, DELETE) pour définir les actions.

**APIs GraphQL :**
```javascript
// Exemple de requête GraphQL
query {
  user(id: 123) {
    name
    email
    posts {
      title
      content
    }
  }
}
```

> GraphQL permet de demander exactement les données dont on a besoin, évitant de récupérer trop ou trop peu d'informations.

**Formats de données :**

**JSON (JavaScript Object Notation) :**
```javascript
{
  "nom": "Alice",
  "age": 25,
  "ville": "Paris",
  "passions": ["lecture", "musique"],
  "actif": true
}
```

> JSON est le format le plus utilisé car il est facile à lire et à manipuler en JavaScript.

**XML (eXtensible Markup Language) :**
```xml
<utilisateur>
  <nom>Alice</nom>
  <age>25</age>
  <ville>Paris</ville>
  <passions>
    <passion>lecture</passion>
    <passion>musique</passion>
  </passions>
  <actif>true</actif>
</utilisateur>
```

> XML est plus verbeux que JSON mais très structuré. Il est encore utilisé dans certains systèmes.

#### **5.3 Spécificités des APIs REST**

**Verbes HTTP et leur utilisation :**

| Verbe HTTP | Utilisation | Exemple |
|------------|-------------|---------|
| **GET** | Récupérer des données | `GET /api/users` - Récupérer tous les utilisateurs |
| **POST** | Créer de nouvelles données | `POST /api/users` - Créer un nouvel utilisateur |
| **PUT** | Modifier complètement une ressource | `PUT /api/users/123` - Remplacer l'utilisateur 123 |
| **PATCH** | Modifier partiellement une ressource | `PATCH /api/users/123` - Modifier certains champs |
| **DELETE** | Supprimer des données | `DELETE /api/users/123` - Supprimer l'utilisateur 123 |

**Codes de retour HTTP :**

| Code | Signification | Explication |
|------|---------------|-------------|
| **200** | OK | Requête réussie |
| **201** | Created | Ressource créée avec succès |
| **400** | Bad Request | Requête mal formée |
| **401** | Unauthorized | Non authentifié |
| **403** | Forbidden | Non autorisé |
| **404** | Not Found | Ressource non trouvée |
| **500** | Internal Server Error | Erreur interne du serveur |
| **503** | Service Unavailable | Service temporairement indisponible |

> Les codes de retour permettent de savoir si la requête a réussi et de comprendre les erreurs éventuelles.

#### **5.4 Exemples d'APIs populaires pour débuter**

**APIs gratuites et bien documentées :**

1. **JSONPlaceholder** - API de test
   - URL : `https://jsonplaceholder.typicode.com`
   - Permet de tester avec des données fictives (posts, utilisateurs, photos)

2. **PokeAPI** - Pokémon
   - URL : `https://pokeapi.co`
   - Base de données complète sur tous les Pokémon

3. **OpenWeatherMap** - Météo
   - URL : `https://openweathermap.org/api`
   - Donne accès aux prévisions météo du monde entier

4. **The Movie Database (TMDB)** - Films et séries
   - URL : `https://www.themoviedb.org/documentation/api`
   - Informations sur films, acteurs, critiques

5. **JokeAPI** - Blagues
   - URL : `https://jokeapi.dev`
   - Blagues et devinettes en plusieurs langues

6. **Tyradex** - API Pokémon français
   - URL : `https://tyradex.vercel.app/docs`
   - API française avec des données Pokémon complètes

#### **5.5 Programmation asynchrone**

**Qu'est-ce que l'asynchrone ?**

En programmation synchrone, le code s'exécute ligne par ligne, attendant que chaque opération soit terminée avant de passer à la suivante.

```javascript
// Code synchrone
console.log("1. Début");
let resultat = operationLente(); // Le programme attend ici
console.log("2. Fin");
```

En programmation asynchrone, le code peut continuer à s'exécuter pendant qu'une opération se fait en arrière-plan.

```javascript
// Code asynchrone
console.log("1. Début");
operationLente().then(resultat => {
    console.log("2. Opération terminée");
});
console.log("3. Fin");
// Résultat affiché : 1, 3, 2
```

> Les requêtes API sont asynchrones car elles prennent du temps (réseau, serveur distant, quantité de données à récupérer).

#### **5.6 Les Promesses (Promises)**

Une promesse représente une valeur qui sera disponible dans le futur. Elle peut être dans 3 états :
- **Pending** : en cours d'exécution
- **Fulfilled** : réussie avec une valeur
- **Rejected** : échouée avec une erreur

> Les promesses sont comme un "contrat" : "Je te promets que je vais te donner une réponse, mais pas tout de suite".

**Syntaxe de base :**
```javascript
// Créer une nouvelle promesse
let maPromesse = new Promise((resolve, reject) => {
    console.log("Début de la promesse");
    
    // Simuler une opération qui prend du temps
    setTimeout(() => {
        let succes = Math.random() > 0.5;
        
        if (succes) {
            resolve("Opération réussie !");
        } else {
            reject("Erreur !");
        }
    }, 2000); // Attendre 2 secondes
});

// Utilisation avec .then() et .catch()
maPromesse
    .then(resultat => {
        console.log("Succès:", resultat);
    })
    .catch(erreur => {
        console.log("Erreur:", erreur);
    });
```

#### **5.7 Syntaxe async/await**

`async/await` est une syntaxe plus moderne et plus lisible pour gérer les promesses.

```javascript
// Fonction async
async function recupererDonnees() {
    try {
        console.log("Début de la récupération des données");
        
        // 'await' attend que la promesse soit résolue
        let reponse = await fetch('https://api.exemple.com/data');
        
        if (!reponse.ok) {
            throw new Error(`Erreur HTTP: ${reponse.status}`);
        }
        
        let donnees = await reponse.json();
        console.log("Données récupérées avec succès");
        return donnees;
        
    } catch (erreur) {
        console.log("Erreur:", erreur.message);
        throw erreur;
    }
}

// Utilisation
async function main() {
    try {
        let donnees = await recupererDonnees();
        console.log("Données reçues:", donnees);
    } catch (erreur) {
        console.log("Erreur dans le programme principal:", erreur);
    }
}

main();
```

#### **5.8 Fetch API - Requêtes GET**

`fetch()` est la méthode moderne pour faire des requêtes HTTP en JavaScript.

**Requête GET simple :**
```javascript
// Faire une requête vers une API
async function recupererArticle(id) {
    try {
        console.log(`Récupération de l'article numéro ${id}...`);
        
        let reponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!reponse.ok) {
            if (reponse.status === 404) {
                throw new Error(`L'article ${id} n'existe pas`);
            } else {
                throw new Error(`Erreur ${reponse.status}: ${reponse.statusText}`);
            }
        }
        
        let article = await reponse.json();
        console.log("Article récupéré avec succès");
        return article;
        
    } catch (erreur) {
        console.log("Erreur:", erreur.message);
        throw erreur;
    }
}

// Utilisation
recupererArticle(1)
    .then(article => {
        console.log("Voici l'article:", article);
        console.log("Titre:", article.title);
        console.log("Contenu:", article.body);
    })
    .catch(erreur => {
        console.log("Impossible de récupérer le article:", erreur.message);
    });
```

#### **5.9 Traitement et affichage des données**

Une fois les données récupérées, il faut les traiter et les afficher.

**Affichage dans le DOM :**
```javascript
async function afficherPosts() {
    try {
        // Afficher un indicateur de chargement
        let container = document.getElementById('posts-container');
        container.innerHTML = '<div class="loading">Chargement des posts...</div>';
        
        // Récupérer les posts
        let posts = await recupererTousLesPosts();
        
        // Vider le conteneur
        container.innerHTML = '';
        
        // Afficher chaque post
        posts.forEach((post, index) => {
            let article = document.createElement('article');
            article.className = 'post';
            
            article.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <small>Post ID: ${post.id} | User ID: ${post.userId}</small>
            `;
            
            container.appendChild(article);
        });
        
        console.log("Tous les posts ont été affichés");
        
    } catch (erreur) {
        console.log("Erreur lors de l'affichage:", erreur.message);
        
        // Afficher un message d'erreur à l'utilisateur
        let container = document.getElementById('posts-container');
        container.innerHTML = `
            <div class="error">
                <h3>Erreur de chargement</h3>
                <p>${erreur.message}</p>
                <button onclick="afficherPosts()">Réessayer</button>
            </div>
        `;
    }
}
```

#### **5.11 Bonnes pratiques**

**Gestion des erreurs :**
```javascript
async function maFonctionQuiFaitMaRequete(url) {
    try {
        let reponse = await fetch(url);
        
        // Vérifier le statut de la réponse
        if (!reponse.ok) {
            // Créer un message d'erreur spécifique selon le code
            let message;
            switch (reponse.status) {
                case 404:
                    message = "Ressource non trouvée";
                    break;
                case 500:
                    message = "Erreur du serveur";
                    break;
                case 503:
                    message = "Service temporairement indisponible";
                    break;
                default:
                    message = `Erreur ${reponse.status}: ${reponse.statusText}`;
            }
            throw new Error(message);
        }
        
        return await reponse.json();
        
    } catch (erreur) {
        // Distinguer les erreurs de réseau des erreurs HTTP
        if (erreur.name === 'TypeError') {
            throw new Error("Problème de connexion réseau");
        } else {
            throw erreur; // Relancer l'erreur HTTP
        }
    }
}
```

> La programmation asynchrone et les APIs sont des concepts fondamentaux du développement web moderne. Ils permettent de créer des applications dynamiques et interactives. Combinés avec l'API du DOM, les données récupérées par l'API peuvent ainsi être affichés sur vos pages web. 

```javascript
// Exemple simple avec des posts
async function afficherPosts() {
    try {
        const url = 'https://exemple.com/api/posts';
        const posts = await maFonctionQuiFaitMaRequete(url);
        
        const container = document.getElementById('postsContainer');
        container.innerHTML = '';
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.titre}</h2>
                <p>${post.contenu}</p>
            `;
            container.appendChild(postElement);
        });
    } catch (erreur) {
        console.error(erreur.message);
    }
}

// Exemple de réponse de l'API (https://exemple.com/api/posts)
// [
//     { "titre": "Premier Post", "contenu": "Ceci est le contenu du premier post." },
//     { "titre": "Deuxième Post", "contenu": "Ceci est le contenu du deuxième post." }
// ]
```

// Le code ci-dessus définit une fonction asynchrone `afficherPosts` qui récupère des données d'une API et les affiche sur une page web. Elle utilise `maFonctionQuiFaitMaRequete` pour obtenir les posts depuis l'URL spécifiée. Les posts sont ensuite ajoutés dynamiquement à un conteneur HTML avec l'ID `postsContainer`, chaque post étant représenté par un élément `div` contenant un titre et un contenu. En cas d'erreur, un message d'erreur est affiché dans la console.

