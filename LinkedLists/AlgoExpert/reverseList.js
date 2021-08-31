const { createListFromArray, printList, ListNode } = require("../main");

function reverseLinkedList(head) {
  // base case(s)
  if (!head || head.next === null) return head;
  const pointers = [];
  let current = head;
  while (current) {
    pointers.push(current);
    current = current.next;
  }
  const SIZE = pointers.length;
  const newHead = pointers[SIZE - 1];
  let i = SIZE - 1;

  while (i > 0) {
    pointers[i].next = pointers[i - 1];
    i -= 1;
  }
  pointers[0].next = null;
  return newHead;
}

const l = createListFromArray([1, 2, 3, 4, 5]);
const r = reverseLinkedList(l);
printList(r);
