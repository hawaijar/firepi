// Given an array, determine whether it is a monotonic array or not
// Monotonic array  - increasing trend OR decreasing trend (it can't be both!)
function isMonotonic(array) {
  // base case
  if (array.length <= 1) return true;
  let isIncreasing;
  let result = true;
  for (let i = 1; i < array.length; i++) {
    let [previous, current] = [array[i - 1], array[i]];
    if (current !== previous) {
      let diff = current - previous;
      if (diff > 0) {
        // increasing trend
        if (isIncreasing === undefined) {
          isIncreasing = true;
        } else if (isIncreasing === false) {
          return false;
        }
      } else {
        // decreasing trend
        if (isIncreasing === undefined) {
          isIncreasing = false;
        } else if (isIncreasing === true) {
          return false;
        }
      }
    }
  }
  return result;
}

let a = [5, 4, 3, 2, 1, 5];

console.log(isMonotonic(a));
