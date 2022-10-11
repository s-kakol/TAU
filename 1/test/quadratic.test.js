const solveQuadratic = require('../src/quadratic');

beforeAll(() => {
  console.log('Initializing quadratic equations solver tests');
});

afterAll(() => {
  console.log('Done!');
});

describe('Tests that should return answers', () => {
  describe('If discriminant is equal to 0 returns single root', () => {
    test('Solves a=1, b=2 , c=1', () => {
      expect(solveQuadratic(1, 2, 1)).toEqual(-1);
    });

    test('Solves a="1", b=2, c="1", with \'a\'&\'c\' as strings', () => {
      expect(solveQuadratic('1', 2, '1')).toEqual(-1);
    });
  });

  describe('If discriminant is positive returns two roots', () => {
    test('Solves a=1, b=4, c=3', () => {
      expect(solveQuadratic(1, 4, 3)).toStrictEqual([-3, -1]);
    });

    test('Solves a=1, b=3, c=-4', () => {
      expect(solveQuadratic(1, 3, -4)).toStrictEqual([-4, 1]);
    });

    test('Solves a=-1, b=-4, c=-3', () => {
      expect(solveQuadratic(-1, -4, -3)).toStrictEqual([-1, -3]);
    });

    test('Solves a="-2", b="7", c=-3, with \'a\' & \'b\' as strings', () => {
      expect(solveQuadratic('-2', '7', -3)).toStrictEqual([3, 0.5]);
    });
  });
});

describe('Tests that should throw errors', () => {
  test('Throws Incorrect Values error if any input is not an instance of a number', () => {
    expect(() => solveQuadratic(4, 'b', 2)).toThrowError('Incorrect values provided');
  });

  test('Throws error if \'a\' is equal to 0', () => {
    expect(() => solveQuadratic(0, 5, 5)).toThrowError('Value of \'a\' can not be 0');
  });

  test('Throws error if discriminant of the equation is negative', () => {
    expect(() => solveQuadratic(1, 1, 1)).toThrowError('No solutions in real numbers set');
  });
});
