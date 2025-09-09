## 🌐 **SÉANCE 3 - DOM API - Sélection, modification et événements**

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

**Exercice 4 : Formulaire de Contact avec Validation**

Créer un formulaire avec validation en temps réel.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de Contact</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, textarea, select {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #007bff;
        }
        .error {
            border-color: #ff4444 !important;
        }
        .success {
            border-color: #44ff44 !important;
        }
        .error-message {
            color: #ff4444;
            font-size: 14px;
            margin-top: 5px;
            display: none;
        }
        .success-message {
            color: #44ff44;
            font-size: 14px;
            margin-top: 5px;
            display: none;
        }
        button {
            background-color: #007bff;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        .progress-bar {
            width: 100%;
            height: 10px;
            background-color: #f0f0f0;
            border-radius: 5px;
            margin: 20px 0;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background-color: #007bff;
            width: 0%;
            transition: width 0.3s;
        }
    </style>
</head>
<body>
    <h1>📧 Formulaire de Contact</h1>
    
    <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
    </div>
    
    <form id="contactForm">
        <div class="form-group">
            <label for="nom">Nom complet *</label>
            <input type="text" id="nom" name="nom" required>
            <div class="error-message" id="nomError">Le nom doit contenir au moins 2 caractères</div>
        </div>
        
        <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required>
            <div class="error-message" id="emailError">Veuillez entrer un email valide</div>
        </div>
        
        <div class="form-group">
            <label for="telephone">Téléphone</label>
            <input type="tel" id="telephone" name="telephone">
            <div class="error-message" id="telephoneError">Format : 06 12 34 56 78</div>
        </div>
        
        <div class="form-group">
            <label for="sujet">Sujet *</label>
            <select id="sujet" name="sujet" required>
                <option value="">Choisissez un sujet</option>
                <option value="question">Question générale</option>
                <option value="support">Support technique</option>
                <option value="partnership">Partenariat</option>
                <option value="other">Autre</option>
            </select>
            <div class="error-message" id="sujetError">Veuillez sélectionner un sujet</div>
        </div>
        
        <div class="form-group">
            <label for="message">Message *</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <div class="error-message" id="messageError">Le message doit contenir au moins 10 caractères</div>
        </div>
        
        <button type="submit" id="submitBtn">Envoyer le message</button>
    </form>
    
    <script>
        // TODO
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Sélectionner tous les éléments** du formulaire et les messages d'erreur
2. **Créer un objet `validationRules`** avec les règles de validation pour chaque champ
3. **Créer la fonction `validerChamp(champ, valeur)`** qui :
   - Applique les règles de validation
   - Affiche/masque les messages d'erreur
   - Change les styles (success/error)
   - Retourne true/false
4. **Créer la fonction `mettreAJourProgression()`** qui :
   - Calcule le pourcentage de champs valides
   - Met à jour la barre de progression
   - Active/désactive le bouton d'envoi
5. **Ajouter les événements** pour la validation en temps réel :
   - `input` pour les champs texte
   - `change` pour le select
   - `blur` pour la validation finale
6. **Créer la fonction `soumettreFormulaire(e)`** qui :
   - Empêche l'envoi par défaut
   - Valide tous les champs
   - Affiche un message de succès si tout est OK
   - Réinitialise le formulaire après envoi

**Règles de validation :**
- **Nom** : minimum 2 caractères, pas de chiffres
- **Email** : format email valide (contient @ et .)
- **Téléphone** : format français (optionnel)
- **Sujet** : obligatoire
- **Message** : minimum 10 caractères

**Exercice 5 : Système de Thèmes (Mode Sombre/Clair)**

