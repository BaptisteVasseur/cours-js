## 🌐 **SÉANCE 6 - API avec méthodes HTTP complètes**

### **Partie Théorique**

#### **6.1 Rappel des méthodes HTTP**

Jusqu'à présent, nous avons principalement utilisé GET pour récupérer des données. Il est maintenant temps d'explorer toutes les méthodes HTTP pour créer, modifier et supprimer des données.

**Tableau récapitulatif :**

| Méthode | Action | Utilisation | Idempotent* | Corps de requête |
|---------|--------|-------------|-------------|------------------|
| **GET** | Lire | Récupérer des données | ✅ | ❌ |
| **POST** | Créer | Créer une nouvelle ressource | ❌ | ✅ |
| **PUT** | Remplacer | Remplacer complètement une ressource | ✅ | ✅ |
| **PATCH** | Modifier | Modifier partiellement une ressource | ❌ | ✅ |
| **DELETE** | Supprimer | Supprimer une ressource | ✅ | ❌ |

> *Idempotent : Une opération est idempotente si elle peut être répétée plusieurs fois sans changer le résultat final.

#### **6.2 Requêtes POST - Créer des données**

POST est utilisé pour créer de nouvelles ressources sur le serveur.

**Syntaxe de base :**
```javascript
async function creerUtilisateur(utilisateur) {
    try {
        let reponse = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(utilisateur)
        });
        
        if (!reponse.ok) {
            throw new Error(`Erreur ${reponse.status}: ${reponse.statusText}`);
        }
        
        let nouvelUtilisateur = await reponse.json();
        console.log('Utilisateur créé:', nouvelUtilisateur);
        return nouvelUtilisateur;
        
    } catch (erreur) {
        console.error('Erreur lors de la création:', erreur.message);
        throw erreur;
    }
}

// Utilisation
let utilisateur = {
    name: 'Alice Dupont',
    username: 'alice.dupont',
    email: 'alice@example.com',
    phone: '01-234-567',
    website: 'alice-dupont.fr'
};

creerUtilisateur(utilisateur)
    .then(result => {
        console.log('Utilisateur créé avec l\'ID:', result.id);
    })
    .catch(erreur => {
        console.log('Impossible de créer l\'utilisateur:', erreur.message);
    });
```

**Éléments importants du POST :**

1. **method: 'POST'** - Spécifie la méthode HTTP
2. **headers** - Indique le type de contenu envoyé
3. **body** - Les données à envoyer (stringifiées en JSON)

#### **6.3 En-têtes (Headers) HTTP**

Les headers fournissent des informations supplémentaires sur la requête ou la réponse.

**Headers couramment utilisés :**

```javascript
let headers = {
    // Type de contenu envoyé
    'Content-Type': 'application/json',
    
    // Authentification
    'Authorization': 'Bearer token-abc123',
    
    // Langue acceptée
    'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
    
    // Type de réponse acceptée
    'Accept': 'application/json',
    
    // Informations sur l'agent utilisateur
    'User-Agent': 'MonApp/1.0'
};

// Utilisation dans une requête
let reponse = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
});
```

**Types de Content-Type :**

```javascript
// JSON (le plus courant)
'Content-Type': 'application/json'

// Données de formulaire classique
'Content-Type': 'application/x-www-form-urlencoded'

// Upload de fichiers
'Content-Type': 'multipart/form-data'

// Texte brut
'Content-Type': 'text/plain'

// XML
'Content-Type': 'application/xml'
```

#### **6.4 Requêtes PUT - Remplacer complètement**

PUT remplace complètement une ressource existante.

```javascript
async function modifierUtilisateur(id, utilisateurComplet) {
    try {
        let reponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(utilisateurComplet)
        });
        
        if (!reponse.ok) {
            if (reponse.status === 404) {
                throw new Error(`Utilisateur ${id} non trouvé`);
            }
            throw new Error(`Erreur ${reponse.status}: ${reponse.statusText}`);
        }
        
        let utilisateurModifie = await reponse.json();
        console.log('Utilisateur modifié:', utilisateurModifie);
        return utilisateurModifie;
        
    } catch (erreur) {
        console.error('Erreur lors de la modification:', erreur.message);
        throw erreur;
    }
}

// Utilisation - ATTENTION : PUT remplace TOUT
let utilisateurComplet = {
    id: 1,
    name: 'Alice Dupont Modifiée',
    username: 'alice.dupont.new',
    email: 'alice.new@example.com',
    phone: '01-234-567',
    website: 'alice-new.fr',
    address: {
        street: 'Rue de la Paix',
        city: 'Paris',
        zipcode: '75001'
    }
};

modifierUtilisateur(1, utilisateurComplet);
```

