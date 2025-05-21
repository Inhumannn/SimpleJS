function init() {
  user();
  bot();
  actionBot();
}
init();

//
let userClick = false;
//

const pointUsers = document.querySelector(".pointUsers");
const pointBots = document.querySelector(".pointBots");
//
//
function bot(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function user() {
  const leaf = document.querySelector(".fa-hand");
  leaf.addEventListener("click", () => {
    userClick = true;
    const leafDisplay = `<i class="fa-solid fa-hand" style="font-size: 40px"></i>`;
    choiseUsers.innerHTML = leafDisplay;
  });

  const scissors = document.querySelector(".fa-hand-scissors");
  scissors.addEventListener("click", () => {
    userClick = true;

    const scissorsDisplay = `<i class="fa-solid fa-hand-scissors" style="font-size: 40px;"></i>`;
    choiseUsers.innerHTML = scissorsDisplay;
  });

  const rock = document.querySelector(".fa-hand-back-fist");
  rock.addEventListener("click", () => {
    userClick = true;
    const rockDisplay = `<i class="fa-solid fa-hand-back-fist" style="font-size: 40px;"></i>`;
    choiseUsers.innerHTML = rockDisplay;
  });
}

const choiseUsers = document.querySelector("#choiseUsers");
function actionBot() {
  const displayChoiseBot = document.querySelector("#choiseBots");
  if (userClick === true) {
    const choiseBot = bot(1, 3);
    if (choiseBot === 1) {
      const leafDisplay = `<i class="fa-solid fa-hand" style="font-size: 40px"></i>`;
      displayChoiseBot.innerHTML = leafDisplay;
    }
    if (choiseBot === 2) {
      const scissorsDisplay = `<i class="fa-solid fa-hand-scissors" style="font-size: 40px;"></i>`;
      displayChoiseBot.innerHTML = scissorsDisplay;
    }
    if (choiseBot === 3) {
      const rockDisplay = `<i class="fa-solid fa-hand-back-fist" style="font-size: 40px;"></i>`;
      displayChoiseBot.innerHTML = rockDisplay;
    }
  }
}
