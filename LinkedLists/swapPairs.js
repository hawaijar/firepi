// https://leetcode.com/problems/swap-nodes-in-pairs/

const { createListFromArray, printList } = require("./main");

function swapPairs(head) {
  // base case
  if (!head || !head.next) {
    return head;
  }
  const [first, second] = [head, head.next];
  first.next = swapPairs(second.next);
  second.next = first;
  return second;
}

const l = createListFromArray([1, 2, 3, 4]);
const swappedList = swapPairs(l);

console.log(printList(l));
console.log("===============");
console.log(printList(swappedList));
