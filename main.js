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

var firstNumber, secondNumber, operator;

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
        case "x":
            multiply(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
        default:
            break;
    }
}


document.addEventListener("click", (e) =>  {
    if (e.target.classList.contains("number")) {
        var display = document.querySelector(".display");
        display.innerHTML += "test";
    }
});


console.log(divide(12,3));