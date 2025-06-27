## 🌐 **SÉANCE 4 - Fetch API et Programmation Asynchrone**

### **Partie Pratique**

**Exercice 1 : Découverte des APIs**

Créez un fichier HTML avec JavaScript qui utilise l'API JSONPlaceholder pour récupérer et afficher des posts.

- Créez une page HTML avec un bouton "Charger les posts"
- Utilisez l'API `https://jsonplaceholder.typicode.com/posts`
- Affichez les 5 premiers posts dans la page
- Gérer les états de chargement et d'erreur

**Questions à vous poser :**
- Que se passe-t-il quand vous cliquez sur le bouton ?
- D'où viennent les données affichées ?
- Pourquoi utilise-t-on `await` ?
- Que se passe-t-il si vous coupez votre connexion internet ?

**Exercice 2 : Gestion des erreurs**

Modifiez le code de l'exercice 1 pour gérer différents cas d'erreur :

- Erreur de réseau (pas de connexion internet)
- Erreur 404 (ressource non trouvée)
- Erreur 500 (erreur serveur)
- Afficher des messages d'erreur appropriés pour chaque cas

**Questions à vous poser :**
- Quelles sont les différentes sources d'erreur possibles ?
- Comment distinguer une erreur de réseau d'une erreur de l'API ?
- Pourquoi est-il important de gérer les erreurs ?

**Exercice 3 : API Pokémon**

Créez une application qui affiche des informations sur les Pokémon :

- Créez une page avec un champ de saisie pour l'ID du Pokémon (1-151)
- Utilisez l'API Poekmon de Tyradex `https://tyradex.vercel.app/docs`
- Affichez : nom, image, types, taille, poids, statistiques
- Ajoutez des couleurs pour les différents types de Pokémon

**Questions à vous poser :**
- Comment l'API Pokémon est-elle structurée ?
- Quelles informations pouvez-vous récupérer sur un Pokémon ?
- Comment gérer les images qui peuvent ne pas exister ?

**Exercice 4 : Gestion des états de chargement**

Améliorez l'expérience utilisateur avec des indicateurs visuels :

- Ajoutez un spinner ou une animation de chargement
- Affichez un message "Chargement en cours..."
- Ajoutez un bouton "Réessayer" en cas d'erreur
- Empêchez les clics multiples pendant le chargement

**Questions à vous poser :**
- Pourquoi est-il important d'avoir des états de chargement ?
- Comment améliorer encore l'expérience utilisateur ?
- Que se passe-t-il si l'utilisateur clique plusieurs fois rapidement ?

**Exercice 5 : Requêtes multiples**

Créez une application qui charge plusieurs Pokémon en même temps :

- Chargez une équipe de 6 Pokémon (Example : Pokémon n°1, 4, 7, 25, 133, 6)
- Utilisez `Promise.all()` pour charger tous les Pokémon simultanément
- Affichez tous les Pokémon dans une grille
- Gérer le cas où certaines requêtes échouent

**Questions à vous poser :**
- Quelle est la différence entre `Promise.all()` et faire les requêtes une par une ?
- Que se passe-t-il si une des requêtes échoue avec `Promise.all()` ?
- Comment gérer le cas où certaines requêtes réussissent et d'autres échouent ?

**Exercice 6 : API météo**

Créez une application météo simple :

- Inscrivez-vous sur OpenWeatherMap pour obtenir une clé API gratuite
- Créez un formulaire pour saisir une ville
- Utilisez l'API météo pour récupérer les informations
- Affichez : température, description, humidité, vent

**Questions à vous poser :**
- Pourquoi certaines APIs nécessitent-elles une clé d'authentification ?
- Comment protéger votre clé API dans le code frontend ?
- Quelles sont les limites des APIs gratuites ?

**Exercice 7 : Gestion des formulaires avec API**

Créez un formulaire de recherche qui utilise une API :

- Créez un formulaire avec un champ de recherche et un sélecteur (utilisateurs, posts, albums)
- Utilisez l'API JSONPlaceholder pour récupérer les données
- Filtrez les résultats selon le terme de recherche
- Affichez le nombre de résultats trouvés

**Questions à vous poser :**
- Comment gérer la validation des formulaires côté client ?
- Comment optimiser les recherches pour éviter trop de requêtes ?
- Comment implémenter une recherche en temps réel ?

**Exercice 8 : Projet final - Application complète**

Créez une application de gestion de tâches qui utilise une API :

- Utilisez l'API `https://jsonplaceholder.typicode.com/todos`
- Chargez les 10 premières tâches au démarrage
- Permettez d'ajouter une nouvelle tâche
- Permettez de marquer une tâche comme terminée
- Permettez de supprimer une tâche
- Gérer tous les états (chargement, erreur, succès)

**Questions à vous poser :**
- Comment améliorer cette application ?
- Quelles fonctionnalités pourriez-vous ajouter ?
- Comment gérer la synchronisation des données ?
- Comment optimiser les performances ?
