/*
Find the sum of all digits that occur in a string.

Example

For inputString = "2 apples, 12 oranges", the output should be
sumUpDigits(inputString) = 5.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
5 ≤ inputString.length ≤ 20.

[output] integer
*/

function sumUpDigits(inputString) {
  let numbers = inputString.match(/\d+/g);
  if (numbers === null) return 0;
  numbers = numbers.map(num => num.split('')).reduce((prev, curr) => prev.concat(curr), []);
  return numbers.reduce((prev, curr) => prev + Number(curr), 0);
}

console.log(sumUpDigits('2 apples, 12 oranges')); // 5
console.log(sumUpDigits('Nie ma tu cyfr.')); // 0
