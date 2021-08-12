// Given an array, find the minimum no. of jumps required to reach the end/beyond the array
// Each index value represents the possible jumps you can make from that point
// E.g. [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3] o/p =4 (3 --> 4 --> 2 --> 7 --> 3)

function minNumberOfJumps(array, index = 0) {
  // base cases
  if (array.length === 0) return 0;
  if (array.length === 1 && array[0] > 0) return 0;

  if (index + array[index] >= array.length - 1) return 1;

  if (array[index] <= 0) return 0;

  let jumpsFromIndex = [];

  for (let i = 1; i <= array[index]; i++) {
    jumpsFromIndex.push(minNumberOfJumps(array, index + i));
  }

  if (jumpsFromIndex.length === 0) return 0;

  return 1 + Math.min(...jumpsFromIndex.filter((jump) => jump > 0));
}

const arr = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
console.log(minNumberOfJumps(arr));
