## 🌐 **SÉANCE 4 - Fetch API et Programmation Asynchrone**

### **Partie Théorique**

#### **4.1 Qu'est-ce qu'une API ?**

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

#### **4.2 Types d'APIs et formats de données**

**APIs REST (Representational State Transfer) :**
```javascript
// Exemple d'API REST
// GET https://api.meteo.com/v1/forecast?city=Paris
// POST https://api.users.com/v1/create
// PUT https://api.users.com/v1/update/123
// DELETE https://api.users.com/v1/delete/123
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
  "hobbies": ["lecture", "musique"],
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
  <hobbies>
    <hobby>lecture</hobby>
    <hobby>musique</hobby>
  </hobbies>
  <actif>true</actif>
</utilisateur>
```

> XML est plus verbeux que JSON mais très structuré. Il est encore utilisé dans certains systèmes.

#### **4.3 Spécificités des APIs REST**

**Verbes HTTP :**
```javascript
// GET : Récupérer des données
GET /api/users          // Récupérer tous les utilisateurs
GET /api/users/123      // Récupérer l'utilisateur avec l'ID 123

// POST : Créer de nouvelles données
POST /api/users         // Créer un nouvel utilisateur

// PUT : Modifier complètement une ressource
PUT /api/users/123      // Remplacer complètement l'utilisateur 123

// PATCH : Modifier partiellement une ressource
PATCH /api/users/123    // Modifier seulement certains champs

// DELETE : Supprimer des données
DELETE /api/users/123   // Supprimer l'utilisateur 123
```

**Codes de retour HTTP :**
```javascript
// 2xx : Succès
200 OK                 // Requête réussie
201 Created           // Ressource créée avec succès

// 4xx : Erreur côté client, il faut modifier la requête pour que ça fonctionne
400 Bad Request       // Requête mal formée
401 Unauthorized      // Non authentifié
403 Forbidden         // Non autorisé
404 Not Found         // Ressource non trouvée

// 5xx : Erreur côté serveur, là on peux rien faire. Si vous avez ce genre d'erreur en prod c'est RIP
500 Internal Server Error  // Erreur interne du serveur
503 Service Unavailable    // Service temporairement indisponible
```

> Les codes de retour permettent de savoir si la requête a réussi et de comprendre les erreurs éventuelles. Ils sont essentiels pour déboguer et gérer les erreurs dans vos applications. Par exemple, un code 404 vous indique que l'URL demandée n'existe pas, tandis qu'un code 500 signifie que le serveur a rencontré un problème interne.

**Tableau des verbes HTTP :**

| Qu'est-ce qu'on veut faire ? | Verbe HTTP associé |
|------------------------------|-------------------|
| Récupérer des données | GET |
| Créer de nouvelles données | POST |
| Modifier complètement une ressource | PUT |
| Modifier partiellement une ressource | PATCH |
| Supprimer des données | DELETE |

> Chaque verbe HTTP a une signification précise et ne doit être utilisé que pour l'action qu'il représente. Par exemple, on utilise toujours GET pour récupérer des données et jamais pour les modifier.

#### **4.4 Exemples d'APIs populaires**

**APIs gratuites pour débuter :**

1. **JSONPlaceholder** - API de test
   - URL : `https://jsonplaceholder.typicode.com`
   - Permet de tester avec des données fictives (posts, utilisateurs, photos)

2. **OpenWeatherMap** - Météo
   - URL : `https://openweathermap.org/api`
   - Donne accès aux prévisions météo du monde entier

3. **PokeAPI** - Pokémon
   - URL : `https://pokeapi.co`
   - Base de données complète sur tous les Pokémon

4. **The Movie Database (TMDB)** - Films et séries
   - URL : `https://www.themoviedb.org/documentation/api`
   - Informations sur films, acteurs, critiques

5. **GitHub API** - Code source
   - URL : `https://docs.github.com/en/rest`
   - Accès aux repositories, utilisateurs, commits

6. **NewsAPI** - Actualités
   - URL : `https://newsapi.org`
   - Articles d'actualité de différentes sources

