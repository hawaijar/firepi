// Number Of Ways To Make Change
// Given an array of distinct positive integers representing coin denominations and a
// single non-negative integer n representing a target amount of money, write a function
// that returns the number of ways to make change for that target amount using
// the given coin denominations.
// Note: that an unlimited amount of coins is at your disposal.

// For e.g. n = 6, denominators = [1,5] ==> o/p = 2 ( [1,1,1,1,1,1], [1,5] )

function numberOfWaysToMakeChange(n, denominators) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < denominators.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (denominators[i] <= j) {
        ways[j] += ways[j - denominators[i]];
      }
    }
  }
  return ways[n];
}

function numberOfWaysToMakeChangeRecur(n, denominators) {
  if (n === 0) return 1;
  let count = 0;
  for (let i = 0; i < denominators.length; i++) {
    if (denominators[i] <= n) {
      count = 1 + numberOfWaysToMakeChange(n - denominators[i], denominators);
    }
  }
  return count;
}

const denoms = [1, 5];
const n = 6;

console.log(numberOfWaysToMakeChange(n, denoms));
console.log(numberOfWaysToMakeChangeRecur(n, denoms));
