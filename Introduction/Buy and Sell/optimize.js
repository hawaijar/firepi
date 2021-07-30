function maxProfit(prices) {
  let smallest = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    if (currentPrice < smallest) {
      smallest = currentPrice;
    }
    let profit = currentPrice - smallest;
    maxProfit = Math.max(profit, maxProfit);
  }
  return maxProfit;
}
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
