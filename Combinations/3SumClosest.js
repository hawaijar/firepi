// https://leetcode.com/problems/3sum-closest/

function threeSumClosest(nums, target) {
  const sum = (array) => array.reduce((a, b) => a + b, 0);
  // base case
  if (nums.length < 3) {
    return sum(nums);
  }
  let smallest = Infinity;
  let result = 0;
  // sort the array
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    // ignore duplicate i's
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const a = nums[i];
      let [j, k] = [i + 1, nums.length - 1];
      while (j < k) {
        const b = nums[j];
        const c = nums[k];
        const s = a + b + c;
        if (s === target) return s;
        const diff = Math.abs(target - s);
        if (diff < smallest) {
          smallest = diff;
          result = s;
        }
        if (s < target) {
          while (nums[j] === nums[j + 1]) {
            j += 1;
          }
          j += 1;
        } else if (s > target) {
          while (nums[k] === nums[k - 1]) {
            k -= 1;
          }
          k -= 1;
        }
      }
    }
  }
  return result;
}

const nums = [0, 0, 0];
const target = 1;
console.log(threeSumClosest(nums, target));
