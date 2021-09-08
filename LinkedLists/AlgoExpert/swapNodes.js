const { createListFromArray, printList } = require("../main");

function nodeSwap(head) {
  // base case(s)
  if (!head || !head.next) return head;
  // push all nodes to an array
  let current = head;
  let next;
  const pointers = [];
  while (current) {
    pointers.push(current);
    current = current.next;
  }
  const SIZE = pointers.length - 1;

  let i = 0;
  while (i < SIZE) {
    current = pointers[i];
    next = current.next;
    [current.value, next.value] = [next.value, current.value];
    i += 2;
  }
  return head;
}
const l = createListFromArray([0, 1, 2, 3, 4, 5]);
printList(l);
const r = nodeSwap(l);
printList(r);
