document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".button button");
  
    let currentInput = "";
    let prevInput = "";
    let operator = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonText = button.textContent;
  
        if (buttonText === "AC") {
          clearCalculator();
        } else if (buttonText === "=") {
          calculateResult();
        } else {
          updateInput(buttonText);
        }
      });
    });
  
    function updateInput(value) {
      if (value === "÷" || value === "×" || value === "-" || value === "+") {
        if (currentInput !== "") {
          prevInput = currentInput;
          currentInput = "";
          operator = value;
        }
      } else {
        currentInput += value;
      }
  
      updateDisplay();
    }
  
    function updateDisplay() {
      display.textContent = currentInput !== "" ? currentInput : "0";
    }
  
    function clearCalculator() {
      currentInput = "";
      prevInput = "";
      operator = "";
      updateDisplay();
    }
  
    function calculateResult() {
      if (currentInput !== "" && prevInput !== "" && operator !== "") {
        const num1 = parseFloat(prevInput);
        const num2 = parseFloat(currentInput);
  
        switch (operator) {
          case "÷":
            currentInput = num1 / num2;
            break;
          case "×":
            currentInput = num1 * num2;
            break;
          case "-":
            currentInput = num1 - num2;
            break;
          case "+":
            currentInput = num1 + num2;
            break;
        }
  
        updateDisplay();
        prevInput = "";
        operator = "";
      }
    }
  });