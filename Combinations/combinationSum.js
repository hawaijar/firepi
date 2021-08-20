// https://leetcode.com/problems/combination-sum/

function sum(nums) {
  return nums.reduce((a, b) => a + b, 0);
}
function combinationSum(candidates, target) {
  // base case
  if (candidates.length === 0) return [];
  const result = [];
  const hash = {};
  const recur = (prefix = [], array = []) => {
    const s = sum(prefix);
    if (s > target) return;
    if (s === target) {
      const temp = prefix.slice().sort((a, b) => a - b);
      if (!(temp.toString() in hash)) {
        hash[temp.toString()] = true;
        result.push(temp);
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        prefix.push(array[i]);
        recur(prefix, array);
        prefix.pop();
      }
    }
  };
  recur([], candidates);
  return result;
}

const nums = [1];
const target = 2;

console.log(combinationSum(nums, target));
