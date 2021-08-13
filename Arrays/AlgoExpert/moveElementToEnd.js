// Move element to End

// Given an array and an integer x, write a function to move all instances of x towards the end of the
// array and return the array.

// 1. Create two endpoint pointers (start, end)
// 2. Move the end pointer (towards start) till it points to x
// 3. Move the start pointer (towards end) till it doesn't point to x
// 4. Repeat steps (2 - 3) until they cross each other

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function moveElementToEnd(array, toMove) {
  // base case
  if (array.length <= 1) return array;

  let [start, end] = [0, array.length - 1];

  while (start < end) {
    while (array[end] === toMove && start < end) {
      end -= 1;
    }
    while (array[start] !== toMove && start < end) {
      start += 1;
    }
    swap(array, start, end);
  }
  return array;
}

const a = [1, 2, 2, 3, 4, 5];
console.log(moveElementToEnd(a, 2));
