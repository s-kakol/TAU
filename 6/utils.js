const tiles = {
  start: 'S',
  finish: 'O',
  wall: 'X',
  empty: '.',
  player: '@',
};

const exampleBoard = [
  [tiles.empty, tiles.wall, tiles.wall, tiles.empty, tiles.wall, tiles.finish, tiles.empty, tiles.wall],
  [tiles.empty, tiles.empty, tiles.wall, tiles.empty, tiles.wall, tiles.wall, tiles.empty, tiles.empty],
  [tiles.wall, tiles.empty, tiles.wall, tiles.empty, tiles.wall, tiles.wall, tiles.empty, tiles.wall],
  [tiles.wall, tiles.empty, tiles.empty, tiles.empty, tiles.empty, tiles.empty, tiles.empty, tiles.empty],
  [tiles.wall, tiles.empty, tiles.wall, tiles.wall, tiles.empty, tiles.wall, tiles.wall, tiles.empty],
  [tiles.empty, tiles.empty, tiles.wall, tiles.wall, tiles.empty, tiles.empty, tiles.empty, tiles.wall],
  [tiles.empty, tiles.wall, tiles.wall, tiles.wall, tiles.empty, tiles.wall, tiles.empty, tiles.wall],
  [tiles.empty, tiles.start, tiles.empty, tiles.empty, tiles.empty, tiles.wall, tiles.empty, tiles.wall],
];

const clearConsole = () => process.stdout.write('\x1B[2J\x1B[0f');

module.exports = {
  tiles,
  exampleBoard,
  clearConsole,
};