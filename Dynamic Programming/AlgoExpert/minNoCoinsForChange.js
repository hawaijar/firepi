// Given a list of integers representing coins AND a target, find the minimum no. of
// coins to make the target.
// E.g. for [1, 5, 10] and target = 7, o/p should be 3 ==> [1,1,5]

function minNumberOfCoinsForChange(n, denominations) {
  // base case
  if (n === 0) return 0;
  if (denominations.length === 0) return 0;
  const ways = new Array(n + 1).fill(Infinity);
  ways[0] = 0; // for target = 0, min no. of ways = 0
  for (let denominator of denominations) {
    for (let i = 1; i <= n; i++) {
      if (denominator <= i) {
        ways[i] = Math.min(1 + ways[i - denominator], ways[i]);
      }
    }
  }
  return ways[n] === Infinity ? -1 : ways[n];
}

const denominations = [2, 4];
const n = 7;
console.log(minNumberOfCoinsForChange(n, denominations));
