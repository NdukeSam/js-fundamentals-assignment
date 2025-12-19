// my calculator 

const display = document.getElementById('display');


// I've merged the function to prevent consecutive operators
function appendToDisplay(input) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value[display.value.length - 1];
    
    if (operators.includes(input) && operators.includes(lastChar)) {
        return;
    }

    display.value += input;
    console.log('Button pressed:', input)
    console.log(display.value);
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


