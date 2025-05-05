let recipes = localStorage.getItem('recipes')
recipes = recipes ? JSON.parse(recipes) : [];

const recipeContainer = document.getElementById('recipes-container');

function displayRecipes() {
    recipeContainer.innerHTML = '';
    recipes.forEach(function(recipe) {

        console.log(recipe);
        const element = document.createElement('div');

        element.innerHTML = `
<div class="recipe-card">
    <div class="recipe-image-container">
        <img src="${recipe.image}" alt="Recette de ${recipe.name}">
    </div>
    <div class="recipe-content">
        <h2 class="recipe-title">${recipe.name}</h2>
        <span class="recipe-category">Plat</span>
        <div class="recipe-info">
            <span>${recipe.ingredients.length} ingrédients</span>
            <span>${recipe.steps.length} étapes</span>
        </div>
        <div class="recipe-actions">
            <button class="button-view-recipe">
                Voir la recette
            </button>
        </div>
    </div>
</div>`

        recipeContainer.appendChild(recipeElement);
    });
}
