let locations = [];

function getLocations(string, substring) {
  let startIndex = 0;
  while (startIndex < string.length) {
    let nextIndex = string.indexOf(substring, startIndex);
    if (nextIndex !== -1) {
      locations.push([nextIndex, nextIndex + substring.length - 1]);
      startIndex = nextIndex + 1;
    } else {
      break;
    }
  }
}

function underScoreSubstring(string, substring) {
  const regex = new RegExp(substring);
  // base case
  if (!regex.test(string)) {
    return string;
  }
  getLocations(string, substring);
  if (locations.length === 0) return string;
  const result = [];
  let i = 0;
  // Merge contiguous/overlapping substring
  while (i < locations.length) {
    let start = locations[i];
    let current = locations[i];
    if (i + 1 === locations.length) {
      result.push([start[0], current[1]]);
      break;
    }
    let next = locations[i + 1];
    if (next[0] > current[1] + 1) {
      result.push([start[0], current[1]]);
      i += 1;
    } else {
      while (next[0] <= current[1] + 1) {
        i += 1;
        current = next;
        if (i + 1 === locations.length) {
          break;
        }
        next = locations[i + 1];
      }
      result.push([start[0], current[1]]);
      i += 1;
    }
  }
  if (result.length === 0) return string;
  // Insert underscores in those merged substrings
  let temp = "";
  const startIndices = result.map((index) => index[0]);
  i = 0;
  while (i < string.length) {
    if (startIndices.includes(i)) {
      const matchingIndex = startIndices.indexOf(i);
      const interval = result[matchingIndex];
      temp += "_" + string.slice(interval[0], interval[1] + 1) + "_";
      i = interval[1] + 1;
    } else {
      temp += string[i];
      i += 1;
    }
  }
  locations = [];
  return temp;
}

const s1 = "testthis is a test to see if it works";
const s2 = "test";

console.log(underScoreSubstring(s1, s2));
