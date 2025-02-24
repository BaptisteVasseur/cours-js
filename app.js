
let counter = 0;

const increment = () => {
    counter++;
    showCounter();
}

const decrement = () => {
    counter--;
    showCounter();
}

const reset = () => {
    counter = 0;
    showCounter();
}

const showCounter = () => {
    const counterElement = document.getElementById('title');
    counterElement.innerText = "Compteur : " + counter;
}

const incrementButton = document.getElementById('increment-button');
incrementButton.addEventListener('click', increment);

const decrementButton = document.getElementById('decrement-button');
decrementButton.addEventListener('click', decrement);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);

// setInterval(increment, 1000);

document.addEventListener('keydown', (event) => {
    if (event.key === 'i') {
        increment();
    } else if (event.key === 'd') {
        decrement();
    }
});
