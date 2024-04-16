function userChoice(choice) {
  document.getElementById("user-choice").innerText = choice.toUpperCase();
  // Hide the other two choices
  var choices = ["rock", "paper", "scissors"];
  for (var i = 0; i < choices.length; i++) {
    if (choices[i] !== choice) {
      document.getElementById(choices[i]).style.display = "none";
    }
  }
  // Computer's choice
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById(
    "computer-choice"
  ).innerText = computerChoice.toUpperCase();

  // Display computer's choice image
  var computerImg = document.createElement("img");
  computerImg.src = computerChoice + ".png";
  computerImg.alt = computerChoice;
  document.getElementById("computer-container").innerHTML = "";
  document.getElementById("computer-container").appendChild(computerImg);

  // Determine the winner
  var userWins = parseInt(document.getElementById("user-wins").innerText);
  var computerWins = parseInt(
    document.getElementById("computer-wins").innerText
  );
  var tieGames = parseInt(document.getElementById("tie-game").innerText);
  if (choice === computerChoice) {
    document.getElementById("result").innerText = "Tie";
    tieGames++;

    // Display tie image
    var tieImg = document.createElement("img");
    tieImg.src = "tie.png";
    tieImg.alt = "Tie";
    document.getElementById("winner-container").innerHTML = "";
    document.getElementById("winner-container").appendChild(tieImg);
  } else if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("result").innerText = "User Wins";
    userWins++;
  } else {
    document.getElementById("result").innerText = "Computer Wins";
    computerWins++;
  }

  // Update win counts
  document.getElementById("user-wins").innerText = userWins;
  document.getElementById("computer-wins").innerText = computerWins;
  document.getElementById("tie-game").innerText = tieGames;

  // Display winner's image
  if (choice !== computerChoice) {
    var winnerImg = document.createElement("img");
    if (
      (choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")
    ) {
      winnerImg.src = "user.png";
    } else {
      winnerImg.src = "computer.png";
    }
    winnerImg.alt = "Winner";
    document.getElementById("winner-container").innerHTML = "";
    document.getElementById("winner-container").appendChild(winnerImg);
  }

  // Show the "Play Again" button
  document.getElementById("play-again-container").style.display = "block";
}

function resetGame() {
  // Show all choices
  var choices = ["rock", "paper", "scissors"];
  for (var i = 0; i < choices.length; i++) {
    document.getElementById(choices[i]).style.display = "inline-block";
  }

  // Reset result text
  document.getElementById("user-choice").innerText = "-";
  document.getElementById("computer-choice").innerText = "-";
  document.getElementById("result").innerText = "-";

  // Clear winner's image and info
  document.getElementById("winner").innerText = "";
  document.getElementById("winner-container").innerHTML = "";

  // Clear win counts
  //document.getElementById("user-wins").innerText = 0;
  //document.getElementById("computer-wins").innerText = 0;
  //document.getElementById("tie-game").innerText = 0;

  // Hide computer's choice image
  document.getElementById("computer-container").innerHTML = "";

  // Hide the "Play Again" button
  document.getElementById("play-again-container").style.display = "none";
}
