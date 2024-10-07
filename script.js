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

let yourScore = 0;
let botScore = 0;

// document.querySelector("#rollButtonPlayer").style.display = "none";
// document.querySelector("#rollButtonBot").style.display = "none";

function yourTurn() {
  let randNum = Math.floor(Math.random() * 6) + 1;
  console.log(randNum);
  switch (randNum) {
    case 1:
      document.querySelector("#rollButtonPlayer").style.display = "none";
      dice1.style.display = "block";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "1";
      yourScore = yourScore + 1;
      if(yourScore < yourScore + 1){
        console.log("player score add works! added 1");
      }
      yourScoreNum.textContent = yourScore;
      setTimeout(() => {
      checkWinFunctionPlayer();
      }, 2000);
      break;

    case 2:
      document.querySelector("#rollButtonPlayer").style.display = "none";
      dice1.style.display = "none";
      dice2.style.display = "block";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "2";
      yourScore = yourScore + 2;
      if(yourScore < yourScore + 2){
        console.log("player score add works! added 2");
      }
      yourScoreNum.textContent = yourScore;
      setTimeout(() => {
        checkWinFunctionPlayer();
        }, 2000);
        break;

      case 3:
        document.querySelector("#rollButtonPlayer").style.display = "none";
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "block";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        personsTurn.textContent = playerUsername + "'s";
        rolledNumber.textContent = "3";
        yourScore = yourScore + 3;
        if(yourScore < yourScore + 3){
          console.log("player score add works! added 3");
        }  
        yourScoreNum.textContent = yourScore;
        setTimeout(() => {
          checkWinFunctionPlayer();
          }, 2000);
          break;

    case 4:
      document.querySelector("#rollButtonPlayer").style.display = "none";
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "block";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "4";
      yourScore = yourScore + 4;
      if(yourScore < yourScore + 4){
        console.log("player score add works! added 4");
      }
      yourScoreNum.textContent = yourScore;
      setTimeout(() => {
        checkWinFunctionPlayer();
        }, 2000);
        break;

      case 5:
        document.querySelector("#rollButtonPlayer").style.display = "none";
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "block";
        dice6.style.display = "none";
        personsTurn.textContent = playerUsername + "'s";
        rolledNumber.textContent = "5";
        yourScore = yourScore + 5;
        if(yourScore < yourScore + 5){
          console.log("player score add works! added 5");
        }  
        yourScoreNum.textContent = yourScore;
        setTimeout(() => {
          checkWinFunctionPlayer();
          }, 2000);
          break;

    case 6:
      document.querySelector("#rollButtonPlayer").style.display = "none";
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "block";
      personsTurn.textContent = playerUsername + "'s";
      rolledNumber.textContent = "6";
      yourScore = yourScore + 6;
      if(yourScore < yourScore + 6){
        console.log("player score add works! added 6");
      }
      yourScoreNum.textContent = yourScore;
      setTimeout(() => {
        checkWinFunctionPlayer();
        }, 2000);
        break;
  }
}

