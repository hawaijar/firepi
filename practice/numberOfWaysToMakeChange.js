function numberOfWaysToMakeChange(n, denoms) {
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let denominator of denoms) {
    for (let i = 1; i <= n; i++) {
      if (denominator <= i) {
        ways[i] += ways[i - 1];
      }
    }
  }
  return ways[n];
}
