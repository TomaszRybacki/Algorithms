/*
Given an array of integers, find the maximal absolute difference
between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 10,
-15 ≤ inputArray[i] ≤ 15.

[output] integer

The maximal absolute difference.
*/

function arrayMaximalAdjacentDifference(inputArray) {
  const resultArray = [];

  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i + 1] !== undefined) {
      resultArray.push(Math.abs(inputArray[i + 1] - inputArray[i]));
    }
  }

  return Math.max(...resultArray);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0])); // 3
console.log(arrayMaximalAdjacentDifference([1, 1, 1, 1])); // 0
console.log(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2])); // 7
