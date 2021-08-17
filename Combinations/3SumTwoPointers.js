function threeSum(nums) {
  if (nums.length < 3) return [];
  const result = [];
  // sort the array
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    // ignore duplicate i's
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let [j, k] = [i + 1, nums.length - 1];
      const a = nums[i];
      while (j < k) {
        const b = nums[j];
        const c = nums[k];
        const sum = a + b + c;
        if (sum === 0) {
          result.push([a, b, c]);
        }
        if (sum <= 0) {
          // imagine j points to second ==> [1,4,4,4,4,5,...]
          while (nums[j] === nums[j + 1]) {
            j += 1;
          }
          j += 1; // this will make j point to '5' above
        }
        if (sum >= 0) {
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

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
