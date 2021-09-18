function staircaseTraversal(height, maxSteps) {
  let cache = {
    0: 1,
    1: 1,
  };

  function recur(n) {
    // base case
    if (n <= 1) return 1;
    cache[n] = 0;
    for (let i = 1; i <= Math.min(n, maxSteps); i++) {
      cache[n] += recur(n - i);
    }
    return cache[n];
  }
  return recur(height);
}

console.log(staircaseTraversal(10, 1));
