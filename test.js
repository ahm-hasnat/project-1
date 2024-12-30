
// Function to randomly choose Rock, Paper, or Scissors for the computer
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner between the player's and computer's choices
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
      return "It's a tie!";
  }
  if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
      return "You win!";
  } else {
      return "You lose!";
  }
}

// Function to play the game
function playGame(playerChoice) {
  // Get computer's choice
  const computerChoice = getComputerChoice();

  // Determine the winner
  const result = determineWinner(playerChoice, computerChoice);

  // Display the results
  document.getElementById('result').textContent = result;
  document.getElementById('computerChoice').textContent = `Computer chose: ${computerChoice}`;
}
