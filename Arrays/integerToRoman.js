// https://leetcode.com/problems/integer-to-roman/

const ROMAN_SYMBOLS = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
  4: "IV",
  9: "IX",
  40: "XL",
  90: "XC",
  400: "CD",
  900: "CM",
};
function intToRoman(num) {
  if (num in ROMAN_SYMBOLS) return ROMAN_SYMBOLS[num];
  const result = [];
  while (num > 0) {
    if (num in ROMAN_SYMBOLS) {
      result.push(ROMAN_SYMBOLS[num]);
      break;
    } else if (num < 5) {
      result.push(ROMAN_SYMBOLS[1]);
      num -= 1;
    } else if (num < 10) {
      result.push(ROMAN_SYMBOLS[5]);
      num -= 5;
    } else if (num < 40) {
      result.push(ROMAN_SYMBOLS[10]);
      num -= 10;
    } else if (num < 50) {
      result.push(ROMAN_SYMBOLS[40]);
      num -= 40;
    } else if (num < 90) {
      result.push(ROMAN_SYMBOLS[50]);
      num -= 50;
    } else if (num < 100) {
      result.push(ROMAN_SYMBOLS[90]);
      num -= 90;
    } else if (num < 400) {
      result.push(ROMAN_SYMBOLS[100]);
      num -= 100;
    } else if (num < 500) {
      result.push(ROMAN_SYMBOLS[400]);
      num -= 400;
    } else if (num < 900) {
      result.push(ROMAN_SYMBOLS[500]);
      num -= 500;
    } else if (num < 1000) {
      result.push(ROMAN_SYMBOLS[900]);
      num -= 900;
    } else if (num > 1000) {
      result.push(ROMAN_SYMBOLS[1000]);
      num -= 1000;
    }
  }
  return result.join("");
}

console.log(intToRoman(11));
