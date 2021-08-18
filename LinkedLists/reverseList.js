const { createListFromArray, printList } = require("./main");

function reverseList(list) {
  if (!list || !list.next) return list;
  let current = list;
  let pointers = [];
  while (current) {
    pointers.push(current);
    current = current.next;
  }
  let i = pointers.length - 1;
  const head = pointers[i];
  while (i > 0) {
    pointers[i].next = pointers[i - 1];
    pointers[i - 1].next = null;
    i -= 1;
  }
  return head;
}

const l = createListFromArray([1]);
printList(l);
console.log("==============");
const rl = reverseList(l);
printList(rl);
