// Given a list of distinct integers and a target,find all triplets that sum up to the target value

// POINT TO BE REMEMBER: Always start by sorting the numbers!!!
// USE TWO POINTERS method - first loop will be for 'a, second loop for 'b' and 'c'
function threeNumberSum(array, target) {
  // base case
  if (array.length <= 2) return [];

  // sort the numbers
  array = array.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < array.length - 2; i++) {
    // base case
    const a = array[i];
    if (a > target) return result;
    let [j, k] = [i + 1, array.length - 1];
    while (j < k) {
      const b = array[j];
      const c = array[k];

      const sum = a + b + c;
      if (sum === target) {
        result.push([a, b, c]);
        j += 1;
        k -= 1;
      } else if (sum < target) {
        j += 1;
      } else {
        k -= 1;
      }
    }
  }
  return result;
}
const a = [8, 10, -2, 49, 14];
console.log(threeNumberSum(a, 57));
