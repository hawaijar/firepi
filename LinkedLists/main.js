class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
    this.value = val;
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
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val || current.value);
    current = current.next;
  }
  console.log(result);
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
