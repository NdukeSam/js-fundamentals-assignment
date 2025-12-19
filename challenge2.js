// my calculator 

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay () {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}

//  this function prevents consecutive operators
function appendToDisplay(input) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value[display.value.length - 1];
    
    if (operators.includes(input) && operators.includes(lastChar)) {
        return;
    }
    
    display.value += input;
}
