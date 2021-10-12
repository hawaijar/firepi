// Given a string, return all Valid IP addresses that can be created out of it.

function isValidIP(str) {
  if (str.length > 3 || str.length === 0) return false;
  if (str.length > 1 && str[0] === "0") return false;
  const number = Number(str);
  if (Object.is(number, NaN)) return false;

  return number <= 255;
}

function validIPAddresses(string) {
  // base case
  if (string.length < 4 || string.length > 12) {
    return [];
  }
  const LEN = string.length;
  const result = [];
  for (let i = 1; i < Math.min(LEN, 4); i++) {
    let first = string.slice(0, i);
    if (isValidIP(first)) {
      for (let j = i + 1; j < Math.min(LEN, i + 4); j++) {
        let second = string.slice(i, j);
        if (isValidIP(second)) {
          for (let k = j + 1; k < Math.min(LEN, j + 4); k++) {
            let third = string.slice(j, k);
            let fourth = string.slice(k);
            if (isValidIP(third) && isValidIP(fourth)) {
              result.push(`${first}.${second}.${third}.${fourth}`);
            }
          }
        }
      }
    }
  }
  return result;
}

const str = "1921680";
console.log(validIPAddresses(str));
