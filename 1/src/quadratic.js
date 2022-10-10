// Three supporting functions ahead
const getTwoRoots = (a, b, discriminant) => {
  let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
  let x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
  return [roundNum(x1), roundNum(x2)];
};

const getSingleRoot = (a, b) => roundNum(-b / 2 * a);

const roundNum = x => {
  return Math.round(x * 100) / 100;
};

// Algorithm for finding roots of quadratic in real numbers set
// f(x) = ax^2 + bx + c
const solveQuadratic = (a, b, c) => {
  if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error('Incorrect values provided');
  if (a === 0) throw new Error('Value of \'a\' can not be 0');

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) throw new Error('No solutions in real numbers set');

  return discriminant === 0
    ? getSingleRoot(a, b)
    : getTwoRoots(a, b, discriminant);
};

module.exports = solveQuadratic;