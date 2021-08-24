// sort an existing array w/o using any data structure.

function insertionSort(stack, value) {
  if (stack.length === 0 || value >= stack[stack.length - 1]) {
    stack.push(value);
  } else {
    const top = stack.pop();
    insertionSort(stack, value);
    stack.push(top);
  }
}
function sortStack(stack) {
  if (stack.length === 0) return [];
  const top = stack.pop();
  sortStack(stack);
  insertionSort(stack, top);
  return stack;
}
console.log(sortStack([5, 3, 4, 1, 2]));
