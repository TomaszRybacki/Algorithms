/*
You are given an array of integers.
On each move you are allowed to increase exactly one of its element by one.
Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
-105 ≤ inputArray[i] ≤ 105.

[output] integer

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
*/

function arrayChange(inputArray) {
  let counter = 0;

  for (let i = 0; i < inputArray.length; i += 1) {
    while (inputArray[i] >= inputArray[i + 1]) {
      inputArray[i + 1] += 1;
      counter += 1;
    }
  }
  return counter;
}

console.log(arrayChange([1, 1, 1])); // 3
console.log(arrayChange([-1000, 0, -2, 0])); // 5
console.log(arrayChange([2, 1, 10, 1])); // 12
console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])); // 13

/*
Execution time limit exceeded on test 8

let counter = 0;
function arrayChange(inputArray) {
  let difference = 0;

  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] >= inputArray[i + 1]) {
      difference = inputArray[i] - inputArray[i + 1];
      inputArray[i + 1] += Math.max(difference, 1);
      counter += Math.max(difference, 1);
      arrayChange(inputArray);
    }
  }
  return counter;
}
*/
