

let counter = 0;
let incrementButton = document.getElementById('increment-button');
let decrementButton = document.getElementById('decrement-button');
let titleElement = document.getElementById('title');

console.log(incrementButton, decrementButton, titleElement);

let incrementCounter = () => {
    counter = counter + 1;
    console.log(counter);
};

let decrementCounter = () => {
    counter = counter - 1;
    console.log(counter);
};

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
