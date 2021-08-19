// Note: The input array MUST be sorted for the binary search to work
function search(nums, target, left = 0, right = nums.length - 1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return -1;
}

console.log(search([8, 9, 2], 9));

module.exports = {
  search,
};
