// https://leetcode.com/problems/multiply-strings/

function multiplyListByChar(list = "", multiplier) {
  if (list.length === 0) return [];
  let carry = 0;
  let arr = [];
  for (let char of list.split("").reverse()) {
    let digit = +char;
    multiplier = +multiplier;
    let mul = digit * multiplier + carry;
    if (mul > 9) {
      let remainder = mul % 10;
      carry = Math.floor(mul / 10);
      arr.push(remainder);
    } else {
      carry = 0;
      arr.push(mul);
    }
  }
  if (carry > 0) {
    arr.push(carry);
  }
  return arr.reverse();
}
function sumList(list1 = [], list2 = []) {
  let length = list1.length > list2.length ? list1.length : list2.length;
  const result = [];
  let carry = 0;
  for (let i = length - 1; i >= 0; i--) {}
}
console.log(multiplyListByChar("9734", "3"));
