// https://leetcode.com/problems/search-in-rotated-sorted-array/

const { search } = require("./binarySearch");

function rotationIndex(nums, left, right) {
  // already sorted condition
  if (nums[left] < nums[right]) {
    return left;
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid > 1) {
      // the mid itself is the smallest element!
      if (nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
        return mid;
      }
    }
    // if mid is greater than (mid + 1), (mid + 1) is the smallest.
    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    } else {
      if (nums[mid] > nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return 0;
}

function searchRotated(nums, target) {
  // base case
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  if (target === nums[0]) return 0;
  if (target === nums.length - 1) return nums.length - 1;

  let [left, right] = [0, nums.length - 1];
  const rIndex = rotationIndex(nums, left, right);

  if (rIndex === 0) {
    return search(nums, target);
  }
  if (nums[rIndex] === target) {
    return rIndex;
  }
  if (target > nums[0]) {
    return search(nums, target, left, rIndex);
  } else {
    return search(nums, target, rIndex, right);
  }
}
console.log(searchRotated([8, 9, 2, 3, 4], 9));
