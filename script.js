let currentInput = '';
let isResultCalculated = false;

function appendToDisplay(value) {
    if (isResultCalculated) {
        document.getElementById('display').value = '';
        isResultCalculated = false;
    }
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
        isResultCalculated = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
