// Exercice 6 : Gestion d'une liste de courses

let courses = [];

function ajouterArticle(article) {
    if (article && article.trim() !== "") {
        courses.push(article.trim());
        console.log(`"${article}" a été ajouté à la liste de courses.`);
    } else {
        console.log("Erreur : L'article ne peut pas être vide.");
    }
}

function afficherListe() {
    console.log("=== LISTE DE COURSES ===");
    if (courses.length === 0) {
        console.log("La liste est vide.");
    } else {
        courses.forEach((article, index) => {
            console.log(`${index + 1}. ${article}`);
        });
    }
    console.log("========================");
}

function supprimerArticle(article) {
    const index = courses.indexOf(article);
    if (index !== -1) {
        courses.splice(index, 1);
        console.log(`"${article}" a été supprimé de la liste.`);
    } else {
        console.log(`"${article}" n'a pas été trouvé dans la liste.`);
    }
}

// Test des fonctions
ajouterArticle("pain");
ajouterArticle("lait");
ajouterArticle("pommes");
afficherListe();
supprimerArticle("lait");
afficherListe();
