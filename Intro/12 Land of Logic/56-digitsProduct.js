/*
Given an integer product, find the smallest positive (i.e. greater than 0)
integer the product of whose digits is equal to product.
If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer
*/

function digitsProduct(product) {
  function multiplyDigits(num) {
    return [...num.toString()].reduce((prev, curr) => prev * curr, 1);
  }

  for (let i = 1; i < 5000; i += 1) {
    if (multiplyDigits(i) === product) return i;
  }
  return -1;
}

console.log(digitsProduct(12)); // 26
console.log(digitsProduct(19)); // -1
console.log(digitsProduct(450)); // 2559
console.log(digitsProduct(0)); // 10
console.log(digitsProduct(13)); // -1
console.log(digitsProduct(1)); // 1
console.log(digitsProduct(243)); // 399
console.log(digitsProduct(576)); // 889
console.log(digitsProduct(360)); // 589
