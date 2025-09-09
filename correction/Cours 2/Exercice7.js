// Exercice 7 : Carnet d'adresses

let contacts = [];

function ajouterContact(nom, email, telephone) {
    if (!nom || !email || !telephone) {
        console.log("Erreur : Tous les champs sont obligatoires.");
        return;
    }
    
    const contact = {
        nom: nom,
        email: email,
        telephone: telephone
    };
    
    contacts.push(contact);
    console.log(`Contact "${nom}" ajouté avec succès.`);
}

function afficherTousContacts() {
    console.log("=== CARNET D'ADRESSES ===");
    if (contacts.length === 0) {
        console.log("Aucun contact dans le carnet.");
    } else {
        contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.nom}`);
            console.log(`   Email: ${contact.email}`);
            console.log(`   Téléphone: ${contact.telephone}`);
            console.log("   ---");
        });
    }
    console.log("=========================");
}

function rechercherContact(nom) {
    const contact = contacts.find(c => c.nom.toLowerCase().includes(nom.toLowerCase()));
    // on peut aussi faire une boucle avec un for
    
    if (contact) {
        console.log("=== CONTACT TROUVÉ ===");
        console.log(`Nom: ${contact.nom}`);
        console.log(`Email: ${contact.email}`);
        console.log(`Téléphone: ${contact.telephone}`);
        console.log("======================");
    } else {
        console.log(`Contact "${nom}" non trouvé.`);
    }
}

// Test des fonctions
ajouterContact("Dupont", "jean.dupont@email.com", "0123456789");
ajouterContact("Martin", "marie.martin@email.com", "0987654321");
ajouterContact("Bernard", "pierre.bernard@email.com", "0555666777");
afficherTousContacts();
rechercherContact("Martin");
rechercherContact("Durand"); // Contact non trouvé
