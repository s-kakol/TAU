const Labyrinth = require('../src/labyrinth');
const { exampleBoard } = require('../utils');

let labyrinth;

beforeEach(() => {
  labyrinth = new Labyrinth(exampleBoard, 1, 7, 5, 0);
  jest.spyOn(labyrinth, 'printBoard').mockImplementation(() => {});
});

afterAll(() => {
  console.log('Done!');
});

describe('Functionality tests', () => {
  test('Moving to empty tiles works correctly', () => {
    const { startX, startY } = labyrinth.checkPosition();
    labyrinth.move('left');
    const { newX, newY } = labyrinth.checkPosition();

    expect(newX).toEqual(startX);
    expect(newY + 1).toEqual(startY + 1);
  });

  test('Teleporting to empty tiles works correctly', () => {
    labyrinth.teleport(6, 3);
    const { X, Y } = labyrinth.checkPosition();

    expect(X).toEqual(6);
    expect(Y).toEqual(3);
  });

  test('Reaches finish line from start', () => {
    labyrinth.move('right');
    labyrinth.move('right');
    labyrinth.move('right');
    labyrinth.move('up');
    labyrinth.move('up');
    labyrinth.move('up');
    labyrinth.move('up');
    labyrinth.move('right');
    labyrinth.move('right');
    labyrinth.move('up');
    labyrinth.move('up');
    labyrinth.move('up');
    labyrinth.move('left');

    expect(labyrinth.checkIfFinished()).toEqual(true);
  });

  test('Moving into walls does not change players position', () => {
    const { startX, startY } = labyrinth.checkPosition();
    labyrinth.move('up');
    labyrinth.move('up');
    labyrinth.move('up');
    const { newX, newY } = labyrinth.checkPosition();

    expect(newX).toEqual(startX);
    expect(newY).toEqual(startY);
  });

  test('Teleporting into walls does not change players position', () => {
    const { startX, startY } = labyrinth.checkPosition();
    labyrinth.teleport(2, 4);
    const { newX, newY } = labyrinth.checkPosition();

    expect(newX).toEqual(startX);
    expect(newY).toEqual(startY);
  });
});

describe('Throwable tests ', () => {
  describe('Moving beyond array size throws: Out of bounds error', () => {
    test('Try to move Y > max height(7)', () => {
      labyrinth.teleport(6, 0);

      expect(() => labyrinth.move('up')).toThrowError('Out of bounds');
    });

    test('Try to move Y < min height(0)', () => {
      expect(() => labyrinth.move('down')).toThrowError('Out of bounds');
    });

    test('Try to move X > max width(7)', () => {
      labyrinth.teleport(7, 3);

      expect(() => labyrinth.move('right')).toThrowError('Out of bounds');
    });

    test('Try to move X < min width(0)', () => {
      labyrinth.teleport(0, 7);

      expect(() => labyrinth.move('left')).toThrowError('Out of bounds');
    });

    test('Try to teleport out of bounds', () => {
      expect(() => labyrinth.teleport(0, 9).toThrowError('Out of bounds'));
    });
  });

  test('Invalid move throws: Not valid direction', () => {
    expect(() => labyrinth.move('lefffft')).toThrowError('lefffft is not valid direction');
  });
});