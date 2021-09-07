const { createListFromArray } = require("../main");

function linkedListPalindrome(head) {
  // base case(s)
  if (!head || !head.next) return true;

  const pointers = [];
  let current = head;
  while (current) {
    pointers.push(current);
    current = current.next;
  }
  let [i, j] = [0, pointers.length - 1];

  while (i < j && pointers[i].value === pointers[j].value) {
    i += 1;
    j -= 1;
  }
  return i >= j;
}

const l = createListFromArray([1, 2, 3, 4, 5, 4, 3, 2, 1]);
console.log(linkedListPalindrome(l) === true);
