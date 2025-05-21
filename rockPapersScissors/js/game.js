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
    // Vérifier le current player et mettre à jour le choiceXXXDisplay en fonction du joueur
    switch (this.currentPlayer) {
      case "user":
        this.choiceUserDisplay.innerHTML = `<i data-choice="paper" class="fa-solid fa-hand"></i>`;
        break;
      case "bot":
        this.choiceBotDisplay.innerHTML = `<i data-choice="scissors" class="fa-solid fa-hand-scissors"></i>`;
        break;
      default:
        return;
    }
  }

  choiceUser(choice) {
    switch (choice) {
      case "paper":
        // 1. display on page choiceUser
        this.updateChoiceDisplay(choice);
        // 2. bot plays
        // 3. compare result (update score)
        // 4. _counter -1 (4)
        // 5. display result
        console.log("input paper");
        break;
    }
  }
}

const pointsUser = document.querySelector(".pointsUser");
const pointsBot = document.querySelector("pointsBot");
const choiceUser = document.querySelector("#choiceUser");
const choiceBot = document.querySelector("#choiceBot");

const game = new Game(pointsUser, pointsBot, choiceUser, choiceBot);

const choices = document.querySelectorAll("[data-choice]");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    game.choiceUser(choice.dataset.choice);
  });
});
