function knapsack(p, w, c) {
  const recur = (profits, weights, capacity, index = 0) => {
    // base case
    if (capacity === 0 || index === profits.length) return 0;

    let profitIfSelected = 0,
      profitIfSkip = 0;
    if (weights[index] <= capacity) {
      profitIfSelected =
        profits[index] +
        recur(profits, weights, capacity - weights[index], index + 1);
    }
    profitIfSkip = recur(profits, weights, capacity, index + 1);
    return Math.max(profitIfSelected, profitIfSkip);
  };
  return recur(p, w, c, 0);
}

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${knapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${knapsack(profits, weights, 6)}`);
