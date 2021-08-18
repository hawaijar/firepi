// https://leetcode.com/problems/next-permutation/

/*
	1. Find the longest decreasing sequence (LDS), M
	2. Find the number, x just before the LDS
	3. Find the smallest number s in LDS that is greater than x.
	4. Swap x and s.
	5. Reverse the lds
	6. If x === 0, (then the given number is already in descending order), return the sorted value.

 */

function nextPermutation(nums) {
  // base case(s)
  if (nums.length <= 1) return nums;
  let x = null;
  // first find the lds
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      x = i - 1;
      break;
    }
  }
  if (x === null) {
    return nums.sort((a, b) => a - b);
  }
  let firstPart = nums.slice(0, x);
  let lds = nums.slice(x + 1);
  lds = lds.sort((a, b) => a - b);
  // find the smallest value in [lds] that is greater than nums[x]
  let s;
  for (let i = 0; i < lds.length; i++) {
    if (lds[i] > nums[x]) {
      [lds[i], nums[x]] = [nums[x], lds[i]];
      break;
    }
  }
  // nums = [...firstPart, nums[x], ...lds]
  let temp = nums[x];
  nums.length = 0;
  nums = nums.push(...firstPart, temp, ...lds);
}

const nums = [1, 2];
nextPermutation(nums);
console.log(nums);
