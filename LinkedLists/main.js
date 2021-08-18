class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function createListFromArray(array) {
  let head = new ListNode(array[0]);
  let current = head;

  let count = 1;

  while (count < array.length) {
    let node = new ListNode(array[count]);
    current.next = node;
    current = node;
    count += 1;
  }
  return head;
}
function printList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

// let l1 = createListFromArray([2, 4, 3]);
// let l2 = createListFromArray([5, 6, 4]);
// printList(l1);
// console.log("=========================");
// printList(l2);

module.exports = {
  ListNode,
  createListFromArray,
  printList,
};
