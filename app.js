let operator;
let x;
let y;

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

function operate(operator, x, y) {
  if (operator === "+") {
    return add(x, y);
  } else if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "*") {
    return multiply(x, y);
  } else if (operator === "/") {
    return divide(x, y);
  } else {
    calcDisplay.textContent = "";
  };
};

// Calculator buttons
let allBtns = document.querySelectorAll(".calc-btn");
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
let backspaceBtn = document.getElementById("delete");
let equalBtn = document.getElementById("equal");

// Calculator buttons functionality
num0.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "0";
});

num1.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "1";
});

num2.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "2";
});

num3.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "3";
});

num4.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "4";
});

num5.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "5";
});

num6.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "6";
});

num7.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "7";
});

num8.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "8";
});

num9.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "9";
});

// Precalculate math to be able to chain functions
let preArray = [];

function preCalculate(operand) {

  let y = calcDisplay.textContent

  if (operand === "/") {
    if (y !== "") {
      calcDisplay.textContent = Math.round(( operate("/", preArray[0], y) + Number.EPSILON) * 100) / 100;
      preArray = [];
    };
  } else if (operand === "*") {
    if (y !== "") {
      calcDisplay.textContent = Math.round(( operate("*", preArray[0], y) + Number.EPSILON) * 100) / 100;
      preArray = [];
    };
  } else if (operand === "-") {
    if (y !== "") {
      calcDisplay.textContent = Math.round(( operate("-", preArray[0], y) + Number.EPSILON) * 100) / 100;
      preArray = [];
    };
  } else if (operand === "+") {
    if (y !== "") {
      calcDisplay.textContent = Math.round(( operate("+", preArray[0], y) + Number.EPSILON) * 100) / 100;
      preArray = [];
    };
  };
};

// Operator buttons
divideBtn.addEventListener("click", function() {
  if (calcDisplay.textContent !== "") {
    x = parseInt(calcDisplay.textContent);

    if ( isNaN(x) === true ) {
      calcDisplay.textContent = "";
    } else {
      preArray.push(x, "/");
      calcDisplay.textContent = "";
      preCalculate("/");
    };
  };
});

multiplyBtn.addEventListener("click", function() {
  if (calcDisplay.textContent !== "") {
    x = parseInt(calcDisplay.textContent);

    if ( isNaN(x) === true ) {
      calcDisplay.textContent = "";
    } else {
      preArray.push(x, "*");
      calcDisplay.textContent = "";
      preCalculate("*");
    };
  };
});

subtractBtn.addEventListener("click", function() {
  if (calcDisplay.textContent !== "") {
    x = parseInt(calcDisplay.textContent);

    if ( isNaN(x) === true ) {
      calcDisplay.textContent = "";
    } else {
      preArray.push(x, "-");
      calcDisplay.textContent = "";
      preCalculate("-");
    };
  };
});

additionBtn.addEventListener("click", function() {
  if (calcDisplay.textContent !== "") {
    x = parseInt(calcDisplay.textContent);

    if ( isNaN(x) === true ) {
      calcDisplay.textContent = "";
    } else {
      preArray.push(x, "+");
      calcDisplay.textContent = "";
      preCalculate("-");
    };
  };
});

// Clear, Backspace and Equal buttons
clearBtn.addEventListener("click", function() {
  calcDisplay.textContent = "";
});

backspaceBtn.addEventListener("click", function () {
  calcDisplay.textContent = calcDisplay.textContent.substring(0, calcDisplay.textContent.length - 1);
});

equalBtn.addEventListener("click", function() {
  // Send last number in operation to array
  preArray.push(parseInt(calcDisplay.textContent));

  if (isNaN(operate(preArray[1], preArray[0], preArray[2])) || calcDisplay.textContent === "" || isNaN(preArray[0]) || isNaN(preArray[2]) || preArray === "") {
    // Error handling and array reset
    calcDisplay.textContent = "Error";
    preArray = [];
  } else {
    calcDisplay.textContent = Math.round(( operate(preArray[1], preArray[0], preArray[2]) + Number.EPSILON) * 100) / 100;

    // reset array
    preArray = [];
  };
});