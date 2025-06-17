const incrementButton = document.querySelector('#incrementButton');

const decrementButton = document.querySelector('#decrementButton')

const resetButton = document.querySelector('#resetButton')

const counterNumber = document.querySelector('#counterNumber');

var counter = 0;

incrementButton.addEventListener('click', () => {
    function1();
})

decrementButton.addEventListener('click', () => {
    function2()
})

resetButton.addEventListener('click', () => {
    function3()
})


function changeColor() {
    if (counter < 10) {
        // bleu 
        counterNumber.style.color = "blue";
    } else if (counter < 20) {
        // orange
        counterNumber.style.color = "orange";
    } else {
        // red
        counterNumber.style.color = "red";
    }
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'i') {
        function1()
    } else if (keyName === 'd') {
        function2()
    } else if (keyName === 'r') {
        function3()
    } 
})

function function1() {
    counter = counter + 1;

    if (counter > 100) {
        counter = 100;
    }

    counterNumber.innerHTML = counter;
    changeColor()
}

function function2() {
    counter = counter - 1;

    if(counter < 0) {
        counter = 0;
        return;
    }

    // ou counter--
    counterNumber.innerHTML = counter;
    changeColor()
}

function function3() {
    counter = 0;
    counterNumber.innerHTML = counter;
    changeColor();
}