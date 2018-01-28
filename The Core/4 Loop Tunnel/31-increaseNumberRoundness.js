/*
Define an integer's roundness as the number of trailing zeroes in it.

Given an integer n, check if it's possible to increase n's
roundness by swapping some pair of its digits.

Example

For n = 902200100, the output should be
increaseNumberRoundness(n) = true.

One of the possible ways to increase roundness of n is to swap
digit 1 with digit 0 preceding it: roundness of 902201000 is 3, and roundness of n is 2.

For instance, one may swap the leftmost 0 with 1.

For n = 11000, the output should be
increaseNumberRoundness(n) = false.

Roundness of n is 3, and there is no way to increase it.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
100 ≤ n ≤ 109.

[output] boolean

true if it's possible to increase n's roundness, false otherwise.
*/

function increaseNumberRoundness(n) {
  const nArray = n.toString().split('');

  for (let i = 0; i < nArray.length; i += 1) {
    if (nArray[i] == 0 && nArray[i + 1] != 0 && nArray[i + 1] !== undefined) {
      return true;
    }
  }
  return false;
}

console.log(increaseNumberRoundness(902200100)); // true
console.log(increaseNumberRoundness(11000)); // false
console.log(increaseNumberRoundness(99080)); // true
console.log(increaseNumberRoundness(1022220)); // true
console.log(increaseNumberRoundness(106611)); // true
console.log(increaseNumberRoundness(234230)); // false
console.log(increaseNumberRoundness(888)); // false
console.log(increaseNumberRoundness(100)); // false
console.log(increaseNumberRoundness(1000000000)); // false
console.log(increaseNumberRoundness(103456789)); // true
