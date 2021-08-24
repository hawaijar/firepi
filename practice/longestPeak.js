function longestPeak(array) {
  // base case
  if (array.length < 3) return 0; // for a peak, at least 3 numbers is required.
  let longest = 0;
  let i = 1;
  while (i < array.length - 1) {
    let isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
    if (isPeak) {
      let left = i - 2;
      while (left >= 0 && array[left] < array[left + 1]) {
        left -= 1;
      }
      let right = i + 2;
      while (right < array.length && array[right] < array[right - 1]) {
        right += 1;
      }
      let distance = right - left - 1;
      longest = Math.max(longest, distance);
      i = right;
    } else {
      i += 1;
    }
  }
  return longest;
}
const a = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log(longestPeak(a));
