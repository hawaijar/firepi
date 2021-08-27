// i/p: [1, 2, 3, 4] o/p: true because we can make the equal subsets [1,4] & [2,3]
function equalSumPartition(nums = []) {
  // base condition
  // if sum is odd, return false
  const s = nums.reduce((a, b) => a + b, 0);
  if (s % 2 === 1) return false;
  const dp = [];
  const recur = (sum, index) => {
    // base cases
    if (sum === 0) return true;
    if (index >= nums.length) return false;
    dp[sum] = dp[sum] || [];
    if (dp[sum][index]) return dp[sum][index];
    let ifIncluded, ifExcluded;
    if (nums[index] <= sum) {
      ifIncluded = recur(sum - nums[index], index + 1);
    }
    ifExcluded = recur(sum, index + 1);

    dp[sum][index] = ifIncluded || ifExcluded;
    return dp[sum][index];
  };

  return recur(s / 2, 0);
}
console.log(
  `Can partitioning be done: ---> ${equalSumPartition([1, 2, 3, 4])}`
);
console.log(
  `Can partitioning be done: ---> ${equalSumPartition([1, 1, 3, 4, 7])}`
);
console.log(
  `Can partitioning be done: ---> ${equalSumPartition([2, 3, 4, 6])}`
);
