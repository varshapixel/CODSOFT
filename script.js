let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.getElementById("display");

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function appendOperator(op) {
    if (currentNumber === "") return;
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    display.value = "";
}

function appendDecimal() {
    if (currentNumber.includes(".")) return;
    currentNumber += ".";
    display.value = currentNumber;
}

function calculate() {
    if (currentNumber === "" || operator === "") return;
    let result = 0;
    switch (operator) {
        case "+":
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
    }
    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
    display.value = currentNumber;
}
function del(){
   display.value=display.value.slice(0,-1);
}