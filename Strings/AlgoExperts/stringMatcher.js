// point 1: Create a hash to capture the characteristics of the 'smallString' - what are the chars and count of its char
// Use two pointers (left & right - initially pointing to the start of 'bigString' ) and start scanning from left to right

function hashesMatching(h1, h2) {
  for (let key in h2) {
    if (key in h1) {
      if (h1[key] < h2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

function smallestSubstringContaining(bigString, smallString) {
  // start: point 1
  let hashSmaller = {};
  for (let char of smallString) {
    if (char in smallString) {
      hashSmaller[char] += 1;
    } else {
      hashSmaller[char] = 0;
    }
  }
  // end: point 1
  let result = "";
  let [left, right] = [0, 0];
  let localHash = {};
  while (right < bigString.length) {
    const char = bigString[right];
    if (char in hashSmaller) {
      if (char in localHash) {
        localHash[char] += 1;
      } else {
        localHash[char] = 0;
      }
    }
    if (hashesMatching(localHash, hashSmaller)) {
      const string = bigString.slice(left, right + 1);
      if (result === "") {
        result = string;
      } else {
        if (string.length < result.length) {
          result = string;
        }
      }
      // move left till it encounters a character that doesn't belong to smallerHash
      let charAtLeft = bigString[left];
      while (!(charAtLeft in localHash)) {
        left += 1;
      }
      left += 1;
      right += 1;
    } else {
      // move right
      right += 1;
    }
  }
}
