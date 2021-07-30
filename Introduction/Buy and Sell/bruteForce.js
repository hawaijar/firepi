/*
Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Input: prices = [7,1,5,3,6,4]
Output: 5
*/

function maxProfit(prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const previous = prices[i];
      const current = prices[j];
      const profit = current - previous;
      if (profit > max) {
        max = profit;
      }
    }
  }
  return max;
}

const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
