////////////////////////////////////////////
////////////// Pour X compteurs :
////////////////////////////////////////////

const compteurs = document.querySelectorAll('.compteurs');

function ajouterEvenementsSurLesBouttonsDuCompteur(compteur) {
    const counterNumber = compteur.querySelector('.counterNumber')
    const incrementButton = compteur.querySelector('.incrementButton')
    const decrementButton = compteur.querySelector('.decrementButton')
    const resetButton = compteur.querySelector('.resetButton')
    const deleteButton = compteur.querySelector('.deleteButton');

    let valeurCompteur = 0;

    // pour incrémenter :
    function function1() {
        valeurCompteur = valeurCompteur + 1;

        if (valeurCompteur > 100) {
            valeurCompteur = 100;
        }

        counterNumber.innerHTML = valeurCompteur;
        changeColor()
    }
    incrementButton.addEventListener('click', function1)

    // pour décrémenter :
    function function2() {
        valeurCompteur = valeurCompteur - 1;

        if(valeurCompteur < 0) {
            valeurCompteur = 0;
            return;
        }

        // ou counter--
        counterNumber.innerHTML = valeurCompteur;
        changeColor()
    }
    decrementButton.addEventListener('click', function2)

    // pour reinitialiser
    function function3() {
        valeurCompteur = 0;
        counterNumber.innerHTML = valeurCompteur;
        changeColor();
    }
    resetButton.addEventListener('click', () => function3)

    // pour changer la couleur du texte
    function changeColor() {
        if (valeurCompteur < 10) {
            // bleu
            counterNumber.style.color = "blue";
        } else if (valeurCompteur < 20) {
            // orange
            counterNumber.style.color = "orange";
        } else {
            // red
            counterNumber.style.color = "red";
        }
    }

    deleteButton.addEventListener('click', () => {
        compteur.remove()
    })
}

compteurs.forEach((compteur) => {
    ajouterEvenementsSurLesBouttonsDuCompteur(compteur);
});

const ajouterBoutton = document.getElementById('ajouterBoutton');

ajouterBoutton.addEventListener('click', function() {

    const divCompteur = document.createElement('div')
    divCompteur.classList.add('compteurs')
    divCompteur.innerHTML = `
        <div class="counterNumber">0</div>
        <div class="buttons">
            <button class="incrementButton">Incrémenter</button>
            <button class="resetButton">Réinitialiser</button>
            <button class="decrementButton">Décrémenter</button>
            <button class="deleteButton">Supprimer</button>
        </div>
    `;

    document.querySelector('body').appendChild(divCompteur);

    ajouterEvenementsSurLesBouttonsDuCompteur(divCompteur);
})








// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//
//     if (keyName === 'i') {
//         function1()
//     } else if (keyName === 'd') {
//         function2()
//     } else if (keyName === 'r') {
//         function3()
//     }
// })