7. **Unsplash API** - Images
   - URL : `https://unsplash.com/developers`
   - Photos de haute qualité gratuites

8. **JokeAPI** - Blagues
   - URL : `https://jokeapi.dev`
   - Blagues et devinettes en plusieurs langues

9. **Dog API** - Images de chiens
   - URL : `https://dog.ceo/dog-api`
   - Images aléatoires de chiens

10. **Cat API** - Images de chats
    - URL : `https://thecatapi.com`
    - Images et informations sur les chats

#### **4.5 Outils de test d'APIs**

Avant de commencer à coder votre application, il est essentiel de tester les APIs que vous allez utiliser. Les outils de test d'APIs vous permettent d'explorer les endpoints disponibles, de comprendre la structure des données retournées, et de vérifier que l'API fonctionne comme attendu. Cela vous évite de perdre du temps à coder contre une API qui ne répond pas, qui ne répond pas à votre problématique ou qui a changé de structure.

Ces outils offrent une interface graphique pour faire des requêtes HTTP, visualiser les réponses, et organiser vos tests. Ils sont particulièrement utiles pour :
- Découvrir les endpoints disponibles
- Tester différents paramètres et formats de données
- Vérifier les codes de retour et les messages d'erreur
- Sauvegarder vos requêtes pour les réutiliser
- Partager vos tests avec d'autres développeurs

**Postman :**
- Interface graphique complète
- Permet de créer des collections de requêtes
- Tests automatisés
- Documentation automatique

**Insomnia :**
- Interface moderne et intuitive
- Support GraphQL
- Synchronisation cloud
- Plugin GraphQL

**Bruno :**
- Interface simple et rapide
- Fichiers texte pour les requêtes
- Versioning avec Git
- Gratuit et open source

**Utilisation de Bruno :**

