/*
Given integers n, l and r, find the number of ways to represent n as a sum of two
integers A and B such that l ≤ A ≤ B ≤ r.

Example

For n = 6, l = 2 and r = 4, the output should be
countSumOfTwoRepresentations2(n, l, r) = 2.

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
5 ≤ n ≤ 109.

[input] integer l

A positive integer.

Guaranteed constraints:
1 ≤ l ≤ r.

[input] integer r

A positive integer.

Guaranteed constraints:
l ≤ r ≤ 109,
r - l ≤ 106.

[output] integer
*/

function countSumOfTwoRepresentations2(n, l, r) {
  let numberOfWays = 0;

  for (let A = l; A <= r; A += 1) {
    const B = n - A;
    if (l <= A && A <= B && B <= r && A + B === n) {
      numberOfWays += 1;
    }
  }
  return numberOfWays;
}

console.log(countSumOfTwoRepresentations2(6, 2, 4)); // 2
console.log(countSumOfTwoRepresentations2(6, 3, 3)); // 1
console.log(countSumOfTwoRepresentations2(10, 9, 11)); // 0
console.log(countSumOfTwoRepresentations2(24, 8, 16)); // 5
console.log(countSumOfTwoRepresentations2(24, 12, 12)); // 1
console.log(countSumOfTwoRepresentations2(93, 24, 58)); // 12
