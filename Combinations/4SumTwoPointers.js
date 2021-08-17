// https://leetcode.com/problems/4sum/
function fourSum(nums, target) {
  // base case
  if (nums.length < 4) return [];
  // sort the array
  const hash = {};
  nums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    // ignore repeating i's
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const a = nums[i];
      for (let j = i + 1; j < nums.length - 2; j++) {
        // ignore repeating j's
        // if (j === 1 || nums[j] !== nums[j - 1]) { // ---> In 4Sums, this is not required as there could be same digits appear
        // E.g. [-2,2,0,0]
        const b = nums[j];
        let [p, q] = [j + 1, nums.length - 1];
        while (p < q) {
          const c = nums[p];
          const d = nums[q];
          let sum = a + b + c + d;
          if (sum === target) {
            const hashKey = `${a}:${b}:${c}:${d}`;
            if (!(hashKey in hash)) {
              result.push([a, b, c, d]);
              hash[hashKey] = true;
            }
          }
          if (sum <= target) {
            while (nums[p] === nums[p + 1]) {
              p += 1;
            }
            p += 1;
          }
          if (sum >= target) {
            while (nums[q] === nums[q - 1]) {
              q -= 1;
            }
            q -= 1;
          }
        }
        // }
      }
    }
  }
  return result;
}

const nums = [-2, -1, -1, 1, 1, 2, 2];
const target = 0;

console.log(fourSum(nums, target));
