const display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;   

}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    display.value = '';
}

function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function calculate() {
    if (operator === '+') {
         result = parseFloat(previousNumber) + parseFloat(currentNumber);
    } else if (operator === '-') {
         result = parseFloat(previousNumber) - parseFloat(currentNumber);
    } else if (operator === '*') {
         result = parseFloat(previousNumber) * parseFloat(currentNumber);
    } else if (operator === '/') {
         result = parseFloat(previousNumber) / parseFloat(currentNumber);   

    }
    currentNumber = result;
    previousNumber = '';
    operator = '';
    display.value = result;
}

function chooseOperator(op) {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
}