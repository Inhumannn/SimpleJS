class Game {
  constructor(scoreUser, scoreBot, choiceUser, choiceBot) {
    this.scoreUser = 0;
    this.scoreBot = 0;
    this._counter = 5;
    this.isEndGame = false;
    this.scoreUserDisplay = scoreUser;
    this.scoreBotDisplay = scoreBot;
    this.choiceUserDisplay = choiceUser;
    this.choiceBotDisplay = choiceBot;
    this.currentPlayer = "user";
  }

  reset() {
    this.scoreUser = 0;
    this.scoreBot = 0;
    this._counter = 5;
    this.isEndGame = false;
    this.updateScoreDisplay();
    this.updateChoiceDisplay();
    this.currentPlayer = "user";
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === "user" ? "bot" : "user";
  }

  updateScoreDisplay() {
    this.scoreUserDisplay.textContent = this.scoreUser;
    this.scoreBotDisplay.textContent = this.scoreBot;
  }

  updateChoiceDisplay(choice) {
    const choices = [
      `<i data-choice="paper" class="fa-solid fa-hand"></i>`,
      `<i data-choice="scissors" class="fa-solid fa-hand-scissors"></i>`,
      `<i data-choice="rock" class="fa-solid fa-hand-back-fist"></i>`,
    ];
    // Vérifier le current player et mettre à jour le choiceXXXDisplay en fonction du joueur
    switch (this.currentPlayer) {
      case "user":
        // this.choiceUserDisplay.innerHTML = `<i data-choice="paper" class="fa-solid fa-hand"></i>`;
        // console.log("User choose : ", choice);
        if (choice === "paper") {
          this.choiceUserDisplay.innerHTML = choices[0];
        }
        if (choice === "scissors") {
          this.choiceUserDisplay.innerHTML = choices[1];
        }
        if (choice === "rock") {
          this.choiceUserDisplay.innerHTML = choices[2];
        }

        break;
      case "bot":
        // console.log("Bot choose : ", choice);

        if (choice === "paper") {
          this.choiceBotDisplay.innerHTML = choices[0];
        }
        if (choice === "scissors") {
          this.choiceBotDisplay.innerHTML = choices[1];
        }
        if (choice === "rock") {
          this.choiceBotDisplay.innerHTML = choices[2];
        }
        break;
      default:
        return;
    }

    this.changePlayer();
  }

  botPlays() {
    const random = Math.floor(Math.random() * 3);

    const choices = ["rock", "paper", "scissors"];

    return choices[random];
  }

  choiceUser(choice) {
    if(this.isEndGame)  return

    this.updateChoiceDisplay(choice);
    // Change player

    // 2. bot plays
    const botChoice = this.botPlays();
    // console.log(botChoice);

    this.updateChoiceDisplay(botChoice);
    // 3. compare result (update score)
    this.checkVictory(choice, botChoice);

    // 4. _counter -1 (4)
    this.setCounter();

    // Is this end of game ?
    console.log(this.isEndGame);
    // 5. display result
    this.updateScoreDisplay();
  }

  setCounter() {
    this._counter--;
    this.isEndGame = this.getCounter() <= 0 ? true : false;
  }

  getCounter() {
    return this._counter;
  }

  checkVictory(userChoice, botChoice) {
    if (
      (userChoice === "paper" && botChoice === "rock") ||
      (userChoice === "rock" && botChoice === "scissors") ||
      (userChoice === "scissors" && botChoice === "paper")
    ) {
      this.scoreUser++;
      console.log(this.scoreUser, this.scoreBot);
    }
    if (
      (botChoice === "paper" && userChoice === "rock") ||
      (botChoice === "rock" && userChoice === "scissors") ||
      (botChoice === "scissors" && userChoice === "paper")
    ) {
      this.scoreBot++;
      console.log(this.scoreUser, this.scoreBot);
    }
    if (userChoice === botChoice) {
      console.log(this.scoreUser, this.scoreBot);
    }
  }
}

const pointsUser = document.querySelector(".pointsUser");
const pointsBot = document.querySelector(".pointsBot");
const choiceUser = document.querySelector("#choiceUser");
const choiceBot = document.querySelector("#choiceBot");

const game = new Game(pointsUser, pointsBot, choiceUser, choiceBot);

const choices = document.querySelectorAll("[data-choice]");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    game.choiceUser(choice.dataset.choice);
  });
});
