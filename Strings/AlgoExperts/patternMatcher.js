/*
	pattern: 'xxyxxy',
	string: 'gogopowerrangergogopowerranger'

	o/p: ['go', 'powerranger']
 */

function isMatching(pattern, xValue, yValue, string) {
  let result = "";
  for (let m of pattern) {
    if (m === "x") {
      result += xValue;
    }
    if (m === "y") {
      result += yValue;
    }
  }
  return result === string;
}

function isMatchingXOnlyYOnly(pattern, value, string) {
  let result = "";
  for (let m of pattern) {
    result += value;
  }
  return result === string;
}

function patternMatcher(pattern, string) {
  // convert the pattern 'xxyxxy' so that it starts with 'x'
  // If the pattern is 'yxy', we're converting to 'xyx' which is same as 'xyx'
  let isXFirst = true;
  let m = pattern[0];
  if (m === "y") isXFirst = false;

  const newPattern = [];
  for (let char of pattern) {
    if (char === m) {
      newPattern.push("x");
    } else {
      newPattern.push("y");
    }
  }

  let countX = newPattern.filter((i) => i === "x").length;
  let countY = newPattern.filter((i) => i === "y").length;

  if (countY === 0) {
    if (pattern.indexOf("x") === -1) {
      if (pattern.indexOf("y") === -1) {
        return [];
      } else {
        countY = pattern.length;
        countX = 0;
      }
    } else {
      countX = pattern.length;
      countY = 0;
    }
  }

  if (countX > 0 && countY > 0) {
    let yPos = newPattern.indexOf("y");
    for (let i = 1; i < string.length; i++) {
      let xValue = string.slice(0, i);
      let yValueLength = (string.length - countX * xValue.length) / countY;
      let yValue = string.slice(
        yPos * xValue.length,
        yPos * xValue.length + yValueLength
      );
      if (isMatching(newPattern, xValue, yValue, string)) {
        return isXFirst ? [xValue, yValue] : [yValue, xValue];
      }
    }
  } else if (countX > 0) {
    for (let i = 1; i < string.length; i++) {
      let xValue = string.slice(0, i);
      if (isMatchingXOnlyYOnly(pattern, xValue, string)) {
        return [xValue, ""];
      }
    }
  } else if (countY > 0) {
    for (let i = 1; i < string.length; i++) {
      let yValue = string.slice(0, i);
      if (isMatchingXOnlyYOnly(pattern, yValue, string)) {
        return ["", yValue];
      }
    }
  }
  return [];
}

const pattern = "yxyx";
const string = "abab";

console.log(patternMatcher(pattern, string));
