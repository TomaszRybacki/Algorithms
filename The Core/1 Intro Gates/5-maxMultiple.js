/*
Given a divisor and a bound, find the largest integer N such that:

N is divisible by divisor.
N is less than or equal to bound.
N is greater than 0.
It is guaranteed that such a number exists.

Example

For divisor = 3 and bound = 10, the output should be
maxMultiple(divisor, bound) = 9.

The largest integer divisible by 3 and not larger than 10 is 9.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer divisor

Guaranteed constraints:
2 ≤ divisor ≤ 10.

[input] integer bound

Guaranteed constraints:
5 ≤ bound ≤ 100.

[output] integer

The largest integer not greater than bound that is divisible by divisor.
Tests:
divisor: 3
bound: 10
---------
9

divisor: 2
bound: 7
---------
6

divisor: 10
bound: 50
---------
50

divisor: 7
bound: 100
---------
98
*/

function maxMultiple(divisor, bound) {
  while (bound > divisor) {
    if (bound % divisor === 0) {
      return bound;
    }
    bound -= 1;
  }
}

console.log(maxMultiple(3, 10));
console.log(maxMultiple(2, 7));
console.log(maxMultiple(10, 50));
console.log(maxMultiple(7, 100));
