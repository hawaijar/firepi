const { createListFromArray, printList } = require("../main");

function reverseLinkedList(head) {
  // base case(s)
  if (!head || !head.next) return head;
  let [previous, current, next] = [null, head, head.next];
  while (next) {
    current.next = previous;
    previous = current;
    current = next;
    next = next.next;
  }
  current.next = previous;
  return current;
}

const l = createListFromArray([1, 2]);
const r = reverseLinkedList(l);
printList(r);
