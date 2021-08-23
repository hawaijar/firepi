// https://leetcode.com/problems/jump-game-ii/
function jump(nums) {
  // base case
  if (nums.length === 0 || nums[0] === 0) return 0;
  let i = 0;
  let farthest = 0;
  let jump = 0;
  let nextJump = 0;
  while (i < nums.length - 1) {
    farthest = i + nums[i];
    if (farthest >= nums.length - 1) {
      return ++jump;
    }
    let [start, end] = [i + 1, i + nums[i]];
    for (let j = start; j <= end; j++) {
      if (j + nums[j] > farthest) {
        farthest = j + nums[j];
        nextJump = j;
      }
    }
    jump++;
    i = nextJump;
  }
  return jump;
}
const nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
