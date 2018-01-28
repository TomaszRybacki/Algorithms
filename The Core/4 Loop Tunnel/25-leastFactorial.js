/*
Given an integer n, find the minimal k such that

k = m! (where m! = 1 * 2 * ... * m) for some integer m;
k >= n.
In other words, find the smallest factorial which is not less than n.

Example

For n = 17, the output should be
leastFactorial(n) = 24.

17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 120.

[output] integer
*/

function factorial(m) {
  if (m === 1) {
    return 1;
  }
  return m * factorial(m - 1);
}

function leastFactorial(n) {
  let m = 1;
  let k;
  while (factorial(m) <= 120) {
    k = factorial(m);
    m += 1;
    if (k >= n) {
      return k;
    }
  }
}

console.log(leastFactorial(17)); // 24
console.log(leastFactorial(1)); // 1
console.log(leastFactorial(5)); // 6
