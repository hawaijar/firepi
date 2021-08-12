/*
Smallest Difference
==================
Given a pair of arrays, find the smallest pair of numbers (x,y)
such that x belongs to the first array and y belongs to second array

 */

function sortArray(a) {
  return a.sort((a, b) => a - b, 0);
}
function difference(a, b) {
  return Math.abs(a - b);
}
function smallestDifference(arrayOne, arrayTwo) {
  const sorted1 = sortArray(arrayOne);
  const sorted2 = sortArray(arrayTwo);

  console.log(sorted1, sorted2);

  let [i, j] = [0, 0];
  let result = [];
  let smallest = Infinity;
  let temp;

  while (i < sorted1.length && j < sorted2.length) {
    if (sorted1[i] === sorted2[j]) {
      return [sorted1[i], sorted2[j]];
    } else if (sorted1[i] > sorted2[j]) {
      temp = difference(sorted1[i], sorted2[j]);
      if (temp < smallest) {
        result = [sorted1[i], sorted2[j]];
        smallest = temp;
      }
      j += 1;
    } else {
      temp = difference(sorted1[i], sorted2[j]);
      if (temp < smallest) {
        result = [sorted1[i], sorted2[j]];
        smallest = temp;
      }
      i += 1;
    }
  }
  return result;
}

const a = [10, 0, 20, 25, 2200];
const b = [1005, 1006, 1014, 1032, 1031];

console.log(smallestDifference(a, b));