Créer un système de changement de thème pour une page web.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Système de Thèmes</title>
    <style>
        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --card-bg: #f5f5f5;
            --border-color: #dddddd;
            --accent-color: #007bff;
        }
        
        [data-theme="dark"] {
            --bg-color: #1a1a1a;
            --text-color: #ffffff;
            --card-bg: #2d2d2d;
            --border-color: #444444;
            --accent-color: #4dabf7;
        }
        
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            transition: all 0.3s ease;
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding: 20px;
            background-color: var(--card-bg);
            border-radius: 10px;
            border: 1px solid var(--border-color);
        }
        
        .theme-toggle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            background-color: var(--accent-color);
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
            transform: scale(1.05);
        }
        
        .content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .card {
            padding: 20px;
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .icon {
            font-size: 24px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎨 Système de Thèmes</h1>
        <button class="theme-toggle" id="themeToggle">
            <span id="themeIcon">🌙</span>
            <span id="themeText">Mode Sombre</span>
        </button>
    </div>
    
    <div class="content">
        <div class="card">
            <div class="icon">📊</div>
            <h3>Statistiques</h3>
            <p>Voici vos statistiques du jour. Le thème s'adapte automatiquement à vos préférences.</p>
        </div>
        
        <div class="card">
            <div class="icon">⚙️</div>
            <h3>Paramètres</h3>
            <p>Personnalisez votre expérience en changeant de thème selon vos préférences.</p>
        </div>
        
        <div class="card">
            <div class="icon">📱</div>
            <h3>Responsive</h3>
            <p>Cette interface s'adapte à tous les écrans et tous les thèmes.</p>
        </div>
    </div>
    
    <script>
        // TODO
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Créer les variables** pour gérer l'état du thème
2. **Sélectionner les éléments** du bouton de thème
3. **Créer la fonction `changerTheme()`** qui :
   - Inverse l'état du thème
   - Met à jour l'attribut `data-theme` du body
   - Change l'icône et le texte du bouton
   - Sauvegarde la préférence dans localStorage
4. **Créer la fonction `chargerTheme()`** qui :
   - Récupère la préférence sauvegardée
   - Applique le thème au chargement de la page
5. **Ajouter l'événement** de clic sur le bouton
6. **Appeler `chargerTheme()`** au chargement de la page
7. **Bonus** : Ajouter une animation de transition lors du changement de thème

**Fonctionnalités attendues :**
- Changement instantané de thème
- Sauvegarde de la préférence
- Icônes et textes qui changent selon le thème
- Transitions fluides
- Thème par défaut (clair)

**Exercice 6 : Système de Quiz Interactif**

Créer un quiz interactif avec questions à choix multiples, score et feedback.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Interactif</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .quiz-container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 2px solid #eee;
        }
        .progress {
            background-color: #e0e0e0;
            height: 10px;
            border-radius: 5px;
            overflow: hidden;
            margin: 20px 0;
        }
        .progress-fill {
            height: 100%;
            background-color: #4CAF50;
            width: 0%;
            transition: width 0.3s;
        }
        .question {
            font-size: 20px;
            margin-bottom: 25px;
            color: #333;
        }
        .options {
            display: grid;
            gap: 15px;
            margin-bottom: 30px;
        }
        .option {
            padding: 15px 20px;
            border: 2px solid #ddd;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 16px;
        }
        .option:hover {
            background-color: #f0f0f0;
            border-color: #007bff;
        }
        .option.correct {
            background-color: #d4edda;
            border-color: #28a745;
            color: #155724;
        }
        .option.incorrect {
            background-color: #f8d7da;
            border-color: #dc3545;
            color: #721c24;
        }
        .option.disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }
        .explanation {
            background-color: #e7f3ff;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            display: none;
        }
        .navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }
        .nav-btn {
            padding: 12px 25px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }
        .nav-btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        .nav-btn:hover:not(:disabled) {
            background-color: #0056b3;
        }
        .results {
            text-align: center;
            display: none;
        }
        .score-display {
            font-size: 48px;
            color: #007bff;
            margin: 20px 0;
        }
        .message {
            font-size: 18px;
            margin: 20px 0;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="quiz-container">
        <div class="header">
            <h1>🧠 Quiz Interactif</h1>
            <div class="score">Score: <span id="score">0</span>/<span id="total">5</span></div>
        </div>
        
        <div class="progress">
            <div class="progress-fill" id="progressFill"></div>
        </div>
        
        <div id="quizContent">
            <div class="question" id="questionText">
                <!-- Question affichée ici -->
            </div>
            
            <div class="options" id="optionsContainer">
                <!-- Options affichées ici -->
            </div>
            
            <div class="explanation" id="explanation">
                <!-- Explication affichée ici -->
            </div>
            
            <div class="navigation">
                <button class="nav-btn" id="prevBtn">← Précédent</button>
                <button class="nav-btn" id="nextBtn">Suivant →</button>
                <button class="nav-btn" id="finishBtn" style="display: none;">Terminer</button>
            </div>
        </div>
        
        <div class="results" id="results">
            <h2>🎉 Quiz Terminé !</h2>
            <div class="score-display" id="finalScore">0%</div>
            <div class="message" id="finalMessage">Message personnalisé</div>
            <button class="nav-btn" id="restartBtn">Recommencer</button>
        </div>
    </div>
    
    <script>
        // TODO
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Créer le tableau de questions** avec 5-6 questions (culture générale, JavaScript, etc.)
2. **Créer les variables d'état** : question actuelle, réponses données, score
3. **Sélectionner tous les éléments DOM** nécessaires
4. **Créer la fonction `afficherQuestion(index)`** qui :
   - Affiche la question et les options
   - Met à jour la barre de progression
   - Gère l'état des boutons de navigation
   - Affiche les réponses déjà données
5. **Créer la fonction `repondre(optionIndex)`** qui :
   - Vérifie si la réponse est correcte
   - Met à jour le score
   - Affiche le feedback visuel
   - Désactive toutes les options
   - Affiche l'explication
6. **Créer les fonctions de navigation** :
   - `questionPrecedente()` et `questionSuivante()`
   - Gestion des limites (première/dernière question)
7. **Créer la fonction `terminerQuiz()`** qui :
   - Calcule le pourcentage final
   - Affiche un message personnalisé selon le score
   - Masque le quiz et affiche les résultats
8. **Créer la fonction `recommencer()`** qui :
   - Réinitialise toutes les variables
   - Remet à zéro le score et les réponses
   - Affiche la première question

**Exemple de questions :**
```javascript
const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Londres", "Paris", "Berlin", "Madrid"],
        correct: 1,
        explanation: "Paris est la capitale de la France depuis le 12ème siècle."
    },
    {
        question: "Quel langage de programmation utilise-t-on pour rendre les pages web interactives ?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correct: 2,
        explanation: "JavaScript est le langage principal pour l'interactivité web."
    }
    // Ajoutez 3-4 autres questions...
];
```

**Fonctionnalités attendues :**
- Navigation fluide entre les questions
- Feedback visuel immédiat
- Score en temps réel
- Barre de progression
- Résultats finaux avec pourcentage
- Possibilité de recommencer


