// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

function bsearch(
  nums,
  target,
  firstBound = true,
  left = 0,
  right = nums.length - 1
) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      if (firstBound) {
        // is the mid the begin point of the target (in the array)
        if (mid === 0 || nums[mid - 1] !== target) {
          return mid;
        }
        right = mid - 1;
      } else {
        // is the mid the end point of the target (in the array)
        if (mid === nums.length - 1 || nums[mid + 1] !== target) {
          return mid;
        }
        left = mid + 1;
      }
    } else {
      if (target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

function searchRange(nums, target) {
  let [left, right] = [0, nums.length - 1];
  // base case(s)
  if (nums[left] === target && nums[right] === target) return [left, right];
  if (nums.length === 0) return [-1, -1];
  if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1];
  const result = [];
  result[0] = bsearch(nums, target);
  result[1] = bsearch(nums, target, false);
  return result;
}
const nums = [5, 7, 7, 8, 8, 10],
  target = 6;
console.log(searchRange(nums, target));
