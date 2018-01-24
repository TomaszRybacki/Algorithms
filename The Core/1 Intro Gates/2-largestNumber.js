/*
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
largestNumber(n) = 99.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 7.

[output] integer

The largest integer of length n.
Tests:
n: 2 = 99
n: 1 = 9
*/

function largestNumber(n) {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += '9';
  }
  return Number(result);
}

console.log(largestNumber(2));
console.log(largestNumber(1));
