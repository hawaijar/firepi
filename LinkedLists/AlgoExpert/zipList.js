const { createListFromArray, printList } = require("../main");
function zipLinkedList(head) {
  // base case(s)
  if (!head || !head.next || !head.next.next) return head;
  const pointers = [];
  let current = head;
  while (current) {
    pointers.push(current);
    current = current.next;
  }
  let [i, j] = [0, pointers.length - 1];

  while (i <= j) {
    let p = pointers[i].next;
    pointers[i].next = pointers[j];
    pointers[j].next = p;
    p = p.next;
    i += 1;
    j -= 1;
    if (i === j) {
      pointers[i].next = null;
      break;
    }
    if (p === pointers[j]) {
      pointers[i].next = pointers[j];
      p.next = null;
      break;
    }
  }
  return head;
}

const l = createListFromArray([1, 2, 3, 4, 5]);
printList(l);
const zipList = zipLinkedList(l);
printList(l);
