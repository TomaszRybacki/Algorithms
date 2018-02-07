/*
Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

Example

For n = 9, the output should be
isSumOfConsecutive2(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

For n = 8, the output should be
isSumOfConsecutive2(n) = 0.

There are no ways to represent n = 8.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 25.

[output] integer
*/

function isSumOfConsecutive2(n) {
  let numberOfWays = 0;
  for (let i = 1; i <= 25; i += 1) {
    if (i + (i + 1) === n) {
      numberOfWays += 1;
    } else if (i + (i + 1) + (i + 2) === n) {
      numberOfWays += 1;
    } else if (i + (i + 1) + (i + 2) + (i + 3) === n) {
      numberOfWays += 1;
    } else if (i + (i + 1) + (i + 2) + (i + 3) + (i + 4) === n) {
      numberOfWays += 1;
    }
  }
  return numberOfWays;
}

console.log(isSumOfConsecutive2(9)); // 2
console.log(isSumOfConsecutive2(8)); // 0
console.log(isSumOfConsecutive2(15)); // 3