> **Important :** PUT remplace complètement la ressource. Si vous oubliez un champ, il sera perdu !

#### **6.5 Requêtes PATCH - Modifier partiellement**

PATCH modifie seulement les champs spécifiés.

```javascript
async function modifierUtilisateurPartiel(id, modifications) {
    try {
        let reponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modifications)
        });
        
        if (!reponse.ok) {
            throw new Error(`Erreur ${reponse.status}: ${reponse.statusText}`);
        }
        
        let utilisateurModifie = await reponse.json();
        console.log('Modifications appliquées:', utilisateurModifie);
        return utilisateurModifie;
        
    } catch (erreur) {
        console.error('Erreur lors de la modification partielle:', erreur.message);
        throw erreur;
    }
}

// Utilisation - Seuls les champs spécifiés sont modifiés
let modifications = {
    email: 'nouvel.email@example.com',
    phone: '01-987-654'
};

modifierUtilisateurPartiel(1, modifications);
```

> **Avantage de PATCH :** Plus sûr car on ne risque pas d'effacer des données par accident.

#### **6.6 Requêtes DELETE - Supprimer des données**

DELETE supprime une ressource du serveur.

```javascript
async function supprimerUtilisateur(id) {
    try {
        // Demander confirmation avant suppression
        let confirmation = confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${id} ?`);
        if (!confirmation) {
            console.log('Suppression annulée par l\'utilisateur');
            return false;
        }
        
        let reponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        });
        
        if (!reponse.ok) {
            if (reponse.status === 404) {
                throw new Error(`Utilisateur ${id} non trouvé`);
            }
            throw new Error(`Erreur ${reponse.status}: ${reponse.statusText}`);
        }
        
        // DELETE peut retourner du contenu ou être vide
        if (reponse.status === 204) {
            console.log('Utilisateur supprimé avec succès (pas de contenu)');
            return true;
        }
        
        let resultat = await reponse.json();
        console.log('Résultat de la suppression:', resultat);
        return true;
        
    } catch (erreur) {
        console.error('Erreur lors de la suppression:', erreur.message);
        throw erreur;
    }
}

// Utilisation
supprimerUtilisateur(1)
    .then(supprime => {
        if (supprime) {
            console.log('Utilisateur supprimé avec succès');
            // Mettre à jour l'interface utilisateur
        }
    })
    .catch(erreur => {
        console.log('Impossible de supprimer l\'utilisateur:', erreur.message);
    });
```

#### **6.7 Envoi de fichiers (FormData)**

Pour envoyer des fichiers, on utilise FormData au lieu de JSON.

```javascript
async function envoyerFichier(fichier, donneesSupplementaires = {}) {
    try {
        // Créer un objet FormData
        let formData = new FormData();
        
        // Ajouter le fichier
        formData.append('fichier', fichier);
        
        // Ajouter d'autres données
        Object.keys(donneesSupplementaires).forEach(cle => {
            formData.append(cle, donneesSupplementaires[cle]);
        });
        
        let reponse = await fetch('/api/upload', {
            method: 'POST',
            // Ne pas spécifier Content-Type, le navigateur le fait automatiquement
            body: formData
        });
        
        if (!reponse.ok) {
            throw new Error(`Erreur upload: ${reponse.status}`);
        }
        
        let resultat = await reponse.json();
        console.log('Fichier envoyé:', resultat);
        return resultat;
        
    } catch (erreur) {
        console.error('Erreur lors de l\'envoi:', erreur.message);
        throw erreur;
    }
}

// Utilisation avec un input file
function gererSelectionFichier() {
    let inputFichier = document.getElementById('monFichier');
    
    inputFichier.addEventListener('change', async function(event) {
        let fichier = event.target.files[0];
        
        if (!fichier) return;
        
        // Valider le fichier
        if (fichier.size > 5 * 1024 * 1024) { // 5MB max
            alert('Le fichier est trop volumineux (max 5MB)');
            return;
        }
        
        try {
            let resultat = await envoyerFichier(fichier, {
                description: 'Mon fichier uploadé',
                categorie: 'documents'
            });
            
            console.log('Upload réussi:', resultat);
            
        } catch (erreur) {
            console.error('Échec de l\'upload:', erreur.message);
        }
    });
}
```

> Les API modernes permettent de créer des applications web complètes et interactives. La maîtrise de toutes les méthodes HTTP est essentielle pour un développeur web.
