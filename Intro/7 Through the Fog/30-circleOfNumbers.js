/*
Consider integer numbers from 0 to n - 1 written down along the circle
in such a way that the distance between any two neighbouring numbers is
equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber, find the number which is written in the radially
opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) = 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive even integer.

Guaranteed constraints:
4 ≤ n ≤ 20.

[input] integer firstNumber

Guaranteed constraints:
0 ≤ firstNumber ≤ n - 1.

[output] integer
*/

function circleOfNumbers(n, firstNumber) {
  let result = (n / 2) + firstNumber;
  if (result >= n) {
    result = Math.abs((n / 2) - firstNumber);
  }
  return result;
}

console.log(circleOfNumbers(10, 2)); // 7
console.log(circleOfNumbers(10, 7)); // 2
console.log(circleOfNumbers(4, 1)); // 3
console.log(circleOfNumbers(6, 3)); // 0
