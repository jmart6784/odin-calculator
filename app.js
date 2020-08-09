function add(x, y) {
  return x + y;
};

function subtract(x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
};

function divide(x, y) {
  return x / y;
};

// let operator = prompt("Add, subtract, multiply, or divide: Enter +, -, *, or /");
// let x = parseInt(prompt("Enter a number"));
// let y = parseInt(prompt("Enter another number"));

function operate(operator, x, y) {
  if (operator == "+") {
    return add(x, y);
  } else if (operator == "-") {
    return subtract(x, y);
  } else if (operator == "*") {
    return multiply(x, y);
  } else if (operator == "/") {
    return divide(x, y);
  } else {
    console.log("Error: operator invalid");
  };
};

console.log(operate(operator, x, y));