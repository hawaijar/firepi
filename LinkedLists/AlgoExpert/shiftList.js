const { ListNode, createListFromArray, printList } = require("../main");

function shift(list, isForward = true) {
  const pointers = [];
  let current = list;
  while (current) {
    pointers.push(current);
    current = current.next;
  }
  const SIZE = pointers.length;
  let [head, tail] = [pointers[0], pointers[SIZE - 1]];
  if (isForward) {
    tail.next = head;
    pointers[SIZE - 2].next = null;
    head = tail;
    tail = pointers[SIZE - 2];
  } else {
    tail.next = head;
    head = head.next;
    tail = tail.next;
    tail.next = null;
  }
  return head;
}
function shiftLinkedList(head, k) {
  // base case(s)
  if (!head || !head.next) return head;
  for (let i = 0; i < Math.abs(k); i++) {
    if (k > 0) {
      head = shift(head, true);
    } else {
      head = shift(head, false);
    }
  }
  return head;
}

const l = createListFromArray([0, 1, 2, 3, 4, 5]);
const ll = shiftLinkedList(l, 2);
printList(ll);
