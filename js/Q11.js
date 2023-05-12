function calculatorNumber() {
    var firstNumber = parseFloat(prompt("Enter the first number:"));
    var secondNumber = parseFloat(prompt("Enter the second number:"));
    var operation = prompt("Enter the operation (+, -, *, /, %):");
    var result;
  
    if (operation === "+") {
      result = firstNumber + secondNumber;
    } else if (operation === "-") {
      result = firstNumber - secondNumber;
    } else if (operation === "*") {
      result = firstNumber * secondNumber;
    } else if (operation === "/") {
      result = firstNumber / secondNumber;
    } else if (operation === "%") {
      result = firstNumber % secondNumber;
    } else {
      console.log("Invalid operation");
      return;
    }
  
    console.log("Result: " + result);
  }
  
  calculatorNumber();
  