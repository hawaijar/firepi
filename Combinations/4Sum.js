// https://leetcode.com/problems/4sum/

function fourSumExpensiveWay(nums, target) {
  const result = [];
  const hash = {};

  const combine = (prefix, array) => {
    if (prefix.length > 4) return;
    if (prefix.length === 4 && prefix.reduce((a, b) => a + b, 0) === target) {
      const temp = prefix.slice().sort((a, b) => a - b);
      if (!(temp.toString() in hash)) {
        hash[temp.toString()] = true;
        result.unshift(temp);
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        prefix = [...prefix, array[i]];
        combine(prefix, array.slice(i + 1));
        prefix.pop();
      }
    }
  };
  combine([], nums);

  return result;
}

let nums = [2, 2, 2, 2, 2],
  target = 8;
