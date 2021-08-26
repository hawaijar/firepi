function longestIncreasingSubsequence(nums) {
  let lengths = new Array(nums.length).fill(1);
  let previousPositions = new Array(nums.length).fill(null);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        let temp = lengths[j] + 1;
        if (temp > lengths[i]) {
          lengths[i] = temp;
          previousPositions[i] = j;
        }
      }
    }
  }

  console.log(lengths);
  console.log(previousPositions);
}

const nums = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35];
longestIncreasingSubsequence(nums);
