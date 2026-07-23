class GameManager {
  constructor() {
    this.score = 0;
  }

  addScore(points) {
    this.score += points;
    console.log("🏆 Score:", this.score);
  }

  getScore() {
    return this.score;
  }
}

const gameManager = new GameManager();

export default gameManager;