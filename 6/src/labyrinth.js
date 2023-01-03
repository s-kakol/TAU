const { tiles } = require('../utils');

class Labyrinth {
  #board;
  #X;
  #Y;
  #finX;
  #finY;
  #hasWon;
  constructor(board, startX, startY, finX, finY) {
    this.#board = board;
    this.#X = startX;
    this.#Y = startY;
    this.#finX = finX;
    this.#finY = finY;
    this.#hasWon = false;
  }

  printBoard() {
    for (let i = 0; i < this.#board.length; i++) {
      for (let j = 0; j < this.#board[i].length; j++) {
        if (j === this.#X && i === this.#Y)
          process.stdout.write(tiles.player);
        else
          process.stdout.write(this.#board[i][j]);
        process.stdout.write(' ');
      }
      process.stdout.write('\n');
    }
  };

  #verifyMove(newX, newY) {
    if (newY >= this.#board.length || newX >= this.#board.length || newY < 0 || newX < 0)
      throw new Error('Out of bounds');
    return this.#board[newY][newX] !== tiles.wall;
  }

  move(inputDirection) {
    switch (inputDirection) {
      case 'up':
      case 'u':
        this.#verifyMove(this.#X, this.#Y - 1) && this.#Y--;
        break;
      case 'down':
      case 'd':
        this.#verifyMove(this.#X, this.#Y + 1) && this.#Y++;
        break;
      case 'left':
      case 'l':
        this.#verifyMove(this.#X - 1, this.#Y) && this.#X--;
        break;
      case 'right':
      case 'r':
        this.#verifyMove(this.#X + 1, this.#Y) && this.#X++;
        break;
      default:
        throw new Error(`${inputDirection} is not valid direction`);
    }
    this.printBoard();
  }

  checkIfFinished() {
    if (this.#X === 5 && this.#Y === 0) {
      console.log('YOU WON!');
      setTimeout(() => {}, 500);
      this.#hasWon = true;
    }
    return this.#hasWon;
  }

  // Teleporting is only for the testing wizard to make its life easier.
  teleport(newX, newY) {
    if (!this.#verifyMove(newX, newY)) return;
    this.#X = newX;
    this.#Y = newY;
  }

  checkPosition() { return { X: this.#X, Y: this.#Y }; }
}

module.exports = Labyrinth;