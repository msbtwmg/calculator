var firstNumber, secondNumber, operator, displayValue;


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
function getButtonText(button) {
    var buttonText = button.textContent;
    return buttonText;
}

function displayNumButton(e) {
    if (e.target.classList.contains("number")) {
        var display = document.querySelector(".display");
        displayValue = display.innerHTML += getButtonText(e.target);
    }

}


function operateButton(e) {
    if (e.target.classList.contains("operator")) { 
        firstNumber = displayValue;    
        var display = document.querySelector(".display");
        display.textContent = "";
       
        
    }
}

document.addEventListener("click", displayNumButton);
document.addEventListener("click", operateButton);


console.log(firstNumber);