const { ListNode, createListFromArray, printList } = require("../main");

function rearrangeLinkedList(head, k) {
  // base case(s)
  if (!head || !head.next) return head;
  let current = head;
  let [smallerHead, smallerTail, largerHead, largerTail, equalHead, equalTail] =
    [null, null, null, null, null, null];
  let node;
  while (current) {
    if (current.value === k) {
      node = current;
      if (!equalHead) {
        equalHead = node;
        equalTail = node;
      } else {
        equalTail.next = node;
        equalTail = node;
      }
    } else if (current.val < k) {
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
  if (smallerTail) {
    smallerTail.next = null;
  }
  if (equalTail) {
    equalTail.next = null;
  }
  if (largerTail) {
    largerTail.next = null;
  }

  if (!equalHead && !smallerHead && !largerHead) return null;
  if (smallerHead) {
    if (equalHead) {
      smallerTail.next = equalHead;
      if (largerHead) {
        equalTail.next = largerHead;
        largerTail.next = null;
      } else {
        equalTail.next = null;
      }
      head = smallerHead;
    } else if (largerHead) {
      smallerHead.next = largerHead;
      largerTail.next = null;
      head = smallerHead;
    } else {
      smallerTail.next = null;
      head = smallerHead;
    }
  } else if (equalHead) {
    if (largerHead) {
      equalTail.next = largerHead;
      largerTail.next = null;
    }
    head = equalHead;
  } else if (largerHead) {
    largerTail.next = null;
    head = largerHead;
  }
  return head;
}

const l = createListFromArray([3, 0, 5, 2, 1, 4]);
const p = rearrangeLinkedList(l, 3);
printList(p);
