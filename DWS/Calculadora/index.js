const display = document.getElementById("display");
let expression = "";

function calculate(expression) {
  return eval(expression);
}

function clearDisplay() {
  expression = "";
  display.value = expression;
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function addToCalculate(value) {
  expression += value;
  display.value = expression;
}

function equal() {
  try {
    if (!expression || /[\+\-\*\/]$/.test(expression)) {
      throw new Error("Syntax ERROR");
    }

    let result = calculate(expression);
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      throw new Error("Math ERROR");
    }

    expression = result.toString();
    display.value = expression;
  } catch (error) {
    display.value = error.message || "Syntax ERROR";
    expression = ""; 
  }
}