function botTurn() {
  let randNum = Math.floor(Math.random() * 6) + 1;
  console.log(randNum);
  switch (randNum) {
    case 1:
      document.querySelector("#rollButtonBot").style.display = "none";
      dice1.style.display = "block";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "1";
      botScore += 1;
      if(botScore < botScore + 1){
        console.log("bot score add works! added 1");
      }
      botScoreNum.textContent = botScore;
      setTimeout(() => {
        checkWinFunctionBot();
        }, 2000);
        break;

    case 2:
      document.querySelector("#rollButtonBot").style.display = "none";
      dice1.style.display = "none";
      dice2.style.display = "block";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "2";
      botScore += 2;
      if(botScore < botScore + 2){
        console.log("bot score add works! added 2");
      }
      botScoreNum.textContent = botScore;
      setTimeout(() => {
        checkWinFunctionBot();
        }, 2000);
        break;

    case 3:
      document.querySelector("#rollButtonBot").style.display = "none";
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "block";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "3";
      botScore += 3;
      if(botScore < botScore + 3){
        console.log("bot score add works! added 3");
      }
      botScoreNum.textContent = botScore;
      setTimeout(() => {
        checkWinFunctionBot();
        }, 2000);
        break;

    case 4:
      document.querySelector("#rollButtonBot").style.display = "none";
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "block";
      dice5.style.display = "none";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "4";
      botScore += 4;
      if(botScore < botScore + 4){
        console.log("bot score add works! added 4");
      }
      botScoreNum.textContent = botScore;
      setTimeout(() => {
        checkWinFunctionBot();
        }, 2000);
        break;

    case 5:
      document.querySelector("#rollButtonBot").style.display = "none";
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "block";
      dice6.style.display = "none";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "5";
      botScore += 5;
      if(botScore < botScore + 5){
        console.log("bot score add works! added 5");
      }
      botScoreNum.textContent = botScore;
      setTimeout(() => {
        checkWinFunctionBot();
        }, 2000);
        break;

    case 6:
      document.querySelector("#rollButtonBot").style.display = "none";
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "block";
      personsTurn.textContent = "Bot's";
      rolledNumber.textContent = "6";
      botScore += 6;
      if(botScore < botScore + 1){
        console.log("bot score add works! added 6");
      }
      botScoreNum.textContent = botScore;
      setTimeout(() => {
        checkWinFunctionBot();
        }, 2000);
        break;
  }
}

//gameplay function
playButton.onclick = function () {
  yourScore = 0;
  botScore = 0;
  yourScoreNum.textContent = yourScore;
  botScoreNum.textContent = botScore;
  let goal = document.querySelector("#goal").value;
  goal = Number(goal);
  if (goal == null || goal < 15 || goal > 500) {
    document.querySelector("#resultSpan").textContent =
      "Invalid number, please try again.";
    setTimeout(() => {
      document.querySelector("#resultSpan").textContent = "";
    }, 3000);
  } else {
    console.log(goal);
    gameStats.style.display = "block";
    playContainer.style.display = "none";
    yourTurn();
  }
};

function winFunctionPlayer() {
  dice1.style.display = "none";
  dice2.style.display = "none";
  dice3.style.display = "none";
  dice4.style.display = "none";
  dice5.style.display = "none";
  dice6.style.display = "none";
  gameStats.style.display = "none";
  playContainer.style.display = "block";
  document.querySelector("#resultSpan").innerHTML =
    "💐Congratulations, you have won!";
  document.querySelector("#resultSpan2").innerHTML =
    "Tap Play to play again.";
    document.querySelector("#resultSpan").style.fontSize = "1.8rem";
  return;
}

function winFunctionBot() {
  dice1.style.display = "none";
  dice2.style.display = "none";
  dice3.style.display = "none";
  dice4.style.display = "none";
  dice5.style.display = "none";
  dice6.style.display = "none";
  gameStats.style.display = "none";
  playContainer.style.display = "block";
  document.querySelector("#resultSpan").innerHTML =
    "😞You have lost! The bot has won.";
  document.querySelector("#resultSpan2").innerHTML =
    "Tap Play to play again.";
  document.querySelector("#resultSpan").style.fontSize = "1.8rem";
  return;
}

function checkWinFunctionPlayer(){
  if (yourScore >= goal.value) {
    winFunctionPlayer();
  }
  else{
    document.querySelector("#rollButtonPlayer").style.display = "none";
    document.querySelector("#rollButtonBot").style.display = "block";
    console.log(`goal is ${goal.value}, player score is ${yourScore}`);
  }
}

function checkWinFunctionBot(){
  if (botScore >= goal.value) {
    winFunctionBot();
  }
  else{
    document.querySelector("#rollButtonPlayer").style.display = "block";
    document.querySelector("#rollButtonBot").style.display = "none";
    console.log(`goal is ${goal.value}, bot score is ${botScore}`);
  }
}

