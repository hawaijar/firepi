// https://leetcode.com/problems/permutations/

function permutation(nums = []) {
  // base case
  if (nums.length === 0) return [];
  const result = [];
  const permute = (prefix, array) => {
    if (array.length === 0) {
      result.push(prefix.slice());
    } else {
      for (let i = 0; i < array.length; i++) {
        prefix.push(array[i]);
        permute(prefix, [...array.slice(0, i), ...array.slice(i + 1)]);
        prefix.pop();
      }
    }
  };
  permute([], nums);
  return result;
}

console.log(permutation([1, 2, 3]));
