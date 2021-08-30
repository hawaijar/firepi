// Given two lists, create a new list which is the sum of the given two lists.
// E.g. L1 = 2 -> 4 -> 7 -> 1
//      L2 = 9 -> 4 -> 5
//      L3 = 1 -> 9 -> 2 -> 2

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // base cases
  if (!linkedListOne && !linkedListTwo) return null;
  if (!linkedListOne) return linkedListTwo;
  if (!linkedListTwo) return linkedListOne;
  let carry = 0;
  let [current1, current2] = [linkedListOne, linkedListTwo];
  let current3;
  let temp3;
  let head3;

  while (current1 || current2) {
    let temp =
      (current1 ? current1.val : 0) + (current2 ? current2.val : 0) + carry;
    if (temp > 9) {
      temp3 = temp % 10;
      carry = Math.floor(temp / 10);
    } else {
      temp3 = temp;
      carry = 0;
    }
    if (current3) {
      current3.next = new ListNode(temp3);
      current3 = current3.next;
    } else {
      head3 = new ListNode(temp3);
      current3 = head3;
    }
    if (current1) {
      current1 = current1.next;
    }
    if (current2) {
      current2 = current2.next;
    }
  }
  if (carry !== 0) {
    current3.next = new ListNode(carry);
  }
  return head3;
}

const { createListFromArray, ListNode, printList } = require("../main");

const l1 = createListFromArray([1, 2, 3]);
const l2 = createListFromArray([6, 7, 9, 1, 8]);
const l3 = sumOfLinkedLists(l1, l2);
console.log(printList(l3));
