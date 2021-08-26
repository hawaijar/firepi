function knapsack(profits, weights, capacity) {
  // base case
  if (capacity === 0 || weights.length === 0) return 0;
  if (weights.length === 1) {
    if (weights[0] <= capacity) return profits[0];
  }
  const noOfItems = profits.length;
  const matrix = new Array(noOfItems + 1).fill([]);
  for (let i = 0; i <= noOfItems; i++) {
    matrix[i] = new Array(capacity + 1).fill(0);
  }
  let profitIfSelected = 0;
  let profitIfSkip = 0;

  for (let i = 0; i <= noOfItems; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (j === 0 || i === 0) {
        matrix[i][j] = 0;
        continue;
      }
      profitIfSelected = 0;
      profitIfSkip = 0;
      // Remember this!!! weights[i-1] instead of weights[i] --> our items/weights starts from index 0
      if (weights[i - 1] <= j) {
        // Remember this!!! profits[i-1] instead of profits[i]
        profitIfSelected = profits[i - 1] + matrix[i - 1][j - weights[i - 1]];
      }
      profitIfSkip = matrix[i - 1][j];
      matrix[i][j] = Math.max(profitIfSelected, profitIfSkip);
    }
  }
  return matrix[noOfItems][capacity];
}
const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${knapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${knapsack(profits, weights, 6)}`);
