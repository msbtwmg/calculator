var firstNumber = "";
var secondNumber = "";
var operator = "";
var displayValue = "0";
var display = document.querySelector(".display");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, op, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return NaN; // Handle invalid operations
    }
    operator = "";
}

function updateDisplay() {
    display.textContent = displayValue;

}

function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "";
    updateDisplay();
}

function numberClick(number) {
    if (displayValue === "0" || operator !== "") {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function operatorClick(op) {
    if (operator !== "") {
        secondNumber = displayValue;
        firstNumber = operate(firstNumber, operator, secondNumber);
        displayValue = firstNumber;
    } else {
        firstNumber = displayValue;
    }
    operator = op;
    updateDisplay();
}

function equalClick() {
    if (operator !== "") {
        secondNumber = displayValue;
        firstNumber = operate(firstNumber, operator, secondNumber);
        displayValue = firstNumber;
        operator = "";
        updateDisplay();
    }
}

document.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("number")) {
        numberClick(target.textContent);
    } else if (target.classList.contains("operator")) {
        operatorClick(target.textContent);
    } else if (target.classList.contains("equal")) {
        equalClick();
    } else if (target.classList.contains("clear")) {
        clearCalculator();
    }
});
