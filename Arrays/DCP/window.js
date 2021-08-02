// 1.2 - Locate smallest window to be sorted
// E.g. For array = [3,7,5,6,9], output should be [1,3]

// Complexity = O(nlogn) as sorting is involved.
function window1(array) {
  const sorted = array.slice().sort((a, b) => a - b);
  let [left, right] = [null, null];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sorted[i]) {
      if (left === null) {
        left = i;
      } else {
        right = i;
      }
    }
  }
  return [left, right];
}

// O(n) complexity solution

function window(array) {
  let [max, min] = [-Infinity, Infinity];
  let [left, right] = [null, null];

  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, array[i]);
    if (array[i] < max) {
      right = i;
    }
  }
  for (let i = array.length - 1; i >= 0; i--) {
    min = Math.min(min, array[i]);
    if (array[i] > min) {
      left = i;
    }
  }
  return [left, right];
}

const a = [3, 7, 5, 6, 9];
console.log(window1(a));
console.log(window(a));
