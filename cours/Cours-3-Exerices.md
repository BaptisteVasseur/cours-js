## 🌐 **SÉANCE 3 - DOM API**

### **Partie Pratique**

**Exercice 1 : Manipulation basique du DOM**

Créer une page HTML simple et manipuler ses éléments.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice DOM</title>
</head>
<body>
    <h1 id="titre">Mon Titre</h1>
    <p id="paragraphe">Ceci est un paragraphe</p>
    <button id="bouton">Cliquez-moi</button>
    <div id="resultat"></div>
    
    <script>
        // Sélectionner les éléments
        let titre = document.getElementById('titre');
        let paragraphe = document.getElementById('paragraphe');
        let bouton = document.getElementById('bouton');
        let resultat = document.getElementById('resultat');
    </script>
</body>
</html>
```

1. Modifiez le contenu tu titre actuel par "Mon Nouveau Titre"
2. Changez le texte du paragraphe pour qu'il contienne du HTML (par exemple : "Ce paragraphe a été <strong>modifié</strong>")
3. Ajoutez un événement au bouton pour qu'il affiche l'heure actuelle dans la div "resultat" quand on clique dessus
4. Ajoutez une classe CSS "highlight" au titre quand on passe la souris dessus, et enlever la classe quand on sort la souris du titre (Il faut donc ajouter une classe ``highlight`` dans le css de votre page pour appliquer du style)

**Exercice 2 : Calculateur simple**

Créer un calculateur basique avec interface HTML.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculateur</title>
    <style>
        .calculateur {
            max-width: 300px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
        input, button {
            margin: 5px;
            padding: 10px;
            font-size: 16px;
        }
        #resultat {
            font-size: 20px;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="calculateur">
        <h2>Calculateur Simple</h2>
        <input type="number" id="nombre1" placeholder="Premier nombre">
        <input type="number" id="nombre2" placeholder="Deuxième nombre">
        <br>
        <button onclick="calculer('+')">+</button>
        <button onclick="calculer('-')">-</button>
        <button onclick="calculer('*')">×</button>
        <button onclick="calculer('/')">÷</button>
        <div id="resultat">Résultat : </div>
    </div>
    
    <script>
        function calculer(operation) {
            // Code ici
        }
    </script>
</body>
</html>
```

Ecrivez le contenu de la fonction calculer

**Travail à faire :**

1. **Récupérer les valeurs** des deux champs de saisie (nombre1 et nombre2)
2. **Convertir les valeurs** en nombres (utilisez parseFloat)
3. **Vérifier que les valeurs** sont bien des nombres valides (utilisez isNaN)
4. **Effectuer le calcul** selon l'opération passée en paramètre :
   - '+' pour l'addition
   - '-' pour la soustraction  
   - '*' pour la multiplication
   - '/' pour la division
5. **Gérer le cas spécial** de la division par zéro
6. **Afficher le résultat** dans l'élément avec l'id "resultat"
7. **Afficher un message d'erreur** si les valeurs ne sont pas valides

**Conseils :**
- Utilisez `document.getElementById()` pour récupérer les éléments
- Utilisez un `switch` ou des `if/else` pour gérer les différentes opérations
- Pensez à gérer les cas d'erreur (valeurs invalides, division par zéro)
- Le format d'affichage attendu : "Résultat : 5 + 3 = 8"

**Exercice 3 : Gestionnaire de Tâches Interactif**

Créer un gestionnaire de tâches complet avec interface utilisateur.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionnaire de Tâches</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 600px; 
            margin: 50px auto; 
            padding: 20px;
        }
        .task { 
            padding: 15px; 
            margin: 10px 0; 
            border: 1px solid #ddd; 
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f9f9f9;
        }
        .task.completed { 
            background-color: #e8f5e8; 
            text-decoration: line-through; 
            opacity: 0.7;
        }
        .task button { 
            margin-left: 10px; 
            padding: 8px 12px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
        }
        .delete-btn { background-color: #ff4444; color: white; }
        .complete-btn { background-color: #44ff44; color: white; }
        #taskInput { 
            width: 70%; 
            padding: 12px; 
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        #addBtn { 
            width: 25%; 
            padding: 12px; 
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .stats {
            margin-top: 20px;
            padding: 15px;
            background-color: #f0f0f0;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>📝 Gestionnaire de Tâches</h1>
    
    <div>
        <input type="text" id="taskInput" placeholder="Entrez une nouvelle tâche...">
        <button id="addBtn">Ajouter</button>
    </div>
    
    <div id="taskList"></div>
    
    <div class="stats">
        <p>📊 <strong>Statistiques :</strong></p>
        <p>Total: <span id="totalTasks">0</span> tâches</p>
        <p>Complétées: <span id="completedTasks">0</span></p>
        <p>Restantes: <span id="remainingTasks">0</span></p>
    </div>
    
    <script>
        // TODO
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Créer les variables globales** :
   - Un tableau `tasks` pour stocker les tâches
   - Un compteur `taskId` pour générer des IDs uniques

2. **Sélectionner les éléments DOM** :
   - Le champ de saisie (`taskInput`)
   - Le bouton d'ajout (`addBtn`)
   - La liste des tâches (`taskList`)
   - Les éléments de statistiques (`totalTasks`, `completedTasks`, `remainingTasks`)

3. **Ajouter les événements** :
   - Clic sur le bouton "Ajouter"
   - Appui sur Entrée dans le champ de saisie

4. **Créer la fonction `ajouterTache()`** :
   - Récupérer le texte saisi
   - Vérifier que le texte n'est pas vide
   - Créer un objet tâche avec id, texte, statut et date
   - Ajouter la tâche au tableau
   - Vider le champ de saisie
   - Mettre à jour l'affichage et les statistiques

5. **Créer la fonction `afficherTaches()`** :
   - Vider la liste actuelle
   - Parcourir le tableau des tâches
   - Créer un élément HTML pour chaque tâche
   - Ajouter les boutons "Terminé" et "Supprimer"
   - Appliquer la classe CSS "completed" si nécessaire

6. **Créer la fonction `toggleComplete(id)`** :
   - Trouver la tâche par son ID
   - Inverser son statut (terminée/non terminée)
   - Mettre à jour l'affichage et les statistiques

7. **Créer la fonction `supprimerTache(id)`** :
   - Demander confirmation à l'utilisateur
   - Supprimer la tâche du tableau
   - Mettre à jour l'affichage et les statistiques

8. **Créer la fonction `mettreAJourStatistiques()`** :
   - Compter le total des tâches
   - Compter les tâches complétées
   - Calculer les tâches restantes
   - Mettre à jour l'affichage des statistiques

**Conseils :**
- Utilisez `Date.now()` pour générer des IDs uniques
- Pensez à gérer les cas d'erreur (texte vide)
- Utilisez `confirm()` pour la confirmation de suppression
- N'oubliez pas d'appeler `mettreAJourStatistiques()` au début pour initialiser l'affichage


