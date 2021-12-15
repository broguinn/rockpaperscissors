$(".play").click(function() {
  // this is the range of 0 to 2.999
  // we want three chunks between three answers
  // 3 / 3 === 1
  // 0 -> 1 rock
  // 1 -> 2 paper
  // 2 -> 3 scissors
  let randomNumber = Math.random() * 3;
  let choice = $(".input").val();
  $(".userChoice").text(choice);
  
  let computerChoice = "No choice.";
  
  if (randomNumber <= 1) {
    computerChoice = "Rock";
  } else if (randomNumber > 1 
             && randomNumber <= 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  
  // once we have the word we care about
  $(".computerChoice").text(computerChoice);
  
  if (choice === computerChoice) {
    $(".result").text("tie");
  }
});
