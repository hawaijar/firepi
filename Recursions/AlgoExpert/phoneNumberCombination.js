const MAP = {
  1: "1",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
  0: "0",
};

function phoneNumberMnemonics(phoneNumber) {
  // base case(s)
  if (!phoneNumber || phoneNumber.length === 0) return [];

  const result = [];

  const backtracking = (prefix = [], array) => {
    if (array.length === 0) {
      result.push(prefix.slice().join(""));
    } else {
      const letters = MAP[array[0]];
      for (let i = 0; i < letters.length; i++) {
        prefix.push(letters[i]);
        backtracking(prefix, array.slice(1));
        prefix.pop();
      }
    }
  };
  backtracking([], phoneNumber);
  return result;
}

console.log(phoneNumberMnemonics("1905"));
