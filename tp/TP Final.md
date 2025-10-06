# TP Final Noté - Clone d'Application de Messagerie
**Durée : 3 heures | 1ère année Web/JavaScript**

## 🎯 Objectif du TP

Créer une application de messagerie instantanée (style WhatsApp, Messenger, Discord...) en utilisant une API REST fournie. Vous êtes libre de choisir le design et l'inspiration (WhatsApp, Discord, Messenger, Snapchat, etc.).

## 📚 Qu'est-ce que Swagger ?

**Swagger** est un outil qui génère automatiquement de la documentation interactive pour les API REST. Il permet de :
- 📖 **Voir tous les endpoints** disponibles (URL, méthodes HTTP)
- 🧪 **Tester les requêtes** directement depuis le navigateur
- 📋 **Comprendre les paramètres** requis et les réponses attendues
- 🔍 **Explorer l'API** sans avoir besoin de code

C'est comme un "mode d'emploi interactif" pour l'API !

## 🔗 API Fournie

**URL de l'API :** `whatsapp.baptiste.xyz`  
**Documentation Swagger :** `whatsapp.baptiste.xyz/docs`

### Endpoints disponibles :
1. **POST /auth/login** - Se connecter (email uniquement)
2. **GET /conversations** - Lister mes conversations
3. **POST /conversations** - Créer une nouvelle conversation
4. **DELETE /conversations/:id** - Supprimer une conversation
5. **GET /conversations/:id/messages** - Récupérer les messages
6. **POST /conversations/:id/messages** - Envoyer un message

## 📋 Cahier des charges

### ✅ Fonctionnalités OBLIGATOIRES (16 points)

#### 🔐 Authentification (3 points)
- [ ] Page de connexion avec un champ email
- [ ] Stockage du token JWT reçu
- [ ] Redirection vers l'interface principale après connexion

#### 💬 Liste des conversations (4 points)
- [ ] Affichage de toutes les conversations de l'utilisateur
- [ ] Affichage du nom/email du contact dans chaque conversation
- [ ] Possibilité de cliquer sur une conversation pour l'ouvrir

#### ➕ Création de conversations (3 points)
- [ ] Bouton ou formulaire pour créer une nouvelle conversation
- [ ] Champ pour saisir l'email du destinataire
- [ ] Ajout automatique de la nouvelle conversation à la liste

#### 📝 Affichage des messages (3 points)
- [ ] Zone d'affichage des messages de la conversation sélectionnée
- [ ] Distinction visuelle entre mes messages et ceux du contact
- [ ] Affichage de l'heure/date des messages

#### 📤 Envoi de messages (3 points)
- [ ] Champ de saisie pour taper un nouveau message
- [ ] Bouton d'envoi (ou validation avec Entrée)
- [ ] Ajout automatique du message à la conversation

### 🌟 Fonctionnalités BONUS (8 points)

#### 🎨 Interface et UX (2 points)
- [ ] **Design soigné** (1 point) - CSS travaillé, animations, responsive
- [ ] **Mode sombre** (1 point) - Toggle dark/light mode avec persistance

#### 🛠️ Fonctionnalités avancées (3 points)
- [ ] **Suppression de conversations** (1 point) - Bouton pour supprimer
- [ ] **Actualisation automatique** (1 point) - Rafraîchir les messages toutes les X secondes
- [ ] **Notifications visuelles** (1 point) - Affichage des erreurs/succès

#### 📱 Contenu multimédia (2 points)
- [ ] **Envoi d'images** (1 point) - Upload et affichage d'images dans les messages
- [ ] **Détection d'URLs** (1 point) - Conversion automatique des liens en cliquables, prévisualisation

#### 🔔 Notifications système (1 point)
- [ ] **Notifications de bureau** (1 point) - Notification push lors de nouveaux messages

## 🎨 Inspirations de design

