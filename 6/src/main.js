const { clearConsole, exampleBoard } = require('../utils');
const readline = require('readline-sync');
const Labyrinth = require('./labyrinth');

clearConsole();

const labyrinth = new Labyrinth(exampleBoard, 1, 7, 5, 0);
labyrinth.printBoard();

while (true) {
  const input = readline.question('\nMake a move: Up, Down, Left or Right\n');
  clearConsole();
  if (input.toLowerCase() === 'q') break;
  labyrinth.move(input.toLowerCase());
  if (labyrinth.checkIfFinished()) break;
}