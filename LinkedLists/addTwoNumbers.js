const { ListNode, createListFromArray, printList } = require("./main");

function addTwoNumbers(l1, l2) {
  // base case(s)
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let [current1, current2] = [l1, l2];
  let l3;
  let carry = 0;
  let current3;
  let temp;
  while (current1 || current2) {
    let node;
    temp =
      (!current1 ? 0 : current1.val) + (!current2 ? 0 : current2.val) + carry;
    if (temp >= 10) {
      let remainder = temp % 10;
      carry = Math.floor(temp / 10);
      node = new ListNode(remainder);
    } else {
      carry = 0;
      node = new ListNode(temp);
    }

    if (!l3) {
      l3 = node;
      current3 = l3;
    } else {
      current3.next = node;
      current3 = node;
    }
    current1 = !current1 ? null : current1.next;
    current2 = !current2 ? null : current2.next;
  }
  if (carry) {
    current3.next = new ListNode(carry);
  }
  return l3;
}

let l1 = createListFromArray([9, 9, 9, 9, 9, 9, 9]);
let l2 = createListFromArray([9, 9, 9, 9]);

let l3 = addTwoNumbers(l1, l2);
console.log("=============");
printList(l3);
