/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/

function isLucky(n) {
  const half = n.toString().length / 2;
  let firstHalf = n.toString().split('').slice(0, half).map(num => Number(num));
  let secondHalf = n.toString().split('').slice(half).map(num => Number(num));

  firstHalf = firstHalf.reduce((prev, curr) => prev + curr, 0);
  secondHalf = secondHalf.reduce((prev, curr) => prev + curr, 0);

  return firstHalf === secondHalf;
}

console.log(isLucky(1230)); // true
console.log(isLucky(239017)); // false
console.log(isLucky(134008)); // true
console.log(isLucky(10)); // false
console.log(isLucky(11)); // true
console.log(isLucky(1010)); // true
console.log(isLucky(261534)); // false
console.log(isLucky(100000)); // false
console.log(isLucky(999999)); // true
console.log(isLucky(123321)); // true
