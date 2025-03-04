/*
 * Application de gestion de compteurs en JavaScript
 *
 * Objectif : Permettre d'ajouter, d'incrémenter, de décrémenter et de réinitialiser des compteurs
 * avec une interface interactive.
 */

// Création d'un objet pour stocker les valeurs des compteurs
let counters = {};

// Variable qui garde en mémoire quel compteur est actuellement sélectionné
let selectedCounter = 1;

/**
 * Fonction permettant d'incrémenter la valeur d'un compteur spécifique
 * @param {number} counterNumber - Le numéro du compteur à incrémenter
 */
const increment = (counterNumber) => {
    // Augmente la valeur du compteur de 1
    counters[counterNumber]++;
    // Met à jour l'affichage du compteur après modification
    updateCounterDisplay(counterNumber);
};

/**
 * Fonction permettant de décrémenter la valeur d'un compteur spécifique
 * @param {number} counterNumber - Le numéro du compteur à décrémenter
 */
const decrement = (counterNumber) => {
    // Vérifie que la valeur du compteur est supérieure à 0 avant de décrémenter
    if (counters[counterNumber] > 0) {
        // Diminue la valeur du compteur de 1
        counters[counterNumber]--;
        // Met à jour l'affichage du compteur après modification
        updateCounterDisplay(counterNumber);
    }
};

/**
 * Fonction permettant de réinitialiser un compteur spécifique à 0
 * @param {number} counterNumber - Le numéro du compteur à réinitialiser
 */
const reset = (counterNumber) => {
    // Remet la valeur du compteur à zéro
    counters[counterNumber] = 0;
    // Met à jour l'affichage du compteur après modification
    updateCounterDisplay(counterNumber);
};

/**
 * Fonction mettant à jour l'affichage du compteur sélectionné dans l'interface
 * @param {number} counterNumber - Le numéro du compteur à mettre à jour
 */
const updateCounterDisplay = (counterNumber) => {
    // Met à jour le compteur sélectionné
    selectedCounter = counterNumber;

    // Sélectionne l'élément HTML correspondant au compteur à mettre à jour
    const counterElement = document.querySelector(`[data-counter="${counterNumber}"] .title`);

    // Vérifie que l'élément HTML existe avant d'essayer de le modifier
    if (!counterElement) return;

    // Met à jour le texte affiché pour refléter la nouvelle valeur du compteur
    counterElement.innerText = `Compteur ${counterNumber} : ${counters[counterNumber]}`;

    // Change la couleur du texte en fonction de la valeur du compteur
    if (counters[counterNumber] > 120) {
        counterElement.style.color = 'red'; // Rouge si le compteur dépasse 120
    } else if (counters[counterNumber] > 60) {
        counterElement.style.color = 'orange'; // Orange si la valeur est entre 61 et 120
    } else if (counters[counterNumber] > 0) {
        counterElement.style.color = 'green'; // Vert si la valeur est entre 1 et 60
    } else {
        counterElement.style.color = 'black'; // Noir si la valeur est 0
    }
};

// Sélectionne tous les éléments HTML représentant les compteurs
const counterElements = document.querySelectorAll('[data-counter]');

// Parcourt chaque élément de compteur pour l'initialiser et ajouter des événements
counterElements.forEach((counterElement) => {
    // Récupère le numéro du compteur à partir de l'attribut data-counter
    let counterNumber = parseInt(counterElement.dataset.counter);

    // Initialise la valeur du compteur à 0 dans l'objet counters
    counters[counterNumber] = 0;

    // Sélectionne les boutons d'incrémentation, décrémentation et de réinitialisation
    const incrementButton = counterElement.querySelector('.increment-button');
    const decrementButton = counterElement.querySelector('.decrement-button');
    const resetButton = counterElement.querySelector('.reset-button');

    // Ajoute un événement au bouton d'incrémentation pour appeler la fonction increment
    incrementButton.addEventListener('click', () => increment(counterNumber));

    // Ajoute un événement au bouton de décrémentation pour appeler la fonction decrement
    decrementButton.addEventListener('click', () => decrement(counterNumber));

    // Ajoute un événement au bouton de réinitialisation pour appeler la fonction reset
    resetButton.addEventListener('click', () => reset(counterNumber));
});

// Ajoute une gestion des interactions au clavier
document.addEventListener('keydown', (event) => {
    // Vérifie si la touche pressée est la flèche du haut pour incrémenter le compteur sélectionné
    if (event.key === 'ArrowUp') {
        increment(selectedCounter);
        // Vérifie si la touche pressée est la flèche du bas pour décrémenter le compteur sélectionné
    } else if (event.key === 'ArrowDown') {
        decrement(selectedCounter);
        // Vérifie si la touche pressée est "Enter" pour réinitialiser le compteur sélectionné
    } else if (event.key === 'Enter') {
        reset(selectedCounter);
    }
});
