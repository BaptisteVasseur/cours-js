## 🌐 **SÉANCE 6 - API avec méthodes HTTP complètes**

### **Partie Pratique**

**Exercice 1 : Gestionnaire de Tâches avec API complète**

Créez un gestionnaire de tâches qui utilise toutes les méthodes HTTP.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionnaire de Tâches API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f7fa;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .form-section {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        input, textarea, select {
            width: 100%;
            padding: 12px;
            border: 2px solid #dde2e5;
            border-radius: 6px;
            font-size: 14px;
        }
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #007bff;
        }
        button {
            background: #007bff;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            margin-right: 10px;
        }
        button:hover {
            background: #0056b3;
        }
        button.danger {
            background: #dc3545;
        }
        button.danger:hover {
            background: #c82333;
        }
        button.success {
            background: #28a745;
        }
        button.success:hover {
            background: #218838;
        }
        .task-list {
            margin-top: 30px;
        }
        .task-item {
            background: #fff;
            border: 1px solid #dde2e5;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
        }
        .task-item:hover {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .task-item.completed {
            background: #d4edda;
            border-color: #c3e6cb;
        }
        .task-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .task-title {
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }
        .task-status {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }
        .status-pending {
            background: #fff3cd;
            color: #856404;
        }
        .status-in-progress {
            background: #cce5ff;
            color: #004085;
        }
        .status-completed {
            background: #d4edda;
            color: #155724;
        }
        .task-actions {
            margin-top: 15px;
        }
        .task-actions button {
            font-size: 12px;
            padding: 6px 12px;
        }
        .loading {
            text-align: center;
            padding: 20px;
            color: #666;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
        }
        .success {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
        }
        .edit-form {
            background: #e9ecef;
            padding: 15px;
            border-radius: 6px;
            margin-top: 15px;
            display: none;
        }
        .stats {
            display: flex;
            justify-content: space-around;
            background: #e9ecef;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .stat-item {
            text-align: center;
        }
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
        }
        .stat-label {
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Gestionnaire de Tâches avec API</h1>
        
        <div class="stats" id="stats">
            <div class="stat-item">
                <div class="stat-number" id="totalTasks">0</div>
                <div class="stat-label">Total</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" id="pendingTasks">0</div>
                <div class="stat-label">En attente</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" id="inProgressTasks">0</div>
                <div class="stat-label">En cours</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" id="completedTasks">0</div>
                <div class="stat-label">Terminées</div>
            </div>
        </div>
        
        <div class="form-section">
            <h2>Créer une nouvelle tâche</h2>
            <form id="taskForm">
                <div class="form-group">
                    <label for="taskTitle">Titre de la tâche *</label>
                    <input type="text" id="taskTitle" required>
                </div>
                <div class="form-group">
                    <label for="taskDescription">Description</label>
                    <textarea id="taskDescription" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="taskPriority">Priorité</label>
                    <select id="taskPriority">
                        <option value="low">Basse</option>
                        <option value="medium" selected>Moyenne</option>
                        <option value="high">Haute</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="taskDueDate">Date d'échéance</label>
                    <input type="date" id="taskDueDate">
                </div>
                <button type="submit">Créer la tâche</button>
                <button type="button" onclick="resetForm()">Réinitialiser</button>
            </form>
        </div>
        
        <div class="form-section">
            <h3>Actions groupées</h3>
            <button onclick="chargerTaches()">Rafraîchir la liste</button>
            <button onclick="marquerToutesCompletes()" class="success">Marquer toutes comme terminées</button>
            <button onclick="supprimerTachesCompletes()" class="danger">Supprimer les tâches terminées</button>
        </div>
        
        <div id="messages"></div>
        
        <div class="task-list">
            <h2>Liste des tâches</h2>
            <div id="taskContainer">
                <div class="loading">Chargement des tâches...</div>
            </div>
        </div>
    </div>

    <script>
        // Configuration de l'API
        const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
        
        // Variables globales
        let taches = [];
        let tacheEnEdition = null;
        
        // TODO : Implémenter toutes les fonctions
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Fonctions CRUD de base** :
   - `chargerTaches()` - GET pour récupérer toutes les tâches
   - `creerTache(donnees)` - POST pour créer une nouvelle tâche
   - `modifierTache(id, donnees)` - PUT/PATCH pour modifier une tâche
   - `supprimerTache(id)` - DELETE pour supprimer une tâche

2. **Gestion du formulaire** :
   - Validation des données avant envoi
   - Réinitialisation après création
   - Mode édition pour modifier les tâches existantes

3. **Interface utilisateur** :
   - Affichage des tâches avec statuts colorés
   - Boutons d'action (modifier, supprimer, changer statut)
   - Messages de succès/erreur
   - Statistiques en temps réel

4. **Fonctionnalités avancées** :
   - Filtrage par statut/priorité
   - Recherche dans les tâches
   - Actions groupées
   - Sauvegarde locale en cas d'échec API

**Exercice 2 : Formulaire de Contact avec Validation**

Créez un formulaire de contact qui envoie des données avec POST.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de Contact API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #333;
        }
        input, textarea, select {
            width: 100%;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #667eea;
        }
        .error-input {
            border-color: #e74c3c !important;
        }
        .success-input {
            border-color: #27ae60 !important;
        }
        .error-message {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px;
            display: none;
        }
        .success-message {
            color: #27ae60;
            font-size: 14px;
            margin-top: 5px;
            display: none;
        }
        .submit-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            transition: transform 0.3s;
        }
        .submit-btn:hover {
            transform: translateY(-2px);
        }
        .submit-btn:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
        }
        .progress-bar {
            width: 100%;
            height: 6px;
            background: #f0f0f0;
            border-radius: 3px;
            margin-bottom: 20px;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            width: 0%;
            transition: width 0.3s;
        }
        .char-count {
            text-align: right;
            font-size: 12px;
            color: #666;
        }
        .file-upload {
            position: relative;
            display: inline-block;
            width: 100%;
        }
        .file-upload input[type=file] {
            position: absolute;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
        .file-upload-label {
            display: block;
            background: #f8f9fa;
            border: 2px dashed #ddd;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
        }
        .file-upload-label:hover {
            background: #e9ecef;
            border-color: #667eea;
        }
        .uploaded-files {
            margin-top: 10px;
        }
        .file-item {
            background: #e9ecef;
            padding: 8px 12px;
            border-radius: 4px;
            margin: 5px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .remove-file {
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            cursor: pointer;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>📧 Formulaire de Contact</h1>
        <p>Remplissez ce formulaire pour nous envoyer un message.</p>
        
        <div class="progress-bar">
            <div class="progress-fill" id="progressFill"></div>
        </div>
        
        <form id="contactForm" novalidate>
            <div class="form-group">
                <label for="name">Nom complet *</label>
                <input type="text" id="name" name="name" required>
                <div class="error-message" id="nameError">Le nom doit contenir au moins 2 caractères</div>
                <div class="success-message" id="nameSuccess">✓ Nom valide</div>
            </div>
            
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required>
                <div class="error-message" id="emailError">Veuillez entrer un email valide</div>
                <div class="success-message" id="emailSuccess">✓ Email valide</div>
            </div>
            
            <div class="form-group">
                <label for="phone">Téléphone</label>
                <input type="tel" id="phone" name="phone">
                <div class="error-message" id="phoneError">Format attendu: 01 23 45 67 89</div>
                <div class="success-message" id="phoneSuccess">✓ Téléphone valide</div>
            </div>
            
            <div class="form-group">
                <label for="subject">Sujet *</label>
                <select id="subject" name="subject" required>
                    <option value="">Choisissez un sujet</option>
                    <option value="question">Question générale</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="feedback">Retour d'expérience</option>
                    <option value="other">Autre</option>
                </select>
                <div class="error-message" id="subjectError">Veuillez sélectionner un sujet</div>
                <div class="success-message" id="subjectSuccess">✓ Sujet sélectionné</div>
            </div>
            
            <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" rows="6" required maxlength="1000"></textarea>
                <div class="char-count"><span id="charCount">0</span>/1000 caractères</div>
                <div class="error-message" id="messageError">Le message doit contenir au moins 10 caractères</div>
                <div class="success-message" id="messageSuccess">✓ Message valide</div>
            </div>
            
            <div class="form-group">
                <label>Pièces jointes (optionnel)</label>
                <div class="file-upload">
                    <input type="file" id="attachments" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png">
                    <label for="attachments" class="file-upload-label">
                        📎 Cliquez pour ajouter des fichiers<br>
                        <small>PDF, DOC, DOCX, JPG, PNG (max 5MB par fichier)</small>
                    </label>
                </div>
                <div class="uploaded-files" id="uploadedFiles"></div>
            </div>
            
            <button type="submit" class="submit-btn" id="submitBtn">
                Envoyer le message
            </button>
        </form>
        
        <div id="responseMessage" style="margin-top: 20px;"></div>
    </div>

    <script>
        // TODO : Implémenter la validation et l'envoi
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Validation en temps réel** :
   - Valider chaque champ à la saisie
   - Afficher des messages d'erreur/succès
   - Barre de progression du formulaire

2. **Gestion des fichiers** :
   - Upload multiple avec FormData
   - Validation taille et type
   - Prévisualisation des fichiers

3. **Envoi des données** :
   - POST avec Content-Type approprié
   - Gestion des réponses d'erreur
   - Animation de chargement

4. **Expérience utilisateur** :
   - Désactivation du bouton pendant l'envoi
   - Messages de confirmation
   - Réinitialisation après succès

**Exercice 3 : Gestionnaire d'Articles de Blog**

Créez un système complet de gestion d'articles avec toutes les opérations CRUD.

**API endpoints à simuler :**
- `GET /api/articles` - Liste des articles
- `POST /api/articles` - Créer un article
- `PUT /api/articles/{id}` - Modifier un article
- `DELETE /api/articles/{id}` - Supprimer un article
- `PATCH /api/articles/{id}/status` - Changer le statut

**Fonctionnalités à implémenter :**
- Liste paginée des articles
- Formulaire de création/édition
- Preview en temps réel
- Gestion des brouillons
- Publication/dépublication
- Système de tags
- Recherche et filtres

**Exercice 4 : API de Gestion d'Équipe**

Créez une application pour gérer une équipe de projet.

**Entités à gérer :**
- **Membres de l'équipe** (nom, email, rôle, photo)
- **Projets** (nom, description, statut, deadline)
- **Tâches** (titre, assigné à, priorité, statut)

**Opérations CRUD pour chaque entité :**
- Créer, lire, modifier, supprimer
- Assigner des membres aux projets
- Assigner des tâches aux membres
- Tableau de bord avec statistiques

**Exercice 5 : Système de Commandes E-commerce**

Implémentez un système de commandes avec workflow complet.

**Workflow d'une commande :**
1. **Création** - POST avec articles et quantités
2. **Modification** - PATCH pour changer les quantités
3. **Validation** - PUT pour confirmer la commande
4. **Suivi** - GET pour obtenir le statut
5. **Annulation** - DELETE si possible

**API endpoints :**
```javascript
// Gestion du panier
POST /api/cart/items          // Ajouter un article
PATCH /api/cart/items/{id}    // Modifier la quantité
DELETE /api/cart/items/{id}   // Retirer un article

// Gestion des commandes
POST /api/orders              // Créer une commande
GET /api/orders/{id}          // Détails d'une commande
PATCH /api/orders/{id}/status // Changer le statut
DELETE /api/orders/{id}       // Annuler une commande
```

**Exercice 6 : Système de Commentaires**

Créez un système de commentaires avec modération.

**Fonctionnalités :**
- Poster des commentaires
- Répondre aux commentaires (thread)
- Modération (approuver/rejeter)
- Signalement de contenu
- Votes (like/dislike)

**États des commentaires :**
- `pending` - En attente de modération
- `approved` - Approuvé et visible
- `rejected` - Rejeté
- `reported` - Signalé

**Exercice 7 : Application de Réservation**

Développez un système de réservation (restaurant, salle, etc.).

**Gestion des créneaux :**
```javascript
// Vérifier la disponibilité
GET /api/slots?date=2024-01-15&duration=120

// Réserver un créneau
POST /api/reservations
{
  "date": "2024-01-15",
  "time": "19:00",
  "duration": 120,
  "guests": 4,
  "contact": {...}
}

// Modifier une réservation
PATCH /api/reservations/{id}
{
  "date": "2024-01-16",
  "guests": 6
}

// Annuler une réservation
DELETE /api/reservations/{id}
```

**Exercice 8 : Système de Reviews et Ratings**

Créez un système d'avis et de notes.

**Fonctionnalités :**
- Poster des avis avec notes (1-5 étoiles)
- Upload d'images dans les avis
- Réponses du propriétaire
- Calcul automatique des moyennes
- Filtrage par note
- Signalement d'avis

**Structure d'un avis :**
```javascript
{
  "rating": 4,
  "title": "Très bon service",
  "content": "...",
  "images": ["url1.jpg", "url2.jpg"],
  "author": "Jean Dupont",
  "date": "2024-01-15",
  "verified": true
}
```

**Conseils pour tous les exercices :**

1. **Commencez simple** : Implémentez d'abord GET et POST
2. **Gérez les erreurs** : Codes de statut, messages clairs
3. **Validez les données** : Côté client ET serveur
4. **Optimisez l'UX** : Loading states, confirmations
5. **Testez tout** : Cas normaux ET cas d'erreur
