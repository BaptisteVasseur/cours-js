## 🌐 **SÉANCE 4 - DOM API avancée et événements**

### **Partie Pratique**

**Exercice 1 : Gestion avancée des événements**

Créez une page interactive qui gère différents types d'événements.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Événements Avancés</title>
    <style>
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .event-zone {
            padding: 50px;
            margin: 20px 0;
            border: 2px solid #ddd;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
        }
        .event-zone:hover {
            background-color: #f0f0f0;
        }
        .log {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            max-height: 200px;
            overflow-y: auto;
            margin-top: 20px;
        }
        .key-combo {
            background-color: #e7f3ff;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎯 Gestion Avancée des Événements</h1>
        
        <div class="event-zone" id="mouseZone">
            Zone de test souris<br>
            Cliquez, double-cliquez, survolez...
        </div>
        
        <div class="key-combo">
            <strong>Testez ces combinaisons :</strong><br>
            Ctrl+S, Ctrl+Z, Escape, Enter, Flèches directionnelles
        </div>
        
        <input type="text" id="keyboardInput" placeholder="Tapez ici pour tester le clavier...">
        
        <div class="log" id="eventLog">
            <strong>Journal des événements :</strong><br>
        </div>
        
        <button onclick="clearLog()">Effacer le journal</button>
    </div>

    <script>
        // TODO : Implémenter la gestion des événements
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Événements de souris** sur la zone de test :
   - `click`, `dblclick`, `mousedown`, `mouseup`
   - `mouseover`, `mouseout`, `mousemove`
   - Afficher les coordonnées de la souris
   - Détecter les clics droit (contextmenu)

2. **Événements de clavier** :
   - Détecter les touches spéciales (Escape, Enter, flèches)
   - Gérer les combinaisons Ctrl+S, Ctrl+Z
   - Empêcher les raccourcis par défaut du navigateur
   - Afficher le code et le nom de la touche

3. **Journal des événements** :
   - Créer une fonction `logEvent(message)` qui ajoute les événements au journal
   - Limiter à 50 événements maximum
   - Mettre une date à chaque événement
   - Implémenter la fonction `clearLog()`

**Exercice 2 : Jeu de Morpion (Tic Tac Toe)**

Créez un jeu de morpion interactif avec comptage des scores.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu de Morpion</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 20px;
        }
        .game-container {
            max-width: 500px;
            margin: 0 auto;
        }
        .game-info {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
        }
        .current-player {
            font-size: 24px;
            margin: 20px 0;
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 10px;
        }
        .game-board {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5px;
            max-width: 300px;
            margin: 30px auto;
            background: #34495e;
            padding: 5px;
            border-radius: 10px;
        }
        .cell {
            width: 90px;
            height: 90px;
            background-color: white;
            border: none;
            font-size: 36px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            color: #333;
        }
        .cell:hover:not(:disabled) {
            background-color: #f0f0f0;
            transform: scale(1.05);
        }
        .cell:disabled {
            cursor: not-allowed;
        }
        .cell.x {
            color: #e74c3c;
        }
        .cell.o {
            color: #3498db;
        }
        .winning-cell {
            background-color: #2ecc71 !important;
            animation: pulse 0.5s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        .game-controls {
            margin: 20px 0;
        }
        .game-controls button {
            margin: 0 10px;
            padding: 12px 24px;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            background-color: #e74c3c;
            color: white;
            transition: background-color 0.3s;
        }
        .game-controls button:hover {
            background-color: #c0392b;
        }
        .mode-selector {
            margin: 20px 0;
        }
        .mode-selector button {
            margin: 0 5px;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: rgba(255,255,255,0.8);
            color: #333;
        }
        .mode-selector button.active {
            background-color: #f39c12;
            color: white;
        }
        .game-result {
            background: rgba(255,255,255,0.9);
            color: #333;
            padding: 20px;
            border-radius: 15px;
            margin: 20px 0;
            display: none;
        }
        .score-board {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
        }
        .player-score {
            display: inline-block;
            margin: 0 20px;
        }
    </style>
</head>
<body>
    <div class="game-container">
        <h1>⭕ Jeu de Morpion</h1>
        
        <div class="mode-selector">
            <button class="mode-btn active" data-mode="pvp">Joueur vs Joueur</button>
            <button class="mode-btn" data-mode="pvc">Joueur vs Ordinateur</button>
        </div>
        
        <div class="score-board">
            <div class="player-score">
                <strong>Joueur X:</strong> <span id="scoreX">0</span>
            </div>
            <div class="player-score">
                <strong>Joueur O:</strong> <span id="scoreO">0</span>
            </div>
            <div class="player-score">
                <strong>Égalités:</strong> <span id="scoreTie">0</span>
            </div>
        </div>
        
        <div class="current-player">
            Au tour de : <span id="currentPlayerDisplay">❌ (X)</span>
        </div>
        
        <div class="game-board" id="gameBoard">
            <button class="cell" data-index="0"></button>
            <button class="cell" data-index="1"></button>
            <button class="cell" data-index="2"></button>
            <button class="cell" data-index="3"></button>
            <button class="cell" data-index="4"></button>
            <button class="cell" data-index="5"></button>
            <button class="cell" data-index="6"></button>
            <button class="cell" data-index="7"></button>
            <button class="cell" data-index="8"></button>
        </div>
        
        <div class="game-controls">
            <button onclick="startNewGame()">Nouvelle Partie</button>
            <button onclick="resetScores()">Remettre à Zéro</button>
        </div>
        
        <div class="game-result" id="gameResult">
            <h2 id="resultTitle">🎉 Résultat</h2>
            <p id="resultMessage">Le joueur X a gagné !</p>
            <button onclick="startNewGame()">Rejouer</button>
        </div>
    </div>

    <script>
        // TODO : Implémenter le jeu de morpion
    </script>
</body>
</html>
```

**Travail à faire :**

1. **Variables du jeu** :
   - Tableau pour stocker l'état des 9 cases
   - Variable pour le joueur actuel (X ou O)
   - Mode de jeu (Joueur vs Joueur ou Joueur vs Ordinateur)
   - Scores des joueurs

2. **Logique du jeu** :
   - Gérer les clics sur les cases
   - Alterner entre les joueurs
   - Vérifier les conditions de victoire (lignes, colonnes, diagonales)
   - Détecter les égalités

3. **Intelligence artificielle simple** :
   - Ordinateur joue automatiquement après le joueur humain
   - Stratégie simple : jouer aléatoirement dans les cases libres
   - Bonus : implémenter une IA plus intelligente

4. **Interface utilisateur** :
   - Mettre à jour l'affichage du joueur actuel
   - Afficher le résultat de la partie
   - Compteur de scores
   - Animations pour les cases gagnantes
