// Given an array of distinct integers and a target, write a function that moves all instances of that target towards the end

function moveElementToEnd(array, toMove) {
  // base case
  if (!array.includes(toMove)) return array;
  let [i, j] = [0, array.length - 1];

  while (i < j) {
    while (array[i] !== toMove) {
      i += 1;
      if (i === j) return;
    }

    while (array[j] === toMove) {
      j -= 1;
      if (j === 0) return;
    }

    // swap the two elements
    [array[i], array[j]] = [array[j], array[i]];
    i += 1;
    j -= 1;
  }
}

const a = [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
moveElementToEnd(a, 5);
console.log(a);
