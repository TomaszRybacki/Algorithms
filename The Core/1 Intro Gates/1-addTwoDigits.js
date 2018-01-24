/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
addTwoDigits(n) = 11.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number.

Tests:

n: 29 = 11
n: 48 = 12
n: 10 = 1
n: 25 = 7
*/

function addTwoDigits(n) {
  let sum = 0;
  const nArray = n.toString().split('');

  for (let i = 0; i < nArray.length; i += 1) {
    sum += Number(nArray[i]);
  }

  return sum;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(48));
console.log(addTwoDigits(10));
console.log(addTwoDigits(25));
