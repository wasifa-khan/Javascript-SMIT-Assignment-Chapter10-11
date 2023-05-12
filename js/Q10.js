// Checking Temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

  if (temperature > 40) {
    console.log("It is too hot outside.");
  } else if (temperature > 30) {
    console.log("The Weather today is Normal.");
  } else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
  } else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
  } else {
    console.log("The temperature is below 10 degrees.");
  }