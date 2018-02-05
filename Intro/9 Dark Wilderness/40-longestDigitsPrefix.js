/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString="123aa1", the output should be
longestDigitsPrefix(inputString) = "123".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
3 ≤ inputString.length ≤ 35.

[output] string
*/

function longestDigitsPrefix(inputString) {
  return (inputString.search(/\D/) !== -1) ? inputString.slice(0, inputString.search(/\D/)) : inputString;
}

console.log(longestDigitsPrefix('123aa1')); // "123"
console.log(longestDigitsPrefix('0123456789')); // "0123456789"
console.log(longestDigitsPrefix('  3) always check for whitespaces')); // empty
console.log(longestDigitsPrefix('12abc34')); // "12"
console.log(longestDigitsPrefix('the output is 42')); // empty
