/*
The positive divisor of X is called trivial if it is equal to 1 or to X.
All other positive divisors are called non-trivial.

Given array of integers superset and integer n, find the number of integers
between 1 and n, inclusive, such that for each of these integers superset is
the superset of its non-trivial divisors (i.e. it contains all of them).

Example

For superset = [3, 2] and n = 13, the output should be
divisorsSuperset(superset, n) = 10.

Here are these numbers: 1, 2, 3, 4, 5, 6, 7, 9, 11, 13.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer superset

Array of positive integers.

Guaranteed constraints:
1 ≤ superset.length ≤ 5,
1 ≤ superset[i] ≤ 10.

[input] integer n

A positive integer.

Guaranteed constraints:
10 ≤ n ≤ 20.

[output] integer
*/

function divisorsSuperset(superset, n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    let ok = 0;
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0 && !superset.includes(j)) ok += 1;
    }
    if (ok === 0) result += 1;
  }
  return result;
}

console.log(divisorsSuperset([3, 2], 13)); //10
