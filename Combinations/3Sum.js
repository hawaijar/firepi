// https://leetcode.com/problems/3sum/

function threeSum1(array) {
  const result = [];
  const hash = {};
  function evaluate(nums, prefix = []) {
    // base case
    if (nums.length === 0) {
      if (prefix.length === 3 && prefix.reduce((a, b) => a + b, 0) === 0) {
        const temp = prefix.slice().sort((a, b) => a - b);
        if (!(temp.toString() in hash)) {
          hash[temp.toString()] = true;
          result.unshift(temp);
        }
      }
    }
    if (prefix.length > 3) return;
    if (prefix.length === 3 && prefix.reduce((a, b) => a + b, 0) === 0) {
      const temp = prefix.slice().sort((a, b) => a - b);
      if (!(temp.toString() in hash)) {
        hash[temp.toString()] = true;
        result.unshift(temp);
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        prefix = [...prefix, nums[i]];
        evaluate(nums.slice(i + 1), prefix);
        prefix.pop();
      }
    }
  }
  evaluate(array, []);
  return result;
}

function threeSum(nums) {
  // base case
  if (nums.length < 3) return [];

  // sort the array
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return result;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const a = nums[i];
      let [j, k] = [i + 1, nums.length - 1];
      while (j < k) {
        while (nums[j] === nums[j + 1]) {
          j += 1;
        }
        const b = nums[j];
        while (nums[k] === nums[k - 1]) {
          k -= 1;
        }
        const c = nums[k];
        const sum = a + b + c;
        if (sum === 0) {
          result.push([a, b, c]);

          j += 1;
          while (nums[k] === nums[k - 1]) {
            k -= 1;
          }
          k -= 1;
        }
        if (sum <= 0) {
          while (nums[j] === nums[j + 1]) {
            j += 1;
          }
          j += 1;
        } else {
          k -= 1;
        }
      }
    }
  }
  return result;
}
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
