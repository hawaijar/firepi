//4.1 Computing the parity of a word

// Flaw: It'll take forever from 12 digit numbers!
function parity_brute(x) {
  let result = 0;
  while (x) {
    result = result ^ (x & 1);
    x = x >> 1;
  }
  return result;
}
// Flaw: It's unstable in large digits (above 32 bits)
// E.g. 19769966903431236503335870463
//1111111110000101010101010101010101010101010101010101011111111111111110000000000001111111111111
// 58 1s and it's returning 1!
// For 2199023255551 (49 1s), it returns 0!
function parity_using_xor(x) {
  let result = 0;
  while (x) {
    result = result ^ 1;
    x = x & (x - 1);
  }
  return result;
}
// Final solution: Amazing one!
// In JS, as of this writing there's no 64 bits but rather 53 bits
// Flaw: It's unstable in large digits (above 32 bits)
// For 2199023255551 (49 1s), it returns 0!
function parity(x) {
  x = x ^ (x >> 16);
  x = x ^ (x >> 8);
  x = x ^ (x >> 4);
  x = x ^ (x >> 2);
  x = x ^ (x >> 1);

  return x & 1;
}
// However below Python code returns proper/expected result
// It works perfectly till 64 digits numbers.
/*
	def parity(x):
		x = x ^ (x >> 32);
		x = x ^ (x >> 16);
  		x = x ^ (x >> 8);
  		x = x ^ (x >> 4);
  		x = x ^ (x >> 2);
  		x = x ^ (x >> 1);
  		return x & 1;
 */

// Don't worry - For JS: Use BigInt() as shown below! Long live JS!
function parity_big_int(x) {
  x = x ^ (x >> 32n);
  x = x ^ (x >> 16n);
  x = x ^ (x >> 8n);
  x = x ^ (x >> 4n);
  x = x ^ (x >> 2n);
  x = x ^ (x >> 1n);

  return x & 1n;
}

//console.log(parity_brute(131321123451));
console.log(parity_using_xor(2199023255551)); // wrong: returns 0
console.log(parity(2199023255551)); // wrong: returns 0
console.log(parity_big_int(BigInt(2199023255551)));
console.log(parity_big_int(BigInt(288230376151711743))); // 58 1s (and it returns 1 - WTF!)

// Tested using -
// https://www.rapidtables.com/convert/number/decimal-to-binary.html (Binary/Decimal)
// https://www.toolmenow.com/32/Even-Parity-Calculator (Parity calculator)
