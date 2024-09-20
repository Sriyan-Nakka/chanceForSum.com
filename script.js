let playButton = document.getElementById("playButton");
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
      personsTurn.textContent = "Your";
      rolledNumber.textContent = "1";
      yourScore += 1;
      yourScoreNum.textContent = yourScore;
      break;

    case 2:
      dice1.style.display = "none";
      dice2.style.display = "block";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Your";
      rolledNumber.textContent = "2";
      yourScore += 2;
      yourScoreNum.textContent = yourScore;
      break;

    case 3:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "block";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Your";
      rolledNumber.textContent = "3";
      yourScore += 3;
      yourScoreNum.textContent = yourScore;
      break;

    case 4:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "block";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Your";
      rolledNumber.textContent = "4";
      yourScore += 4;
      yourScoreNum.textContent = yourScore;
      break;

    case 5:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "block";
      dice6.style.display = "none";
      personsTurn.textContent = "Your";
      rolledNumber.textContent = "5";
      yourScore += 5;
      yourScoreNum.textContent = yourScore;
      break;

    case 6:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "block";
      personsTurn.textContent = "Your";
      rolledNumber.textContent = "6";
      yourScore += 6;
      yourScoreNum.textContent = yourScore;
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
      personsTurn.textContent = "Bots";
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
      personsTurn.textContent = "Bots";
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
      personsTurn.textContent = "Bots";
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
      personsTurn.textContent = "Bots";
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
      personsTurn.textContent = "Bots";
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
      personsTurn.textContent = "Bots";
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
    document.querySelector("#invalidNumberSpan").textContent =
      "Invalid number, please try again.";
    setTimeout(() => {
      document.querySelector("#invalidNumberSpan").textContent = "";
    }, 3000);
  } else {
    goal = Number(goal);
    console.log(goal);
    gameStats.style.display = "block";
    playButton.style.display = "none";
    yourTurn();
  }
};
