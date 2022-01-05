$(".play").click(function () {
  // this is the range of 0 to 2.999
  // we want three chunks between three answers
  // 3 / 3 === 1
  // 0 -> 1 rock
  // 1 -> 2 paper
  // 2 -> 3 scissors

  // Set up variables for later
  let randomNumber = Math.random() * 3;
  let choice = $(".input").val();

  // Set some info on the page
  $(".userChoice").text(choice);
  $(".result").text("");

  // Get the computer choice
  let computerChoice = "No choice.";
  if (randomNumber <= 1) {
    computerChoice = "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  // Set computer choice once we have the word we care about
  $(".computerChoice").text(computerChoice);

  // Find the winner
  let rockWon = choice === "Rock" && computerChoice === "Scissors";
  let paperWon = choice === "Paper" && computerChoice === "Rock";
  let scissorsWon = choice === "Scissors" && computerChoice === "Paper";
  let userWon = rockWon || paperWon || scissorsWon;
  
  // Get the result
  let result = "";
  if (choice === computerChoice) {
    result = "Tie.";
  } else if (userWon) {
    result = "You win.";
  } else {
    result = "You lose. Try again.";
  }

  // Set the result
  $(".result").text(result);
});
