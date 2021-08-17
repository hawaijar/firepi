// https://leetcode.com/problems/container-with-most-water/
function maxArea(height) {
  let [i, j] = [0, height.length - 1];
  let maxArea = 0;

  while (i < j) {
    maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return maxArea;
}
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
