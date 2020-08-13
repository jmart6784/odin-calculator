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
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "0";
});

num1.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "1";
});

num2.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "2";
});

num3.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "3";
});

num4.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "4";
});

num5.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "5";
});

num6.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "6";
});

num7.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "7";
});

num8.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "8";
});

num9.addEventListener("click", function() {
  if (calcDisplay.textContent === "Infinity" || calcDisplay.textContent === "Error" || calcDisplay.textContent === "NaN" || calcDisplay.textContent === "-Infinity") {
    calcDisplay.textContent = "";
  };
  calcDisplay.textContent += "9";
});

// Precalculate math to be able to chain functions
let preArray = [];
let evaluated = [];

// Operator buttons
divideBtn.addEventListener("click", function() {
  if (calcDisplay.textContent !== "") {

    if ( isNaN(parseInt(calcDisplay.textContent)) === true ) {
      calcDisplay.textContent = "";
    } else {
      // Check if 1 number and a operator are present in array
      if (preArray.length === 2) {
        // 0 / 0 Error Handling
        if (preArray[1] === "/" && preArray[0] === 0 && parseInt(calcDisplay.textContent) === 0) {
          calcDisplay.textContent = "Error";
        } else {
          // answer to be placed in evaluated array
          let ans = Math.round(( operate(preArray[1], preArray[0], parseInt(calcDisplay.textContent)) + Number.EPSILON) * 100) / 100;
          evaluated = [];
          evaluated.push(ans);
  
          preArray = [];
          preArray.push(ans, "/");
          calcDisplay.textContent = "";
        };
      } else {
        preArray.push(parseInt(calcDisplay.textContent), "/");
        calcDisplay.textContent = "";
      };
    };
  };
});

multiplyBtn.addEventListener("click", function() {
  if (calcDisplay.textContent !== "") {

    if ( isNaN(parseInt(calcDisplay.textContent)) === true ) {
      calcDisplay.textContent = "";
    } else {
      if (preArray.length === 2) {
        let ans = Math.round(( operate(preArray[1], preArray[0], parseInt(calcDisplay.textContent)) + Number.EPSILON) * 100) / 100;

        evaluated = [];
        evaluated.push(ans);

        preArray = [];
        preArray.push(ans, "*");
        calcDisplay.textContent = "";
      } else {
        preArray.push(parseInt(calcDisplay.textContent), "*");
        calcDisplay.textContent = "";
      };
    };
  };
});

subtractBtn.addEventListener("click", function() {
  if (calcDisplay.textContent !== "") {

    if ( isNaN(parseInt(calcDisplay.textContent)) === true ) {
      calcDisplay.textContent = "";
    } else {
      if (preArray.length === 2) {
        let ans = Math.round(( operate(preArray[1], preArray[0], parseInt(calcDisplay.textContent)) + Number.EPSILON) * 100) / 100;;
        evaluated = [];
        evaluated.push(ans);

        preArray = [];
        preArray.push(ans, "-");
        calcDisplay.textContent = "";
      } else {
        preArray.push(parseInt(calcDisplay.textContent), "-");
        calcDisplay.textContent = "";
      };
    };
  };
});

additionBtn.addEventListener("click", function() {
  if (calcDisplay.textContent !== "") {

    if ( isNaN(parseInt(calcDisplay.textContent)) === true ) {
      calcDisplay.textContent = "";
    } else {
      if (preArray.length === 2) {
        let ans = Math.round(( operate(preArray[1], preArray[0], parseInt(calcDisplay.textContent)) + Number.EPSILON) * 100) / 100;;
        evaluated = [];
        evaluated.push(ans);

        preArray = [];
        preArray.push(ans, "+");
        calcDisplay.textContent = "";
      } else {
        preArray.push(parseInt(calcDisplay.textContent), "+");
        calcDisplay.textContent = "";
      };
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
  if (isNaN(parseInt(calcDisplay.textContent)) === true) {
    calcDisplay.textContent = "Error";

    preArray = [];
    evaluated = [];
  } else {
    if (evaluated.length > 0 ) {
      calcDisplay.textContent = Math.round(( operate(preArray[1], evaluated[0], parseInt(calcDisplay.textContent)) + Number.EPSILON) * 100) / 100;
  
      preArray = [];
      evaluated = [];
    } else if (preArray.length === 2) {
      calcDisplay.textContent = Math.round(( operate(preArray[1], preArray[0], parseInt(calcDisplay.textContent)) + Number.EPSILON) * 100) / 100;
  
      preArray = [];
      evaluated = [];
    } else {
      calcDisplay.textContent = "Error";
      preArray = [];
      evaluated = [];
    };
  };
});