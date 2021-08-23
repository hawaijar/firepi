// A1 = [1,4,5]  [6,4,9]
// A2 = [5,6,7]  [5,6,7]
// S =  [7,1,2]  [1,2,1,6]

// Assuming both arrays are of same length
function sumTwoArrays(list1 = [], list2 = []) {
  const LEN = list1.length;
  let result = new Array(LEN + 1).fill(0);
  let carry = 0;
  for (let i = LEN - 1; i >= 0; i--) {
    let s = list1[i] + list2[i] + carry;
    result[i + 1] = s % 10;
    if (s > 9) {
      carry = Math.floor(s / 10);
    } else {
      carry = 0;
    }
  }
  if (carry > 0) {
    result[0] = carry;
  } else {
    result.shift();
  }
  return result;
}
function sumNArrays(...lists) {
  const LEN = lists[0].length;
  let result = new Array(LEN + 1).fill(0);
  let carry = 0;
  for (let i = LEN - 1; i >= 0; i--) {
    let s = 0;
    for (let j = 0; j < lists.length; j++) {
      s += lists[j][i];
    }
    result[i + 1] = s % 10;
    if (s > 9) {
      carry = Math.floor(s / 10);
    } else {
      carry = 0;
    }
  }
  if (carry > 0) {
    result[0] = carry;
  } else {
    result.shift();
  }
  return result;
}

// console.log(sumTwoArrays([1, 4, 9], [5, 6, 7]));
console.log(sumNArrays([4, 2, 3], [4, 2, 3], [4, 2, 3]));
