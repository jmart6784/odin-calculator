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
  if (operator == "+") {
    return add(x, y);
  } else if (operator == "-") {
    return subtract(x, y);
  } else if (operator == "*") {
    return multiply(x, y);
  } else if (operator == "/") {
    return divide(x, y);
  } else {
    calcDisplay.textContent = "";
    answerDisplay.textContent = "";
  };
};

// Calculator buttons
let calcDisplay = document.getElementById("calc-display");
let answerDisplay = document.getElementById("calc-answer");

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

// Check for double operators EX: 2++2
function validLastChar() {
  let lastChar = calcDisplay.textContent.slice(-1)[0];

  if (lastChar === "/" || lastChar === "*" || lastChar === "+" || lastChar === "-") {
    return false
  } else {
    return true
  };
};

// Operator buttons
divideBtn.addEventListener("click", function() {
  if (calcDisplay.textContent === "" || validLastChar() === false) {
    console.log("EMPTY");
  } else {
    x = parseInt(calcDisplay.textContent);
    operator = "/";
    calcDisplay.textContent += "/";
  };
});

multiplyBtn.addEventListener("click", function() {
  if (calcDisplay.textContent === "" || validLastChar() === false) {
    console.log("EMPTY");
  } else {
    x = parseInt(calcDisplay.textContent);
    operator = "*";
    calcDisplay.textContent += "*";
  };
});

subtractBtn.addEventListener("click", function() {
  if (calcDisplay.textContent === "" || validLastChar() === false) {
    console.log("EMPTY");
  } else {
    x = parseInt(calcDisplay.textContent);
    operator = "-";
    calcDisplay.textContent += "-";
  };
});

additionBtn.addEventListener("click", function() {
  if (calcDisplay.textContent === "" || validLastChar() === false) {
    console.log("EMPTY");
  } else {
    x = parseInt(calcDisplay.textContent);
    operator = "+";
    calcDisplay.textContent += "+";
  };
});

// Clear and Equal buttons
clearBtn.addEventListener("click", function() {
  calcDisplay.textContent = "";
  answerDisplay.textContent = "";
});

function getYNumber() {
  if (calcDisplay.textContent.includes("/")) {
    y = parseInt(calcDisplay.textContent.split("/")[1]);
  } else if (calcDisplay.textContent.includes("*")) {
    y = parseInt(calcDisplay.textContent.split("*")[1]);
  } else if (calcDisplay.textContent.includes("-")) {
    y = parseInt(calcDisplay.textContent.split("-")[1]);
  } else if (calcDisplay.textContent.includes("+")) {
    y = parseInt(calcDisplay.textContent.split("+")[1]);
  } else {
    calcDisplay.textContent = "";
    answerDisplay.textContent = "";
  };
};

equalBtn.addEventListener("click", function() {
  getYNumber();

  if (x <= 0 && y <= 0) {
    calcDisplay.textContent = "";
    answerDisplay.textContent = "Infinity";
  } else {
    if (isNaN(operate(operator, x, y)) || calcDisplay.textContent === "" || isNaN(x) || isNaN(y) || operator === "") {
      calcDisplay.textContent = "";
      answerDisplay.textContent = "";
    } else {
      answerDisplay.textContent = Math.round(( operate(operator, x, y) + Number.EPSILON) * 100) / 100
      calcDisplay.textContent = "";
    
      operator = "";
      x = "";
      y = "";
    };
  };
});

// setInterval(function() {
//   console.log(calcDisplay.textContent.slice(-1)[0]);
// }, 1000);