let compteurs = {}

let ajouterCompteur = document.querySelector('#add-counter');
ajouterCompteur.addEventListener('click', function() {

    const numeroCompteur = document.querySelectorAll('.counter-container').length + 1;

    const template = `
        <h1 class="title">Compteur ${numeroCompteur} : 0</h1>
        <div class="button-container">
            <button class="increment-button">Incrémenter</button>
            <button class="decrement-button">Décrémenter</button>
            <button class="reset-button">Réinitialiser</button>
        </div>
    `;

    const counterContainer = document.createElement('div');
    counterContainer.classList.add('counter-container');
    counterContainer.innerHTML = template;

    document.body.appendChild(counterContainer);

    // listen events

    ecouterEvenements(counterContainer, numeroCompteur);
});

function ecouterEvenements(container, numeroCompteur) {
    let incrementButton = container.querySelector('.increment-button');
    let decrementButton = container.querySelector('.decrement-button');
    let resetButton = container.querySelector('.reset-button');
    let title = container.querySelector('.title');

    compteurs[numeroCompteur] = 0;

    function modifierAffichageCompteur(nouvelleValeurDuCompteur) {

        if (nouvelleValeurDuCompteur < 0) {
            return;
        }

        if (nouvelleValeurDuCompteur > 20) {
            title.style.color = 'red';
        } else if (nouvelleValeurDuCompteur > 10) {
            title.style.color = 'orange';
        } else {
            title.style.color = 'black';
        }

        compteurs[numeroCompteur] = nouvelleValeurDuCompteur
        title.innerHTML = `Compteur ${numeroCompteur} : ` + nouvelleValeurDuCompteur;
    }

    incrementButton.addEventListener('click', function() {
        modifierAffichageCompteur(compteurs[numeroCompteur] + 1)
    })

    decrementButton.addEventListener('click', function() {
        modifierAffichageCompteur(compteurs[numeroCompteur] - 1)
    })

    resetButton.addEventListener('click', function() {
        modifierAffichageCompteur(0)
    })
}

function sauvegarderLesCompteurs() {
    // localStorage
}

function recupererLesCompteurs() {
    // localStorage
}
