// https://leetcode.com/problems/divide-two-integers/

// For x/y, find pow(2,k) * y <= x, add pow(2,k) to the result and subtracts it from x.

// -x === ~x + 1

function divide(x, y) {
  // base case
  if (x === 0) return 0;
  let isNegative = false;
  if (x < 0 && y > 0) {
    isNegative = true;
    x = ~x + 1;
  }
  if (x > 0 && y < 0) {
    isNegative = true;
    y = ~y + 1;
  }
  if (y === 1 || y === -1) return x * y;
  if (x < 0 && y < 0) {
    x = ~x + 1;
    y = ~y + 1;
  }

  let power = 32;
  let result = 0;
  let powerOf2 = 1 << power;

  while (x >= y) {
    while (powerOf2 * y > x) {
      power -= 1;
      powerOf2 = 1 << power;
    }
    result += powerOf2;
    x -= powerOf2 * y;
  }
  return isNegative ? ~result + 1 : result;
}
// -2147483648
// -1

console.log(divide(-2147483648, -1));
