const { createListFromArray, printList, ListNode } = require("../main");

function findLoop(head) {
  // base case
  if (!head || !head.next) return head;
  let hash = new Map();
  let current = head;
  while (current) {
    if (hash.has(current)) return current;
    hash.set(current, true);
    current = current.next;
  }
  return null;
}
