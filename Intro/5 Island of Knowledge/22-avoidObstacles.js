/*
You are given an array of integers representing coordinates of obstacles
situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right.
You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.

Check out the image below for better understanding:

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Non-empty array of positive integers.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i] ≤ 40.

[output] integer

The desired length.
*/

let jump = 2;
function avoidObstacles(inputArray) {
  for (let i = 0; i < inputArray.length; i += 1) {
    let j = 1;
    while (j < 20) {
      if (inputArray[i] === j * jump) {
        jump += 1;
        console.log(jump);
        avoidObstacles(inputArray);
      }
      j += 1;
    }
  }
  return jump;
}

console.log(avoidObstacles([5, 3, 6, 7, 9])); // 4
console.log(avoidObstacles([2, 3])); // 4
console.log(avoidObstacles([1, 4, 10, 6, 2])); // 7
console.log(avoidObstacles([19, 32, 11, 23])); // 3
console.log(avoidObstacles([5, 8, 9, 13, 14])); // 6