Vous pouvez vous inspirer de :
- **WhatsApp** : Design vert, liste à gauche, messages à droite
- **Discord** : Design sombre, sidebar, bulles de messages
- **Messenger** : Design bleu/blanc, interface moderne
- **Snapchat** : Design coloré, interface mobile-first
- **Telegram** : Design épuré, focus sur la simplicité

## 🛠️ Structure de fichiers recommandée

```
mon-projet/
├── index.html          # Page de connexion
├── app.html           # Interface principale de chat
├── style.css          # Styles CSS
└── script.js          # Logique JavaScript
```

## 💡 Conseils techniques

### 🔑 Gestion du token JWT
```javascript
// Sauvegarder le token après connexion
sessionStorage.setItem('token', response.token);

// Utiliser le token dans les requêtes
fetch(url, {
    headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
})
```

### 📡 Exemple de requête
```javascript
// Se connecter
const response = await fetch('https://whatsapp.baptiste.xyz/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'mon@email.com' })
});
const data = await response.json();
```

### 🎯 Structure HTML suggérée
```html
<div class="app-container">
    <aside class="conversations-sidebar">
        <!-- Liste des conversations -->
    </aside>
    <main class="chat-area">
        <div class="messages-container">
            <!-- Messages -->
        </div>
        <div class="message-input">
            <!-- Zone de saisie -->
        </div>
    </main>
</div>
```

### 💡 Conseils pour les fonctionnalités bonus

#### 🌙 Mode sombre
```javascript
// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}
```

#### 🔔 Notifications de bureau
```javascript
// Demander permission et envoyer notification
if (Notification.permission === 'granted') {
    new Notification('Nouveau message', {
        body: 'Vous avez reçu un nouveau message',
        icon: '/icon.png'
    });
}
```

#### 🖼️ Détection d'URLs
```javascript
// Convertir URLs en liens cliquables
function linkifyText(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
}
```

## 📊 Grille d'évaluation

| Critère | Points | Description |
|---------|--------|-------------|
| Connexion | 3 | Page de login fonctionnelle |
| Liste conversations | 4 | Affichage et navigation |
| Création conversation | 3 | Nouveau chat avec contact |
| Affichage messages | 3 | Messages organisés et lisibles |
| Envoi messages | 3 | Saisie et envoi fonctionnels |
| **Bonus Design** | +1 | Interface soignée et attractive |
| **Bonus Mode sombre** | +1 | Toggle dark/light mode |
| **Bonus Suppression** | +1 | Supprimer des conversations |
| **Bonus Auto-refresh** | +1 | Mise à jour automatique |
| **Bonus Notifications** | +1 | Gestion des erreurs/succès |
| **Bonus Images** | +1 | Upload et affichage d'images |
| **Bonus URLs** | +1 | Détection et conversion de liens |
| **Bonus Notifications bureau** | +1 | Push notifications |
| **Total** | **/24** | (16 + 8 bonus) |

## 🚀 Pour commencer

1. **Explorez l'API** sur `whatsapp.baptiste.xyz/docs`
2. **Testez les endpoints** directement dans Swagger
3. **Créez votre structure HTML/CSS** de base
4. **Implémentez étape par étape** :
   - Connexion → Liste conversations → Messages → Envoi → Bonus
5. **Testez régulièrement** votre application

## ⚠️ Points d'attention

- **Gestion des erreurs** : Vérifiez toujours les réponses de l'API
- **Token expiré** : Gérez le cas où l'utilisateur doit se reconnecter
- **Interface responsive** : Pensez aux différentes tailles d'écran
- **Code propre** : Commentez votre code et organisez vos fonctions
- **Permissions** : Demandez les permissions nécessaires (notifications, géolocalisation)

## 📝 Livrables & Rendus 

- **Fichiers sources** : HTML, CSS, JS
- **Démonstration** : Application fonctionnelle

Pour le rendu : Compresser votre TP en .zip et déposez le sur cette URl : https://forms.gle/pbbsbNm3PuD9Ezz27

---

**Bon courage ! 💪**

*N'hésitez pas à poser des questions pendant le TP. L'objectif est d'apprendre en pratiquant !*

