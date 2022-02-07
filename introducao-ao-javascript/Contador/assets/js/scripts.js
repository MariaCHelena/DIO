const currentNumberWrapper = document.getElementById('currentNumber');
let count = 0;

function increment() {
    count = count + 1;
    currentNumberWrapper.innerHTML = count;
}

function decrement() {
    count = count - 1;
    currentNumberWrapper.innerHTML = count;
}