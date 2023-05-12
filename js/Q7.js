function numberGuess() {
    var secretNumber = Math.floor(Math.random() * 10) + 1; // Generating a random secret number between 1 and 10
    var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
  
    if (userGuess === secretNumber) {
      console.log("Bingo! Correct answer");
    } else if (userGuess === secretNumber + 1) {
      console.log("Close enough to the correct answer");
    } else {
      console.log("Oops! Incorrect answer");
    }
  }
  
  numberGuess();
  