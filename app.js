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

// console.log(operate(operator, x, y));

// Calculator buttons
let calcDisplay = document.getElementById("calc-display");

let num0 = document.getElementById("num-0");
let num1 = document.getElementById("num-1");
let num2 = document.getElementById("num-2");
let num3 = document.getElementById("num-3");
let num4 = document.getElementById("num-4");
let num5 = document.getElementById("num-5");
let num6 = document.getElementById("num-6");
let num7 = document.getElementById("num-7");
let num8 = document.getElementById("num-8");
let num9 = document.getElementById("num-9");

let divideBtn = document.getElementById("op-divide");
let multiplyBtn = document.getElementById("op-multiply");
let subtractBtn = document.getElementById("op-subtract");
let additionBtn = document.getElementById("op-addition");

let clearBtn = document.getElementById("clear");
let equalBtn = document.getElementById("equal");

// Calculator buttons functionality
num0.addEventListener("click", function() {
  calcDisplay.textContent += "0";
});

num1.addEventListener("click", function() {
  calcDisplay.textContent += "1";
});

num2.addEventListener("click", function() {
  calcDisplay.textContent += "2";
});

num3.addEventListener("click", function() {
  calcDisplay.textContent += "3";
});

num4.addEventListener("click", function() {
  calcDisplay.textContent += "4";
});

num5.addEventListener("click", function() {
  calcDisplay.textContent += "5";
});

num6.addEventListener("click", function() {
  calcDisplay.textContent += "6";
});

num7.addEventListener("click", function() {
  calcDisplay.textContent += "7";
});

num8.addEventListener("click", function() {
  calcDisplay.textContent += "8";
});

num9.addEventListener("click", function() {
  calcDisplay.textContent += "9";
});

// Operator buttons
divideBtn.addEventListener("click", function() {
  calcDisplay.textContent += "/";
});

multiplyBtn.addEventListener("click", function() {
  calcDisplay.textContent += "*";
});

subtractBtn.addEventListener("click", function() {
  calcDisplay.textContent += "-";
});

additionBtn.addEventListener("click", function() {
  calcDisplay.textContent += "+";
});

// Clear and Equal buttons
clearBtn.addEventListener("click", function() {
  calcDisplay.textContent = "";
});

equalBtn.addEventListener("click", function() {
  
});