// https://leetcode.com/problems/combination-sum-ii/

const sum = (nums) => nums.reduce((a, b) => a + b, 0);

function combinationSum2(candidates, target) {
  // if all numbers are 1s
  if (candidates.every((x) => x === 1)) {
    if (sum(candidates) < target) return [];
    return [new Array(target).fill(1)];
  }
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
        result.push(temp);
        hash[temp.toString()] = true;
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        prefix.push(array[i]);
        recur(prefix, array.slice(i + 1));
        prefix.pop();
      }
    }
  };
  recur([], candidates);
  return result;
}

function combinationSum2_II(candidates, target) {
  // if all numbers are 1s
  if (candidates.every((x) => x === 1)) {
    if (sum(candidates) < target) return [];
    return [new Array(target).fill(1)];
  }
  if (candidates.length === 0) return [];
  const result = [];
  const hash = {};
  const recur = (prefix, remainder, start = 0) => {
    if (remainder < 0) return;
    if (remainder === 0) {
      const temp = prefix.slice().sort((a, b) => a - b);
      if (!(temp.toString() in hash)) {
        hash[temp.toString()] = true;
        result.push(temp);
      }
    } else {
      for (let i = start; i < candidates.length; i++) {
        prefix.push(candidates[i]);
        recur(prefix, remainder - candidates[i], i + 1);
        prefix.pop();
      }
    }
  };
  recur([], target, 0);
  return result;
}
// const nums = [
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// ];
// const target = 30;
const nums = [1];
const target = 1;
console.log(combinationSum2(nums, target));
