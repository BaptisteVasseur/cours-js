const addIngredientButton = document.getElementById('add-ingredient');
const addIngredientList = document.getElementById('ingredients-container')

addIngredientButton.addEventListener('click', addIngredientFunction)

function addIngredientFunction() {

    let htmlToInsert = `
<div class="form-group">
    <input type="text" class="ingredient-name" required="" placeholder=" ">
    <label>Ingrédient</label>
</div>
<div class="form-group">
    <input type="text" class="ingredient-quantity" required="" placeholder=" ">
    <label>Quantité</label>
</div>
<button type="button" class="icon-button remove-ingredient">×</button>
`;

    const newIngredient = document.createElement('div');
    newIngredient.classList.add('ingredient-row');
    newIngredient.innerHTML = htmlToInsert;

    const removeIngredientButton = newIngredient.querySelector('.remove-ingredient');
    removeIngredientButton.addEventListener('click', function() {
        newIngredient.remove();
    });

    addIngredientList.appendChild(newIngredient);
}

const addStepButton = document.getElementById('add-step');
const addStepList = document.getElementById('steps-container');

addStepButton.addEventListener('click', addStepFunction)

function addStepFunction() {
    let htmlToInsert = `
<div class="form-group">
    <textarea class="step-description" required="" placeholder=" "></textarea>
    <label>Décrivez l'étape</label>
</div>
<button type="button" class="icon-button remove-step">×</button>
`;

    const newStep = document.createElement('div');
    newStep.classList.add('step-row');
    newStep.innerHTML = htmlToInsert;

    const removeStepButton = newStep.querySelector('.remove-step');
    removeStepButton.addEventListener('click', function() {
        newStep.remove();
    });

    addStepList.appendChild(newStep);
}


// Quand on appuie sur le bouton pour enregistrer la recette

const saveRecipeButton = document.getElementById('create-recipe');

saveRecipeButton.addEventListener('click', saveRecipeFunction);

function saveRecipeFunction() {
    const name = document.getElementById('recipe-name').value;
    const category = document.getElementById('recipe-category').value;

    const ingredientRows = document.querySelectorAll('.ingredient-row');
    const stepRows = document.querySelectorAll('.step-row')

    // Pour l'image ??

    let image = document.getElementById('recipe-image').files[0];

    const recipe = {
        name,
        category,
        ingredients: [],
        steps: [],
    };

    ingredientRows.forEach(function(ingredientRow) {
        const name = ingredientRow.querySelector('.ingredient-name').value
        const quantity = ingredientRow.querySelector('.ingredient-quantity').value

        recipe.ingredients.push({
            name,
            quantity
        })
    })

    stepRows.forEach(function(stepRow) {
        const description = stepRow.querySelector('.step-description').value

        recipe.steps.push({
            description
        })
    })

    const recipes = localStorage.getItem('recipes')
        ? JSON.parse(localStorage.getItem('recipes'))
        : [];

    localStorage.setItem('recipes', recipe)
}

// Affichage preview de l'image

const imageInput = document.getElementById('recipe-image');
const imagePreview = document.getElementById('preview-image');

imageInput.addEventListener('change', function() {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        imagePreview.src = event.target.result;
    }

    if (file) {
        reader.readAsDataURL(file);
        imagePreview.style.display = 'block';
    } else {
        imagePreview.src = '';
    }
});
