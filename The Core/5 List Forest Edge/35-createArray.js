/*
Given an integer size, return array of length size filled with 1s.

Example

For size = 4, the output should be
createArray(size) = [1, 1, 1, 1].

Input/Output

[execution time limit] 4 seconds (js)

[input] integer size

A positive integer.

Guaranteed constraints:
1 ≤ size ≤ 10.

[output] array.integer
*/

function createArray(size) {
  const arrayOfOnes = [];
  for (let i = 0; i < size; i += 1) {
    arrayOfOnes.push(1);
  }
  return arrayOfOnes;
}

console.log(createArray(4)); // [1, 1, 1, 1]
console.log(createArray(2)); // [1, 1]
