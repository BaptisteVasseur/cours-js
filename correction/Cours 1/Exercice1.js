// Exercice 1 : Afficher ses informations

const prenom = "Baptiste";
const nom = "Vasseur";
const age = 27;
const email = 'bvasseur5@myges.com';

function afficherInformations() {
    // Première ligne : salutation avec initiale du nom
    console.log(`Bonjour ${prenom} ${nom.charAt(0)} ! Comment allez-vous ?`);
    
    // Deuxième ligne : calcul de l'âge avant la trentaine
    const ageAvantTrentaine = 30 - age;
    console.log(`Vous avez actuellement ${age} ans, il vous reste ${ageAvantTrentaine} avant la trentaine.`);
    
    // Troisième ligne : extraction du domaine et du pseudo
    const partsEmail = email.split('@');
    const pseudo = partsEmail[0];
    const domaine = partsEmail[1];
    console.log(`Vous utilisez ${domaine} comme boite email et votre pseudo est ${pseudo}`);
}

// Appel de la fonction
afficherInformations();
