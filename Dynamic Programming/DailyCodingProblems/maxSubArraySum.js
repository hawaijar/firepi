// Calculate maximum subarray sum
// E.g. for [34, -50, 42, 14, -5, 86], output = 137

function maxSubArraySum(array) {
  // base case
  if (array.length === 0) return 0;
  const result = [];
  if (array[0] < 0) {
    result[0] = 0;
  } else {
    result[0] = array[0];
  }
  let [startIndex, endIndex] = [0, 0];
  let max = result[0];

  for (let i = 1; i < array.length; i++) {
    const maxCurrent = array[i] + max;
    if (array[i] > maxCurrent) {
      startIndex = i;
      endIndex = i;
    }
    if (maxCurrent > max) {
      endIndex = i;
    }
    if (maxCurrent <= 0) {
      startIndex = i;
      endIndex = i;
    }

    max = Math.max(array[i], maxCurrent);
  }
  console.log(array.slice(startIndex, endIndex + 1));
  return max;
}

console.log(maxSubArraySum([1, 2, 3, -15, 5, 6, 7]));
