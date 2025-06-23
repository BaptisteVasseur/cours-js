// Données de base pour les conversations
const chats = [
    {
        id: 1,
        name: "Alice Martin",
        avatar: "AM",
        lastMessage: "Salut ! Comment ça va ?",
        time: "10:30",
        unread: 2,
        online: true,
        messages: [
            { text: "Salut ! Comment ça va ?", sent: false, time: "10:30" },
            { text: "Ça va bien et toi ?", sent: true, time: "10:31" },
            { text: "Très bien merci ! Tu fais quoi ce soir ?", sent: false, time: "10:32" }
        ]
    },
    {
        id: 2,
        name: "Bob Dupont",
        avatar: "BD",
        lastMessage: "On se voit demain ?",
        time: "09:15",
        unread: 0,
        online: false,
        messages: [
            { text: "Salut Bob !", sent: true, time: "09:10" },
            { text: "Hello ! Ça va ?", sent: false, time: "09:12" },
            { text: "Oui super ! On se voit demain ?", sent: false, time: "09:15" }
        ]
    },
    {
        id: 3,
        name: "Claire Durand",
        avatar: "CD",
        lastMessage: "Merci beaucoup !",
        time: "Hier",
        unread: 0,
        online: true,  
        messages: [
            { text: "J'ai fini le projet", sent: true, time: "14:20" },
            { text: "Parfait ! Tu peux me l'envoyer ?", sent: false, time: "14:22" },
            { text: "Bien sûr, c'est envoyé", sent: true, time: "14:25" },
            { text: "Merci beaucoup !", sent: false, time: "14:26" }
        ]
    }
];

let currentChatId = null;
let searchResults = [];
let currentSearchIndex = 0;

// Initialisation
function init() {
    console.log('Initialisation de l\'app...');
    renderChatList();
    setupEventListeners();
}

// S'assurer que le script s'exécute après le chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Affichage de la liste des conversations
function renderChatList() {
    console.log('Rendu de la liste des conversations...');
    const chatList = document.getElementById('chatList');
    
    if (!chatList) {
        console.error('Element chatList non trouvé !');
        return;
    }
    
    chatList.innerHTML = '';

    chats.forEach(chat => {
        console.log('Ajout du chat:', chat.name);
        const chatElement = document.createElement('div');
        chatElement.className = 'flex items-center p-4 cursor-pointer border-b border-whatsapp-border hover:bg-whatsapp-header transition-colors';
        chatElement.dataset.chatId = chat.id;
        
        chatElement.innerHTML = `
            <div class="relative">
                <div class="w-12 h-12 bg-whatsapp-primary rounded-full flex items-center justify-center text-white font-bold mr-4 relative">
                    ${chat.avatar}
                    ${chat.online ? '<div class="online-status"></div>' : ''}
                </div>
            </div>
            <div class="flex-1 min-w-0">
                <div class="text-whatsapp-text font-medium mb-1">${chat.name}</div>
                <div class="text-whatsapp-muted text-sm truncate">${chat.lastMessage}</div>
            </div>
            <div class="flex flex-col items-end gap-1">
                <div class="text-whatsapp-muted text-xs">${chat.time}</div>
                ${chat.unread > 0 ? `<div class="bg-whatsapp-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">${chat.unread}</div>` : ''}
            </div>
        `;
        
        chatElement.addEventListener('click', () => {
            console.log('Clic sur chat:', chat.name);
            openChat(chat.id);
        });
        chatList.appendChild(chatElement);
    });
    
    console.log('Liste des conversations créée avec', chats.length, 'éléments');
}

// Création d'une nouvelle conversation
function createNewChat() {
    const email = prompt("Entrez l'adresse email du contact :");
    if (!email || !email.includes('@')) {
        if (email !== null) {
            alert("Veuillez entrer une adresse email valide");
        }
        return;
    }

    // Créer un nom à partir de l'email
    const name = email.split('@')[0];
    const avatar = name.substring(0, 2).toUpperCase();
    
    // Générer un nouvel ID
    const newId = Math.max(...chats.map(c => c.id)) + 1;
    
    const newChat = {
        id: newId,
        name: name,
        avatar: avatar,
        lastMessage: "Nouveau contact ajouté",
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        unread: 0,
        online: false,
        messages: []
    };

    chats.unshift(newChat);
    renderChatList();
    openChat(newId);
}