Téléchargez Bruno sur le site officiel
[https://www.usebruno.com/](https://www.usebruno.com/)

Après avoir téléchargé le logiciel, vous allez devoir créer une nouvelle collection (et l'enregistrer quelque part sur votre ordinateur) puis vous pourrez créer différentes requêtes pour tester votre API.

> Bruno est particulièrement recommandé pour débuter car il est simple et permet de sauvegarder les requêtes dans des fichiers texte. Contrairement à Postman qui stocke les données dans sa propre base, Bruno utilise des fichiers `.bru` que vous pouvez versionner avec Git (un outils pour travailler à plusieurs sur une application). Cela facilite le partage de vos tests avec votre équipe et vous garde le contrôle total sur vos données. De plus, Bruno est entièrement gratuit et open source, ce qui en fait un excellent choix pour les étudiants et les petits projets.

#### **4.6 Critères de choix d'une API**

**Pertinence :**
- L'API répond-elle à votre besoin ?
- Les données sont-elles à jour ?
- La documentation est-elle claire ?

**Facilité d'utilisation :**
- L'API est-elle gratuite pour commencer ?
- Y a-t-il des exemples de code ?
- La documentation est-elle en français ?

**Sécurité :**
- L'API utilise-t-elle HTTPS ?
- Y a-t-il une authentification ?
- Les données sont-elles sensibles ?

**Limitations :**
- Nombre de requêtes par jour/heure
- Taille des données retournées
- Vitesse de réponse

> Commencez toujours par des APIs gratuites et bien documentées pour apprendre.

#### **4.7 Programmation asynchrone**

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
// Résultat : 1, 3, 2
```

> Les requêtes API sont asynchrones car elles prennent du temps (réseau, serveur distant, quantité de donnée à récupérer).

#### **4.8 Les Promesses (Promises)**

Une promesse représente une valeur qui sera disponible dans le futur. Elle peut être dans 3 états :
- **Pending** : en cours d'exécution
- **Fulfilled** : réussie avec une valeur
- **Rejected** : échouée avec une erreur

> Les promesses sont comme un "contrat" : "Je te promets que je vais te donner une réponse, mais pas tout de suite". C'est très utile pour les opérations qui prennent du temps, comme récupérer des données depuis internet.

**Syntaxe de base :**
```javascript
// Créer une nouvelle promesse
let maPromesse = new Promise((resolve, reject) => {
    // Le code à l'intérieur de la promesse s'exécute immédiatement
    console.log("Début de la promesse");
    
    // Simuler une opération qui prend du temps (comme une requête API)
    setTimeout(() => {
        // Simuler un succès ou un échec aléatoire
        let succes = Math.random() > 0.5;
        
        if (succes) {
            // Si tout va bien, on "résout" la promesse avec une valeur
            resolve("Opération réussie !");
        } else {
            // Si ça ne va pas, on "rejette" la promesse avec une erreur
            reject("Erreur !");
        }
    }, 10000); // Attendre 10 secondes pour simuler une requête lente
});

> Dans le code di-dessus, la fonction setTimeout() permet de simuler une requête lente (qui va prendre 10 secondes à s'exectuer)

// Utilisation avec .then() et .catch()
maPromesse
    .then(resultat => {
        // Cette fonction s'exécute quand la promesse est résolue (succès)
        console.log("Succès:", resultat);
    })
    .catch(erreur => {
        // Cette fonction s'exécute quand la promesse est rejetée (il y a eu une erreur)
        console.log("Erreur:", erreur);
    });
```

> Dans le code ci-dessus, la fonction `setTimeout()` permet de simuler une requête lente (qui va prendre 10 secondes à s'exécuter). En réalité, ce serait une requête vers une API qui prend du temps à répondre.

#### **4.9 Syntaxe async/await**

`async/await` est une syntaxe plus moderne et plus lisible pour gérer les promesses. Elle rend le code asynchrone aussi facile à lire que du code synchrone.

> `async/await` est comme une "traduction" des promesses en code plus simple à comprendre. Au lieu d'utiliser `.then()` et `.catch()`, on utilise des mots-clés qui ressemblent à du code normal.

**Fonction async :**
```javascript
// Le mot-clé 'async' transforme automatiquement la fonction en promesse
async function recupererDonnees() {
    try {
        // 'await' attend que la promesse soit résolue avant de continuer
        console.log("Début de la récupération des données");
        
        // Simuler une requête API
        let reponse = await fetch('https://api.exemple.com/data');
        
        // Vérifier si la requête a réussi
        if (!reponse.ok) {
            throw new Error(`Erreur HTTP: ${reponse.status}`);
        }
        
        // Convertir la réponse en JSON (c'est aussi une promesse)
        let donnees = await reponse.json();
        
        console.log("Données récupérées avec succès");
        return donnees; // Retourner les données
        
    } catch (erreur) {
        // Si une erreur survient, on arrive ici
        console.log("Erreur lors de la récupération:", erreur.message);
    }
}
```

> `async` transforme automatiquement la fonction en promesse. `await` attend que la promesse soit résolue. C'est comme dire "attends que cette opération soit finie avant de continuer".

**Utilisation :**
```javascript
// Appel d'une fonction async avec .then() et .catch()
recupererDonnees()
    .then(donnees => {
        console.log("Données reçues:", donnees);
        // Traiter les données ici
    })
    .catch(erreur => {
        console.log("Erreur:", erreur);
        // Gérer l'erreur ici
    });

// Ou dans une autre fonction async (plus propre)
async function main() {
    try {
        console.log("Début du programme");
        
        // Attendre que les données soient récupérées
        let donnees = await recupererDonnees();
        
        console.log("Données reçues:", donnees);
        // Traiter les données ici
        
    } catch (erreur) {
        console.log("Erreur dans le programme principal:", erreur);
        // Gérer l'erreur ici
    }
}

// Lancer le programme principal
main();
```

> Avec `async/await`, le code ressemble beaucoup plus à du code normal. On peut utiliser `try/catch` comme pour gérer les erreurs normales.

#### **4.10 Fetch API**

`fetch()` est la méthode moderne pour faire des requêtes HTTP en JavaScript. Elle remplace l'ancienne méthode `XMLHttpRequest` et est beaucoup plus simple à utiliser.

> `fetch()` est comme un "messager" qui va chercher des données sur internet et vous les rapporte. C'est la façon moderne de communiquer avec les APIs.

**Requête GET simple :**
```javascript
// Faire une requête vers une API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(reponse => {
        // Vérifier si la requête a réussi
        console.log("Statut de la réponse:", reponse.status);
        console.log("Headers de la réponse:", reponse.headers);
        
        if (!reponse.ok) {
            // Si la réponse n'est pas OK (200-299), c'est une erreur
            throw new Error('Erreur HTTP: ' + reponse.status);
        }
        
        // Convertir la réponse en JSON (c'est une promesse)
        return reponse.json();
    })
    .then(donnees => {
        // Les données sont maintenant disponibles
        console.log("Post récupéré:", donnees);
        console.log("Titre du post:", donnees.title);
        console.log("Contenu du post:", donnees.body);
    })
    .catch(erreur => {
        // Gérer les erreurs (réseau, serveur, etc.)
        console.log("Erreur lors de la requête:", erreur.message);
    });
```

> `fetch()` retourne toujours une promesse. Même si la requête échoue, `fetch()` ne lance pas d'erreur - il faut vérifier `reponse.ok` pour savoir si tout s'est bien passé.

**Avec async/await :**
```javascript
async function recupererPost(id) {
    try {
        console.log(`Récupération du post numéro ${id}...`);
        
        // Faire la requête et attendre la réponse
        let reponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        // Vérifier si la requête a réussi
        if (!reponse.ok) {
            // Créer un message d'erreur plus précis selon le code de statut
            if (reponse.status === 404) {
                throw new Error(`Le post ${id} n'existe pas`);
            } else if (reponse.status === 500) {
                throw new Error('Erreur du serveur');
            } else {
                throw new Error(`Erreur ${reponse.status}: ${reponse.statusText}`);
            }
        }
        
        // Convertir la réponse en JSON
        let post = await reponse.json();
        
        console.log("Post récupéré avec succès");
        return post;
        
    } catch (erreur) {
        console.log("Erreur lors de la récupération du post:", erreur.message);
        throw erreur; // Relancer l'erreur pour que l'appelant puisse la gérer
    }
}

// Utilisation de la fonction
recupererPost(1)
    .then(post => {
        console.log("Voici le post:", post);
    })
    .catch(erreur => {
        console.log("Impossible de récupérer le post:", erreur.message);
    });
```

> Avec `async/await`, le code est plus lisible et plus facile à déboguer. On peut gérer les erreurs de façon plus précise.

**Requête POST (envoyer des données) :**
```javascript
async function creerPost(titre, contenu) {
    try {
        console.log("Création d'un nouveau post...");
        
        // Préparer les données à envoyer
        let donneesPost = {
            title: titre,        // Titre du post
            body: contenu,       // Contenu du post
            userId: 1            // ID de l'utilisateur qui crée le post
        };
        
        // Faire une requête POST avec les données
        let reponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',  // Méthode HTTP : POST pour créer
            headers: {
                'Content-Type': 'application/json'  // Dire au serveur qu'on envoie du JSON
            },
            body: JSON.stringify(donneesPost)  // Convertir l'objet en chaîne JSON
        });
        
        // Vérifier si la création a réussi
        if (!reponse.ok) {
            throw new Error(`Erreur lors de la création: ${reponse.status}`);
        }
        
        // Récupérer le post créé (avec son ID généré par le serveur)
        let nouveauPost = await reponse.json();
        
        console.log("Post créé avec succès:", nouveauPost);
        return nouveauPost;
        
    } catch (erreur) {
        console.log("Erreur lors de la création du post:", erreur.message);
        throw erreur;
    }
}

