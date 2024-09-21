let playButton = document.getElementById("playButton");
let playContainer = document.getElementById("playContainer");
let gameStats = document.getElementById("gameStats");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let dice6 = document.getElementById("dice6");
let personsTurn = document.getElementById("personsTurn");
let rolledNumber = document.getElementById("rolledNumber");
let yourScoreNum = document.getElementById("yourScoreNum");
let botScoreNum = document.getElementById("botScoreNum");

let playerUsername = window.prompt(
  "Please enter your username in the given textbox. This name will be used while playing the game to represent you."
);
console.log(playerUsername);

if (playerUsername == null || playerUsername == "") {
  for (let i = 0; i < 10000; i++) {
    playerUsername = window.prompt(
      "Please enter your username in the given textbox. This name will be used while playing the game to represent you."
    );
    console.log(playerUsername);
    if (playerUsername != null && playerUsername != "") {
      break;
    }
  }
}

yourScore = 0;
botScore = 0;

function yourTurn() {
  let randNum = Math.floor(Math.random() * 6) + 1;
  console.log(randNum);
  switch (randNum) {
    case 1:
      dice1.style.display = "block";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "1";
      yourScore += 1;
      document.querySelector("#rollButtonPlayer").style.display = "none";
      document.querySelector("#rollButtonBot").style.display = "block";
      yourScoreNum.textContent = yourScore;
      if (yourScore === goal) {
        gameStats.style.display = "none";
        playContainer.style.display = "block";
        document.querySelector("#resultSpan").textContent =
          "Congratulations, you have won! Tap play to play again.";
      }
      break;

    case 2:
      dice1.style.display = "none";
      dice2.style.display = "block";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "2";
      yourScore += 2;
      document.querySelector("#rollButtonPlayer").style.display = "none";
      document.querySelector("#rollButtonBot").style.display = "block";
      yourScoreNum.textContent = yourScore;
      if (yourScore === goal) {
        gameStats.style.display = "none";
        playContainer.style.display = "block";
        document.querySelector("#resultSpan").textContent =
          "Congratulations, you have won! Tap play to play again.";
      }
      break;

    case 3:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "block";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "3";
      yourScore += 3;
      document.querySelector("#rollButtonPlayer").style.display = "none";
      document.querySelector("#rollButtonBot").style.display = "block";
      yourScoreNum.textContent = yourScore;
      if (yourScore === goal) {
        gameStats.style.display = "none";
        playContainer.style.display = "block";
        document.querySelector("#resultSpan").textContent =
          "Congratulations, you have won! Tap play to play again.";
      }
      break;

    case 4:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "block";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "4";
      yourScore += 4;
      document.querySelector("#rollButtonPlayer").style.display = "none";
      document.querySelector("#rollButtonBot").style.display = "block";
      yourScoreNum.textContent = yourScore;
      if (yourScore === goal) {
        gameStats.style.display = "none";
        playContainer.style.display = "block";
        document.querySelector("#resultSpan").textContent =
          "Congratulations, you have won! Tap play to play again.";
      }
      break;

    case 5:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "block";
      dice6.style.display = "none";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "5";
      yourScore += 5;
      document.querySelector("#rollButtonPlayer").style.display = "none";
      document.querySelector("#rollButtonBot").style.display = "block";
      yourScoreNum.textContent = yourScore;
      if (yourScore === goal) {
        gameStats.style.display = "none";
        playContainer.style.display = "block";
        document.querySelector("#resultSpan").textContent =
          "Congratulations, you have won! Tap play to play again.";
      }
      break;

    case 6:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "block";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "6";
      yourScore += 6;
      document.querySelector("#rollButtonPlayer").style.display = "none";
      document.querySelector("#rollButtonBot").style.display = "block";
      yourScoreNum.textContent = yourScore;
      if (yourScore === goal) {
        gameStats.style.display = "none";
        playContainer.style.display = "block";
        document.querySelector("#resultSpan").textContent =
          "Congratulations, you have won! Tap play to play again.";
      }
      break;
  }
}

function botTurn() {
  let randNum = Math.floor(Math.random() * 6) + 1;
  console.log(randNum);
  switch (randNum) {
    case 1:
      dice1.style.display = "block";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "1";
      botScore += 1;
      botScoreNum.textContent = botScore;
      break;

    case 2:
      dice1.style.display = "none";
      dice2.style.display = "block";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "2";
      botScore += 2;
      botScoreNum.textContent = botScore;
      break;

    case 3:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "block";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "3";
      botScore += 3;
      botScoreNum.textContent = botScore;
      break;

    case 4:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "block";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "4";
      botScore += 4;
      botScoreNum.textContent = botScore;
      break;

    case 5:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "block";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "5";
      botScore += 5;
      botScoreNum.textContent = botScore;
      break;

    case 6:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "block";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "6";
      botScore += 6;
      botScoreNum.textContent = botScore;
      break;
  }
}

//gameplay function
playButton.onclick = function () {
  let goal = document.getElementById("goal").value;
  if (goal == null || goal < 15 || goal > 500) {
    document.querySelector("#resultSpan").textContent =
      "Invalid number, please try again.";
    setTimeout(() => {
      document.querySelector("#resultSpan").textContent = "";
    }, 3000);
  } else {
    goal = Number(goal);
    console.log(goal);
    gameStats.style.display = "block";
    playContainer.style.display = "none";
    yourTurn();
  }
};
