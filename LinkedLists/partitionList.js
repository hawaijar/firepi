const { ListNode, createListFromArray, printList } = require("./main");

function partition(head, x) {
  // base case(s)
  if (!head || !head.next) return head;
  let current = head;
  let [smallerHead, smallerTail, largerHead, largerTail] = [
    null,
    null,
    null,
    null,
  ];
  let node;
  while (current) {
    if (current.val < x) {
      node = current;
      if (!smallerHead) {
        smallerHead = node;
        smallerTail = node;
      } else {
        smallerTail.next = node;
        smallerTail = node;
      }
    } else {
      node = current;
      if (!largerHead) {
        largerHead = node;
        largerTail = node;
      } else {
        largerTail.next = node;
        largerTail = node;
      }
    }
    current = current.next;
  }
  if (!smallerHead && !largerHead) return null;
  if (smallerHead && largerHead) {
    smallerTail.next = largerHead;
    largerTail.next = null;
    head = smallerHead;
  }
  // check smallerHead & largerHead
  else if (!smallerHead) {
    largerTail.next = null;
    head = largerHead;
  } else {
    smallerTail.next = null;
    head = smallerHead;
  }
  return head;
}

const l = createListFromArray([1, 4, 3, 2, 5, 2]);
const p = partition(l, 3);
printList(p);
