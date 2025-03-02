const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const showWinner = document.querySelector("#showWinner"); // Make sure this exists in HTML

rockBtn.addEventListener("click", () => {
  let computerChoice = randomChoice(); // Get random computer choice
  determineWinner("rock", computerChoice); // Pass both choices to determineWinner
});

paperBtn.addEventListener("click", () => {
  let computerChoice = randomChoice();
  determineWinner("paper", computerChoice);
});

scissorsBtn.addEventListener("click", () => {
  let computerChoice = randomChoice();
  determineWinner("scissors", computerChoice);
});

const randomChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    showWinner.innerHTML = `It's a Tie! 🤝`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    showWinner.innerHTML = `You Win! 🎉`;
  } else {
    showWinner.innerHTML = `Computer Wins! 🤖`;
  }
};
