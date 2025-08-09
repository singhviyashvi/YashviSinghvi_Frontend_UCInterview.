let rNumber = Math.floor(Math.random() * 100) + 1;
let lives = 7;
let previousGuesses = [];

const guessBtn = document.querySelector("#guessBtn");
const userInput = document.querySelector("#userGuess");
const hintText = document.querySelector("#hintText");
const resultText = document.querySelector("#resultText");
const livesText = document.querySelector("#lives");
const guessList = document.querySelector("#guessList");

function endGame() {
  userInput.disabled = true;
  guessBtn.disabled = true;
}

guessBtn.addEventListener("click", () => {
  const guess = Number(userInput.value);

  previousGuesses.push(guess);
  const listItem = document.createElement("li");
  listItem.textContent = guess;
  guessList.append(listItem);

  lives--;
  livesText.textContent = lives;

  if (guess === rNumber) {
    resultText.textContent = "Correct! You win!";
    hintText.textContent = "";
    endGame();
  } else if (lives === 0) {
    resultText.textContent = `You lost! The number was ${rNumber}.`;
    hintText.textContent = "";
    endGame();
  } else {
    if(guess < rNumber)
      hintText.textContent="Too low!";
    else if(guess > rNumber)
      hintText.textContent="Too high!";
   
  }

  userInput.value = "";
});


