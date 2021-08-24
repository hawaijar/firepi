// Given two list of integers L1 and L2, find the pair(x,y) where x => L1 and y => L2, such that
// abs(x,y) is closest to 0
function smallestDifference(arrayOne, arrayTwo) {
  // base case
  if (arrayOne.length === 0 || arrayTwo.length === 0) return [];
  // sort the arrays
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);

  let smallest = Math.abs(arrayOne[0] - arrayTwo[0]);
  let [a, b] = [arrayOne[0], arrayTwo[0]];
  let [i, j] = [0, 0];
  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      i += 1;
    } else {
      j += 1;
    }
    let newDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (newDiff < smallest) {
      a = arrayOne[i];
      b = arrayTwo[j];
      smallest = newDiff;
    }
  }
  return [a, b];
}
const a1 = [-1, 5, 10, 20, 3];
const b1 = [26, 134, 135, 15, 17];

console.log(smallestDifference(a1, b1));
