/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Array of positive integers.

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
1 ≤ inputArray[i] ≤ 1000.

[input] integer k

An integer (not greater than the length of inputArray).

Guaranteed constraints:
1 ≤ k ≤ inputArray.length.

[output] integer

The maximal possible sum.
*/

function arrayMaxConsecutiveSum(inputArray, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < inputArray.length; i += 1) {
    sum += inputArray[i];
    if (i >= k) sum -= inputArray[i - k];
    if (sum > max) max = sum;
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8
console.log(arrayMaxConsecutiveSum([2, 4, 10, 1], 2)); // 14
console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3)); // 9
console.log(arrayMaxConsecutiveSum([3, 2, 1, 1], 1)); // 3
console.log(arrayMaxConsecutiveSum([1, 3, 4, 2, 4, 2, 4], 4)); // 13
console.log(arrayMaxConsecutiveSum([/* very long array */], 6886)); // 3484062
console.log(arrayMaxConsecutiveSum([/* very long array */], 61399)); // 30785107

/*
Execution time limit exceeded on test 7

function arrayMaxConsecutiveSum(inputArray, k) {
  const sumArray = [];

  for (let i = 0; i < inputArray.length - 1; i += 1) {
    sumArray.push(inputArray.slice(i, k + i));
  }

  for (let i = 0; i < sumArray.length; i += 1) {
    sumArray[i] = sumArray[i].reduce((prev, curr) => prev + curr, 0);
  }

  return Math.max(...sumArray);
}
*/
