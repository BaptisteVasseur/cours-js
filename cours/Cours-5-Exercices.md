## 🌐 **SÉANCE 5 - Introduction aux API REST et programmation asynchrone**

### **Partie Pratique**

**Exercice 1 : Découverte des APIs avec JSONPlaceholder**

Créez une application simple qui récupère et affiche des posts depuis l'API JSONPlaceholder.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Découverte des APIs</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px 5px;
        }
        button:hover {
            background-color: #0056b3;
        }
        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        .loading {
            text-align: center;
            padding: 20px;
            color: #666;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .post {
            border: 1px solid #ddd;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        .post h3 {
            color: #333;
            margin-top: 0;
        }
        .post-meta {
            color: #666;
            font-size: 14px;
            margin-top: 10px;
        }
        .spinner {
            border: 3px solid #f3f3f3;
            border-top: 3px solid #007bff;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Découverte des APIs</h1>
        <p>Cette application utilise l'API JSONPlaceholder pour récupérer des données de test.</p>
        
        <div class="controls">
            <button onclick="chargerPosts()">Charger tous les posts</button>
            <button onclick="chargerPost()">Charger un post spécifique</button>
            <button onclick="chargerUtilisateurs()">Charger les utilisateurs</button>
        </div>
        
        <div id="loading" class="loading" style="display: none;">
            <div class="spinner"></div>
            <p>Chargement en cours...</p>
        </div>
        
        <div id="content">
            <p>Cliquez sur un bouton pour commencer à explorer les APIs !</p>
        </div>
    </div>

    <script>
        // TODO : Implémenter les fonctions pour récupérer les données
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Fonction `chargerPosts()`** :
   - Récupérer les 5 premiers posts depuis `https://jsonplaceholder.typicode.com/posts`
   - Afficher chaque post avec titre, contenu et métadonnées
   - Gérer les états de chargement et d'erreur

2. **Fonction `chargerPost()`** :
   - Demander à l'utilisateur l'ID du post (1-100)
   - Récupérer le post spécifique depuis `https://jsonplaceholder.typicode.com/posts/{id}`
   - Afficher le post ou un message d'erreur si l'ID n'existe pas

3. **Fonction `chargerUtilisateurs()`** :
   - Récupérer tous les utilisateurs depuis `https://jsonplaceholder.typicode.com/users`
   - Afficher nom, email, téléphone et site web de chaque utilisateur

4. **Gestion des erreurs** :
   - Vérifier les codes de statut HTTP
   - Afficher des messages d'erreur appropriés
   - Gérer les problèmes de réseau

**Questions à se poser :**
- Que se passe-t-il quand vous coupez votre connexion internet ?
- Combien de temps prennent les requêtes ?
- Que contiennent exactement les données reçues ?

**Exercice 2 : Pokédex avec PokeAPI**

Créez un Pokédex interactif utilisant l'API Pokémon française Tyradex.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex Interactif</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        h1 {
            text-align: center;
            color: white;
            font-size: 3em;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .search-container {
            background: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            margin-bottom: 30px;
        }
        .search-row {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .search-row input, .search-row select {
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
        }
        .search-row input {
            flex: 1;
            min-width: 200px;
        }
        .search-row button {
            background: #ff6b6b;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }
        .pokemon-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .pokemon-card {
            background: white;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            text-align: center;
            transition: transform 0.3s;
        }
        .pokemon-card:hover {
            transform: translateY(-5px);
        }
        .pokemon-image {
            width: 150px;
            height: 150px;
            margin: 0 auto 15px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        .pokemon-name {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        .pokemon-types {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 15px;
        }
        .type-badge {
            padding: 5px 12px;
            border-radius: 20px;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 12px;
        }
        .pokemon-stats {
            text-align: left;
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
        }
        .stat-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
        .error-message {
            background: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            margin: 20px 0;
        }
        .loading-message {
            background: #d1ecf1;
            color: #0c5460;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔥 Pokédex Interactif</h1>
        
        <div class="search-container">
            <div class="search-row">
                <input type="number" id="pokemonId" placeholder="Numéro du Pokémon (1-151)" min="1" max="151">
                <input type="text" id="pokemonName" placeholder="Nom du Pokémon">
                <select id="pokemonGeneration">
                    <option value="">Toutes les générations</option>
                    <option value="1">Génération 1</option>
                    <option value="2">Génération 2</option>
                    <option value="3">Génération 3</option>
                </select>
                <button onclick="rechercherPokemon()">Rechercher</button>
                <button onclick="pokemonAleatoire()">Pokémon Aléatoire</button>
            </div>
        </div>
        
        <div id="results">
            <p style="text-align: center; color: white; font-size: 18px;">
                Entrez un numéro ou un nom de Pokémon pour commencer votre recherche !
            </p>
        </div>
    </div>

    <script>
        // TODO : Implémenter le Pokédex
    </script>
</body>
</html>
```

**Travail à faire :**

1. **API Tyradex** :
   - URL de base : `https://tyradex.vercel.app/api/v1/pokemon`
   - Récupérer un Pokémon par ID : `/pokemon/{id}`
   - Récupérer par nom : `/pokemon/{nom}`

2. **Fonctions à implémenter** :
   - `rechercherPokemon()` : Recherche par ID ou nom
   - `pokemonAleatoire()` : Afficher un Pokémon au hasard
   - `afficherPokemon(pokemon)` : Créer la carte Pokémon
   - `getTypeColor(type)` : Couleurs pour les types

3. **Informations à afficher** :
   - Image du Pokémon
   - Nom français et japonais
   - Types avec couleurs
   - Statistiques (PV, Attaque, Défense, etc.)
   - Taille et poids

**Exercice 3 : Application Météo**

Créez une application météo utilisant l'API OpenWeatherMap.

**Pré-requis :**
1. Créer un compte gratuit sur [OpenWeatherMap](https://openweathermap.org/api)
2. Obtenir votre clé API gratuite
3. Lire la documentation de l'API Current Weather

**Fonctionnalités à implémenter :**
- Recherche par ville
- Affichage des conditions actuelles
- Prévisions sur 5 jours
- Géolocalisation automatique
- Historique des recherches
- Conversion d'unités (°C/°F)

**Template de base :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Météo</title>
    <!-- Styles à ajouter -->
</head>
<body>
    <div class="container">
        <h1>🌤️ Météo App</h1>
        
        <div class="search-section">
            <input type="text" id="cityInput" placeholder="Entrez une ville...">
            <button onclick="rechercherMeteo()">Rechercher</button>
            <button onclick="utiliserGeolocalisation()">Ma Position</button>
        </div>
        
        <div id="weatherDisplay">
            <!-- Données météo ici -->
        </div>
        
        <div id="forecast">
            <!-- Prévisions ici -->
        </div>
    </div>

    <script>
        const API_KEY = 'VOTRE_CLE_API_ICI';
        // TODO : Implémenter l'application météo
    </script>
</body>
</html>
```

**Exercice 4 : Générateur de Blagues avec JokeAPI**

Créez une application qui affiche des blagues aléatoires.

**API à utiliser :**
- URL : `https://v2.jokeapi.dev/joke/Any?lang=fr`
- Documentation : [JokeAPI](https://jokeapi.dev/)

**Fonctionnalités :**
- Blagues aléatoires
- Filtres par catégorie
- Système de favoris
- Partage de blagues
- Mode sombre/clair