// Suppression d'une conversation
function deleteCurrentChat() {
    if (!currentChatId) return;
    
    const chat = chats.find(c => c.id === currentChatId);
    if (confirm(`Êtes-vous sûr de vouloir supprimer la conversation avec ${chat.name} ?`)) {
        const index = chats.findIndex(c => c.id === currentChatId);
        chats.splice(index, 1);
        
        // Fermer la conversation
        currentChatId = null;
        document.getElementById('emptyChat').style.display = 'flex';
        document.getElementById('chatHeader').style.display = 'none';
        document.getElementById('chatMessages').style.display = 'none';
        document.getElementById('messageInputContainer').style.display = 'none';
        document.getElementById('searchInChat').style.display = 'none';
        
        renderChatList();
    }
}

function openChat(chatId) {
    currentChatId = chatId;
    const chat = chats.find(c => c.id === chatId);
    
    // Marquer comme lu
    chat.unread = 0;
    
    // Mise à jour de l'interface
    document.getElementById('emptyChat').style.display = 'none';
    document.getElementById('chatHeader').style.display = 'flex';
    document.getElementById('chatMessages').style.display = 'block';
    document.getElementById('messageInputContainer').style.display = 'flex';
    
    // Mise à jour du header
    document.getElementById('headerAvatar').textContent = chat.avatar;
    document.getElementById('headerName').textContent = chat.name;
    document.getElementById('headerStatus').textContent = chat.online ? 'en ligne' : 'hors ligne';
    
    // Affichage des messages
    renderMessages(chat.messages);
    
    // Mise à jour de la liste
    renderChatList();
    
    // Marquer comme actif
    document.querySelectorAll('[data-chat-id]').forEach(item => {
        item.classList.remove('bg-whatsapp-border');
    });
    document.querySelector(`[data-chat-id="${chatId}"]`).classList.add('bg-whatsapp-border');
}

