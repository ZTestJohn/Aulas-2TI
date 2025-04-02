const display = document.getElementById("display");
let expression = "";

function calculate(expression) {
    return eval(expression);
}

function clearDisplay() {
    expression = "";
    display.value = expression;
}

function addToCalculate(value) {
    expression += value;
    display.value = expression;
}

function equal(){
    let result = calculate(expression);
    expression = result.toString();
    display.value = expression
}