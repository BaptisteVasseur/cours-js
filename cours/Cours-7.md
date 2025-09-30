## 🔐 **SÉANCE 7 - API privées, authentification et concepts stateless/stateful**

### **Partie Théorique**

#### **7.1 API publiques vs API privées**

Jusqu'à présent, nous avons utilisé des API publiques librement accessibles. Il existe différents types d'API selon leur niveau d'accès.

**Classification des APIs :**

| Type d'API | Accès | Authentification | Exemples |
|------------|-------|------------------|----------|
| **Publique** | Libre | Aucune | PokeAPI, OpenData |
| **Freemium** | Limitée | Clé API | OpenWeatherMap, Unsplash |
| **Privée** | Restreinte | Token/OAuth | APIs bancaires, réseaux sociaux |
| **Interne** | Organisation | Authentification forte | APIs d'entreprise |

#### **7.2 Méthodes d'authentification**

**7.2.1 API Keys (Clés d'API)**

Les clés d'API sont des identifiants uniques qui permettent de vous identifier auprès du service.

```javascript
// Utilisation d'une clé API dans l'URL
const API_KEY = 'votre-cle-api-ici';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${API_KEY}`;

let reponse = await fetch(url);
let data = await reponse.json();
console.log(data);
```

```javascript
// Utilisation d'une clé API dans les headers (plus sécurisé)
const API_KEY = 'votre-cle-api-ici';

let reponse = await fetch('https://api.exemple.com/data', {
    headers: {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json'
    }
});

let data = await reponse.json();
```

> **Sécurité :** Ne jamais exposer les clés API dans le code côté client ! Utilisez des variables d'environnement ou un serveur proxy.

**7.2.2 Tokens Bearer**

Les tokens Bearer sont des chaînes de caractères qui prouvent votre identité.

```javascript
// 1. Connexion pour obtenir un token
let reponse = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        email: 'user@example.com', 
        password: 'motdepasse' 
    })
});

let data = await reponse.json();
let token = data.token; // Le serveur nous renvoie un token

// Sauvegarder le token
localStorage.setItem('authToken', token);
```

Le principe est que le token d'authentification peut être obtenu de deux façons principales. 
Premièrement, il peut être fourni par le serveur lors de l'appel à l'API de connexion. 
Dans ce cas, le serveur génère un token unique pour l'utilisateur après vérification de ses identifiants. Deuxièmement, le token peut être fourni directement par un site sous forme de clé privée. Cette clé est souvent utilisée pour accéder à des API tierces et doit être protégée pour éviter tout accès non autorisé.


```javascript
// 2. Utiliser le token pour accéder à des données protégées
let token = localStorage.getItem('authToken');

let reponse = await fetch('/api/user/profile', {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});

if (reponse.status === 401) {
    console.log('Token expiré, redirection vers la connexion');
    // Rediriger vers la page de connexion
}

let profile = await reponse.json();
```
**7.2.3 JWT (JSON Web Tokens) (avancé)**

Les JWT contiennent des informations sur l'utilisateur et ont une durée de vie limitée.

```javascript
// Un JWT ressemble à ça : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

// Les JWT (JSON Web Tokens) sont similaires aux tokens Bearer, mais ils contiennent des informations supplémentaires encodées, comme l'identité de l'utilisateur et des métadonnées. Ils sont utilisés pour authentifier les utilisateurs de manière sécurisée.

let jwt = localStorage.getItem('jwtToken');

let reponse = await fetch('/api/user/data', {
    headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json'
    }
});

if (reponse.status === 401) {
    console.log('JWT expiré, redirection vers la connexion');
    // Rediriger vers la page de connexion
}

let userData = await reponse.json();


```

#### **7.3 OAuth 2.0 - Authentification déléguée (avancé)**

OAuth 2.0 est un protocole d'autorisation qui permet aux utilisateurs de se connecter à des applications tierces en utilisant leurs comptes existants sur des plateformes comme Google, Facebook ou GitHub. Cela simplifie le processus d'authentification en évitant de créer un nouveau système de gestion des utilisateurs. En utilisant OAuth, les applications peuvent accéder aux informations des utilisateurs de manière sécurisée sans avoir besoin de stocker leurs identifiants.

// Vous avez déjà utilisé ces systèmes quand vous vous connectez avec Google sur un site, quand vous appuyez sur "se connecter avec Apple" ...



#### **7.4 API Stateless vs Stateful**

**7.4.1 API Stateless**

Dans une architecture stateless, le serveur ne garde aucune information sur les sessions clients.

```javascript
// Exemple d'API Stateless : le token doit être envoyé à chaque requête

let token = localStorage.getItem('authToken');

// Requête 1
let reponse1 = await fetch('/api/users/123', {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});

// Requête 2 - même token nécessaire
let reponse2 = await fetch('/api/users/123', {
    method: 'PUT',
    headers: {
        'Authorization': `Bearer ${token}`, // Token obligatoire !
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Nouveau nom' })
});
```

**Avantages du Stateless :**
- **Scalabilité** : Facile d'ajouter des serveurs
- **Simplicité** : Pas de gestion de session côté serveur
- **Fiabilité** : Pas de perte de session en cas de redémarrage

**7.4.2 API Stateful**

Dans une architecture stateful, le serveur maintient l'état des sessions.

```javascript
// Exemple d'API Stateful : le serveur se souvient de votre session

// 1. Connexion
let reponse = await fetch('/api/auth/login', {
    method: 'POST',
    credentials: 'include', // Important pour les cookies
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'user@example.com', password: 'pass' })
});

// 2. Requêtes suivantes - pas besoin de token
let profile = await fetch('/api/user/profile', {
    credentials: 'include' // Le serveur reconnaît la session via les cookies
});

// 3. Déconnexion
await fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include'
});
```

**Avantages du Stateful :**
- **Sécurité** : Plus difficile à pirater (sessions côté serveur)
- **Contrôle** : Le serveur peut terminer les sessions
- **Simplicité client** : Moins de gestion côté client

#### **7.5 Bonnes pratiques de sécurité**

**7.5.1 Stockage sécurisé des tokens**

```javascript
// ❌ Pas sécurisé en production
localStorage.setItem('authToken', token);

// ✅ Mieux pour les données sensibles
sessionStorage.setItem('authToken', token);

// ✅ Idéal en production (cookies httpOnly côté serveur)
// Le serveur définit des cookies sécurisés automatiquement
```

> La sécurité et l'authentification sont des aspects critiques du développement web. Une mauvaise gestion peut compromettre toute l'application et les données des utilisateurs.