// Affichage des messages avec support des fichiers
function renderMessages(messages, searchTerm = '') {
    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.innerHTML = '';
    
    messages.forEach((message, index) => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sent ? 'sent' : 'received'}`;
        messageElement.dataset.messageIndex = index;
        
        let messageContent = '';
        
        if (message.file) {
            // Message avec fichier
            if (message.file.type.startsWith('image/')) {
                messageContent = `
                    <img src="${message.file.url}" alt="${message.file.name}" class="message-image" onclick="openImagePreview('${message.file.url}')">
                    ${message.text ? `<div class="message-bubble">${highlightSearchTerm(message.text, searchTerm)}</div>` : ''}
                `;
            } else {
                const extension = message.file.name.split('.').pop().toUpperCase();
                messageContent = `
                    <div class="message-file">
                        <div class="file-icon">${extension}</div>
                        <div class="file-info">
                            <div class="file-name">${message.file.name}</div>
                            <div class="file-size">${formatFileSize(message.file.size)}</div>
                        </div>
                    </div>
                    ${message.text ? `<div class="message-bubble">${highlightSearchTerm(message.text, searchTerm)}</div>` : ''}
                `;
            }
        } else {
            // Message texte normal
            messageContent = `<div class="message-bubble">${highlightSearchTerm(message.text, searchTerm)}</div>`;
        }
        
        messageElement.innerHTML = `
            ${messageContent}
            <div class="message-time">${message.time}</div>
        `;
        
        messagesContainer.appendChild(messageElement);
    });
    
    // Scroll vers le bas
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Mise en surbrillance des termes de recherche
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="message-highlight">$1</span>');
}

// Formatage de la taille des fichiers
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Prévisualisation d'image
function openImagePreview(url) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); display: flex; align-items: center;
        justify-content: center; z-index: 1000; cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = url;
    img.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 8px;';
    
    modal.appendChild(img);
    modal.addEventListener('click', () => modal.remove());
    document.body.appendChild(modal);
}

// Envoi d'un message avec support des fichiers
function sendMessage(fileData = null) {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    
    if (!text && !fileData || !currentChatId) return;
    
    const chat = chats.find(c => c.id === currentChatId);
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + 
                now.getMinutes().toString().padStart(2, '0');
    
    // Créer le message
    const newMessage = { 
        text: text || '', 
        sent: true, 
        time: time
    };
    
    // Ajouter les données du fichier si présentes
    if (fileData) {
        newMessage.file = fileData;
    }
    
    // Ajouter le message
    chat.messages.push(newMessage);
    chat.lastMessage = fileData ? `📎 ${fileData.name}` : text;
    chat.time = time;
    
    // Mise à jour de l'affichage
    renderMessages(chat.messages);
    renderChatList();
    
    // Vider l'input
    input.value = '';
    
    // Simuler une réponse (optionnel)
    setTimeout(() => simulateResponse(chat), 2000);
}

// Gestion des fichiers
function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
}

function processSelectedFiles(files) {
    Array.from(files).forEach(file => {
        const fileData = {
            name: file.name,
            size: file.size,
            type: file.type,
            url: URL.createObjectURL(file)
        };
        
        sendMessage(fileData);
    });
}

// Recherche dans la conversation
function searchInCurrentChat() {
    const searchContainer = document.getElementById('searchInChat');
    const isVisible = searchContainer.style.display === 'block';
    
    if (isVisible) {
        searchContainer.style.display = 'none';
        clearSearchHighlights();
    } else {
        searchContainer.style.display = 'block';
        document.getElementById('searchInChatInput').focus();
    }
}

function performChatSearch(searchTerm) {
    if (!currentChatId || !searchTerm) {
        clearSearchHighlights();
        return;
    }
    
    const chat = chats.find(c => c.id === currentChatId);
    searchResults = [];
    
    chat.messages.forEach((message, index) => {
        if (message.text.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchResults.push(index);
        }
    });
    
    currentSearchIndex = 0;
    updateSearchResults();
    renderMessages(chat.messages, searchTerm);
}

function clearSearchHighlights() {
    if (currentChatId) {
        const chat = chats.find(c => c.id === currentChatId);
        renderMessages(chat.messages);
    }
    searchResults = [];
    currentSearchIndex = 0;
    document.getElementById('searchResults').textContent = '';
}

function updateSearchResults() {
    const resultsDiv = document.getElementById('searchResults');
    if (searchResults.length === 0) {
        resultsDiv.textContent = 'Aucun résultat trouvé';
    } else {
        resultsDiv.textContent = `${currentSearchIndex + 1} sur ${searchResults.length} résultats`;
    }
}

// Simulation d'une réponse automatique
function simulateResponse(chat) {
    const responses = [
        "Intéressant !",
        "Je vois...",
        "D'accord !",
        "Merci pour l'info",
        "Parfait !",
        "On en reparle plus tard ?",
        "👍"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + 
                now.getMinutes().toString().padStart(2, '0');
    
    const responseMessage = { text: randomResponse, sent: false, time };
    chat.messages.push(responseMessage);
    chat.lastMessage = randomResponse;
    chat.time = time;
    
    if (currentChatId === chat.id) {
        renderMessages(chat.messages);
    }
    renderChatList();
}

// Configuration des événements
function setupEventListeners() {
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const newChatBtn = document.getElementById('newChatBtn');
    const deleteChatBtn = document.getElementById('deleteChatBtn');
    const searchInChatBtn = document.getElementById('searchInChatBtn');
    const attachBtn = document.getElementById('attachBtn');
    const fileInput = document.getElementById('fileInput');
    const searchInChatInput = document.getElementById('searchInChatInput');
    const globalSearch = document.getElementById('globalSearch');
    
    // Envoi de messages
    sendButton.addEventListener('click', () => sendMessage());
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Nouvelle conversation
    newChatBtn.addEventListener('click', createNewChat);
    
    // Suppression de conversation
    deleteChatBtn.addEventListener('click', deleteCurrentChat);
    
    // Recherche dans la conversation
    searchInChatBtn.addEventListener('click', searchInCurrentChat);
    searchInChatInput.addEventListener('input', (e) => {
        performChatSearch(e.target.value);
    });
    
    // Gestion des fichiers
    attachBtn.addEventListener('click', handleFileUpload);
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            processSelectedFiles(e.target.files);
            e.target.value = '';
        }
    });
    
    // Recherche globale dans les conversations
    globalSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const chatItems = document.querySelectorAll('[data-chat-id]');
        
        chatItems.forEach(item => {
            const name = item.querySelector('.text-whatsapp-text').textContent.toLowerCase();
            const preview = item.querySelector('.text-whatsapp-muted').textContent.toLowerCase();
            
            if (name.includes(query) || preview.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Drag & Drop pour les fichiers
    const chatMessages = document.getElementById('chatMessages');
    
    chatMessages.addEventListener('dragover', (e) => {
        e.preventDefault();
        chatMessages.style.background = 'rgba(0, 168, 132, 0.1)';
    });
    
    chatMessages.addEventListener('dragleave', (e) => {
        e.preventDefault();
        chatMessages.style.background = '';
    });
    
    chatMessages.addEventListener('drop', (e) => {
        e.preventDefault();
        chatMessages.style.background = '';
        
        if (e.dataTransfer.files.length > 0) {
            processSelectedFiles(e.dataTransfer.files);
        }
    });
} 
