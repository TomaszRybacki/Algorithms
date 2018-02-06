/*
Given some integer, find the maximal number you can obtain by
deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer
*/

function deleteDigit(n) {
  const allPossibleNumbers = [];
  const nString = n.toString();

  for (let i = 0; i < nString.length; i += 1) {
    allPossibleNumbers.push(nString.slice(0, i) + nString.slice(i + 1, nString.length));
  }
  return Math.max(...allPossibleNumbers);
}

console.log(deleteDigit(152)); // 52
console.log(deleteDigit(1001)); // 101
console.log(deleteDigit(10)); // 1
console.log(deleteDigit(222219)); // 22229
