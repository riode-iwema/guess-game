// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
// Function to check the user's guess
function guessNumber(guess) {
  if (guess < randomNumber) {
    return "Oops The number is too low! Try a higher number.";
  } else if (guess > randomNumber) {
    return "Oops The number is too high! Try a lower number.";
  } else {
    return "Congratulations!, This is the correct number";
  }
}
console.log(guessNumber(89));