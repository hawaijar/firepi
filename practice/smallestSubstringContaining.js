// all chars (not necessarily in the same order) in str1 is in str2?
function isSubstring(str1, str2) {
  // base case
  if (str1.length > str2.length) return false;
  let temp2 = str2.slice().split("");
  let temp1 = str1.slice().split("");
  let hash = {};
  for (let i = 0; i < temp1.length; i++) {
    const char = temp1[i];
    const j = temp2.indexOf(char);
    if (j !== -1) {
      temp2[j] = -1;
    } else {
      return false;
    }
  }
  return true;
}

function smallestSubstringContaining(bigString, smallString) {
  let [i, j] = [0, 0];
  let smallest = "";
  while (j < bigString.length) {
    while (j < smallString.length) {
      j += 1;
    }
    while (isSubstring(smallString, bigString.slice(i, j + 1))) {
      let temp = bigString.slice(i, j + 1);
      if (smallest.length === 0) {
        smallest = temp;
      } else {
        smallest = temp.length < smallest.length ? temp : smallest;
      }
      i += 1;
    }
    j += 1;
  }
  return smallest;
}

console.log(
  smallestSubstringContaining("abcdefghijklmnopqrstuvwxyz", "aajjttwwxxzz")
);

// console.log(isSubstring("aajjttwwxxzz", "abzacdwejxjftghiwjtklmnopqrstuvwxyz"));
