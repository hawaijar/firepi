// i/p: [1, 2, 3, 4] o/p: true because we can make the equal subsets [1,4] & [2,3]
function equalSumPartitionTabulation(nums = []) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 === 1) return false;
  sum = sum / 2;
  const matrix = new Array(nums.length + 1).fill([]);
  for (let i = 0; i <= nums.length; i++) {
    matrix[i] = new Array(sum + 1).fill(false);
  }
  let isSelected, isNotSelected;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (nums[i - 1] === j) {
        matrix[i][j] = true;
      } else {
        if (nums[i - 1] < j) {
          isSelected = matrix[i][j - nums[i]];
          isNotSelected = matrix[i - 1][j];
          matrix[i][j] = isSelected || isNotSelected;
        } else {
          matrix[i][j] = matrix[i - 1][j];
        }
      }
    }
  }
  return matrix[nums.length][sum];
}

console.log(
  `Can partitioning be done: ---> ${equalSumPartitionTabulation([1, 4, 3, 4])}`
);
console.log(
  `Can partitioning be done: ---> ${equalSumPartitionTabulation([1, 5, 4, 4])}`
);
console.log(
  `Can partitioning be done: ---> ${equalSumPartitionTabulation([12, 4, 6])}`
);
