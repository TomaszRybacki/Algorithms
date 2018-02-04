/*
Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';
For inputString = "0ss", the output should be
firstDigit(inputString) = '0'.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string containing at least one digit.

Guaranteed constraints:
3 ≤ inputString.length ≤ 10.

[output] char
*/

function firstDigit(inputString) {
  const index = inputString.search(/\d/);
  return inputString[index];
}

console.log(firstDigit('var_1__Int')); // 1
console.log(firstDigit('q2q-q')); // 2
console.log(firstDigit('0ss')); // 0
