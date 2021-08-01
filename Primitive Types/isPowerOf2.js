// Variant questions
// Page 27
function isPowerOf2(x) {
  return (x & (x - 1)) === 0;
}
console.log(isPowerOf2(1));
console.log(isPowerOf2(12));
console.log(isPowerOf2(128));
console.log(isPowerOf2(16));
console.log(isPowerOf2(1024));
console.log(isPowerOf2(21));
console.log(isPowerOf2(512));
