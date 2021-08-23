// https://leetcode.com/problems/permutations-ii/
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
function permutation(nums = []) {
  // base case
  if (nums.length === 0) return [];
  // sort the array
  nums = nums.sort((a, b) => a - b);
  const result = [];
  const permute = (prefix, array) => {
    if (array.length === 0) {
      result.push(prefix.slice());
    } else {
      for (let i = 0; i < array.length; i++) {
        if (i !== 0 && array[i] === array[i - 1]) continue;
        prefix.push(array[i]);
        permute(prefix, [...array.slice(0, i), ...array.slice(i + 1)]);
        prefix.pop();
      }
    }
  };
  permute([], nums);
  return result;
}

console.log(permutation([3, 3, 0, 3]));
