// Given a list of positive integers, find the max sum of non/adjacent elements.
// E.g. For [7,10,12,7,9,14], the answer should be [33, [14, 12, 7] ]

function maxNonAdjacentSum(array) {
  // base cases
  if (array.length === 0) return [0, []];
  if (array.length === 1) return [array[0], array];
  if (array.length === 1)
    return [Math.max(array[0], array[1]), [Math.max(array[0], array[1])]];

  let max = array[0];
  let result = [array[0], Math.max(array[0], array[1])];
  for (let i = 2; i < array.length; i++) {
    result[i] = Math.max(result[i - 1], array[i] + result[i - 2]);
    max = Math.max(max, result[i]);
  }
  const nums = [];
  let temp = max;
  while (temp !== 0) {
    let num = result.indexOf(temp);
    nums.push(array[num]);
    temp = temp - array[num];
  }

  return [max, nums];
}

console.log(maxNonAdjacentSum([7, 10, 12, 7, 9, 14]));
