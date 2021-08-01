//Compute r mod a power of two, e.9., returns 13 for 77 mod 64.
function calculate(x, y) {
  return x & (y - 1); // (y - 1) represents all 1s if y is a power of 2
  // In decimal, x % 10 --> gives the last digit
  // x % 100 --> gives the last 2 digits and so on
  // so, (y - 1) which is all 1s (say, z 1s) do bitwise '&' with x will give the last z bits of x.
}

console.log(calculate(77, 64));
