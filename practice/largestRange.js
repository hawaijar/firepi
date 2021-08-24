function largestRange(array) {
  let hash = {};
  for (let num of array) {
    if (num in hash) {
      continue;
    } else {
      hash[num] = false;
    }
  }
  let result = [0, 0];
  let largestRange = -Infinity;

  for (let num of array) {
    if (hash[num]) {
      continue;
    }
    hash[num] = true; // marked visited
    let smallest = num;
    while (smallest in hash) {
      smallest -= 1;
    }
    smallest += 1;
    let largest = num;
    while (largest in hash) {
      largest += 1;
    }
    largest -= 1;

    if (largest - smallest > largestRange) {
      largestRange = largest - smallest;
      result[0] = smallest;
      result[1] = largest;
    }
  }
  return result;
}

const a = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
console.log(largestRange(a));
