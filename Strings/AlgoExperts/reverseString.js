// Write a program to reverse words in a given string
// Note: You can't use 'split' function but you can use 'join' function though.

function reverseWord(word) {
  let [i, j] = [0, word.length - 1];
  let newWord = [];
  while (j >= i) {
    newWord.push(word[j]);
    j -= 1;
  }
  return newWord.join("");
}

function reverseWordsInString(string) {
  // base case
  if (string.length === 0) return "";
  let wordRegex = /[^\s]+/g; // selecting all words (non-whitespace characters)

  // reverse all letters of the string
  let [i, j] = [0, string.length - 1];
  let reverseString = [];
  while (j >= i) {
    reverseString.push(string[j]);
    j -= 1;
  }
  reverseString = reverseString.join("");

  // reverse all words in the reversed string
  let words = reverseString.match(wordRegex);
  if (!words) return string;
  for (let word of words) {
    reverseString = reverseString.replace(word, reverseWord(word));
  }

  return reverseString;
}

const string = "";
console.log(reverseWordsInString(string));