// Utilisation
creerPost("Mon premier post", "Voici le contenu de mon post")
    .then(post => {
        console.log("Nouveau post créé avec l'ID:", post.id);
    })
    .catch(erreur => {
        console.log("Impossible de créer le post:", erreur.message);
    });
```

> Pour les requêtes POST, on doit spécifier la méthode, les headers (pour dire quel type de données on envoie), et le body (les données à envoyer).

#### **4.11 Traitement des données récupérées**

Une fois les données récupérées depuis une API, il faut les traiter et les afficher de façon utile pour l'utilisateur.

> Récupérer des données depuis une API n'est que la première étape. Ensuite, il faut les transformer, les filtrer, les afficher, etc. C'est comme recevoir des ingrédients, après il faut encore cuisiner le plat !

**Affichage dans le DOM :**
```javascript
async function afficherPosts() {
    try {
        console.log("Récupération des posts...");
        
        // Récupérer tous les posts depuis l'API
        let reponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!reponse.ok) {
            throw new Error(`Erreur HTTP: ${reponse.status}`);
        }
        
        // Convertir la réponse en tableau d'objets
        let posts = await reponse.json();
        
        console.log(`${posts.length} posts récupérés`);
        
        // Trouver le conteneur où afficher les posts
        let container = document.getElementById('posts-container');
        
        // Vider le conteneur avant d'ajouter de nouveaux éléments
        container.innerHTML = '';
        
        // Parcourir chaque post et créer un élément HTML pour l'afficher
        posts.forEach((post, index) => {
            // Créer un nouvel élément article
            let article = document.createElement('article');
            
            // Ajouter du contenu HTML à l'article
            article.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <small>Post ID: ${post.id}</small>
                <hr>
            `;
            
            // Ajouter l'article au conteneur
            container.appendChild(article);
            
            console.log(`Post ${index + 1} affiché`);
        });
        
        console.log("Tous les posts ont été affichés");
        
    } catch (erreur) {
        console.log("Erreur lors de l'affichage des posts:", erreur.message);
        
        // Afficher un message d'erreur à l'utilisateur
        let container = document.getElementById('posts-container');
        container.innerHTML = `<div class="error">Erreur: ${erreur.message}</div>`;
    }
}
```

> Cette fonction récupère des données depuis une API et les affiche dans la page web. C'est un exemple classique d'utilisation d'API.

**Création d'éléments dynamiques :**
```javascript
function creerCartePokemon(pokemon) {
    // Créer un élément div pour représenter la carte du Pokémon
    let carte = document.createElement('div');
    carte.className = 'pokemon-card';  // Ajouter une classe CSS pour le style
    
    // Préparer les types du Pokémon (un Pokémon peut avoir plusieurs types)
    let types = pokemon.types.map(type => type.type.name).join(', ');
    
    // Créer le contenu HTML de la carte
    carte.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-image">
        <h3>${pokemon.name.toUpperCase()}</h3>
        <p><strong>Type:</strong> ${types}</p>
        <p><strong>Hauteur:</strong> ${pokemon.height/10}m</p>
        <p><strong>Poids:</strong> ${pokemon.weight/10}kg</p>
        <p><strong>Numéro:</strong> #${pokemon.id}</p>
    `;
    
    return carte;  // Retourner l'élément créé
}

async function afficherPokemon(id) {
    try {
        console.log(`Récupération du Pokémon numéro ${id}...`);
        
        // Récupérer les données du Pokémon depuis l'API
        let reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (!reponse.ok) {
            throw new Error(`Pokémon non trouvé (${reponse.status})`);
        }
        
        let pokemon = await reponse.json();
        console.log("Pokémon récupéré:", pokemon.name);
        
        // Trouver le conteneur où afficher le Pokémon
        let container = document.getElementById('pokemon-container');
        
        // Créer la carte du Pokémon
        let carte = creerCartePokemon(pokemon);
        
        // Ajouter la carte au conteneur
        container.appendChild(carte);
        
        console.log("Pokémon affiché avec succès");
        
    } catch (erreur) {
        console.log("Erreur lors de l'affichage du Pokémon:", erreur.message);
        
        // Afficher un message d'erreur
        let container = document.getElementById('pokemon-container');
        container.innerHTML = `<div class="error">Erreur: ${erreur.message}</div>`;
    }
}
```

> Cette fonction crée des éléments HTML dynamiquement basés sur les données reçues de l'API. C'est très utile pour créer des interfaces qui s'adaptent aux données.

> L'affichage d'un icone/texte de chargement est très importante pour l'expérience utilisateur. L'utilisateur doit savoir que quelque chose se passe et ne pas penser que l'application est cassée.
