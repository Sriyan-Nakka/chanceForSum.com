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
let randNum;
let turn;
const stupidNum = 100000000;

yourScore = 0;
botScore = 0;

// bot = false
// you = true

turn = true;

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
      personsTurn.innerHTML = "Your";
      rolledNumber.innerHTML = "1";
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
      personsTurn.innerHTML = "Your";
      rolledNumber.innerHTML = "2";
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
      personsTurn.innerHTML = "Your";
      rolledNumber.innerHTML = "3";
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
      personsTurn.innerHTML = "Your";
      rolledNumber.innerHTML = "4";
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
      personsTurn.innerHTML = "Your";
      rolledNumber.innerHTML = "5";
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
      personsTurn.innerHTML = "Your";
      rolledNumber.innerHTML = "6";
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
      personsTurn.innerHTML = "Bots";
      rolledNumber.innerHTML = "1";
      yourScore += 1;
      botScoreNum.textContent = botScore;
      break;

    case 2:
      dice1.style.display = "none";
      dice2.style.display = "block";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.innerHTML = "Bots";
      rolledNumber.innerHTML = "2";
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
      personsTurn.innerHTML = "Bots";
      rolledNumber.innerHTML = "3";
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
      personsTurn.innerHTML = "Bots";
      rolledNumber.innerHTML = "4";
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
      personsTurn.innerHTML = "Bots";
      rolledNumber.innerHTML = "5";
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
      personsTurn.innerHTML = "Bots";
      rolledNumber.innerHTML = "6";
      botScore += 6;
      botScoreNum.textContent = botScore;
      break;
  }
}

//gameplay function
playButton.onclick = function () {
  gameStats.style.display = "block";
  let goal = document.getElementById("goal").value;
  goal = Number(goal);
  console.log(goal);
};
