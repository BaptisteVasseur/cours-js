const quantite = document.getElementById('new-item-quantity')
const nom = document.getElementById('new-item-name')
const buttonAjouter = document.getElementById('add-item')

console.log(quantite, nom, buttonAjouter)

let ingredients = [];

buttonAjouter.addEventListener('click', () => {
    let valeurQuantite = quantite.value;
    let valeurNom = nom.value;

    ingredients.push({
        nom_ingredient: valeurNom,
        quantite_ingredient: valeurQuantite,
    })
    afficherListeIngredients();

    // php : array("valeur1", "valeur2", ....)
    // php : ["valeur1", "valeur2", ....] // -> JS : []
    // php : ["prenom" => "Baptiste", "nom" => "Dupont"] // JS -> {}

    console.log(ingredients);
})

const maListe = document.getElementById('shopping-list')
function afficherListeIngredients() {
    maListe.innerHTML = '';
    ingredients.forEach((monIngredient) => {
        maListe.innerHTML = maListe.innerHTML + `<div class="shopping-item">
                <input type="checkbox" class="shopping-item-checkbox">
                <div class="shopping-item-content">
                    <span class="shopping-item-name">${monIngredient.nom_ingredient}</span>
                    <span class="shopping-item-quantity">${monIngredient.quantite_ingredient} × <button class="button-secondary remove-item">×</button></span>
                </div>
            </div>`;

        // TODO : AJOUTER ICI LE CODE POUR SUPPRIMER L'INGREDIENT DE LA LISTE (ajouter un data attribute sur le bouton de suppression)
    })
}

const buttonViderList = document.getElementById('clear-list')
buttonViderList.addEventListener('click', () => {
    ingredients = []
    afficherListeIngredients();
})
