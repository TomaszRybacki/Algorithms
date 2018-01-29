/*
We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element
whose index number is the same when counting from the beginning of the
array and from its end;
if arr contains an even number of elements, its middle is the sum of
the two elements whose index numbers when counting from the beginning
and from the end of the array differ by one.
Given array arr, your task is to find its middle, and, if it consists
of two elements, replace those elements with the value of middle.
Return the resulting array as the answer.

Example

For arr = [7, 2, 2, 5, 10, 7], the output should be
replaceMiddle(arr) = [7, 2, 7, 10, 7].

The middle consists of two elements, 2 and 5.
These two elements should be replaced with their sum, i.e. 7.

For arr = [-5, -5, 10], the output should be
replaceMiddle(arr) = [-5, -5, 10].

The middle is defined as a single element -5,
so the initial array with no changes should be returned.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer arr

The given array.

Guaranteed constraints:
2 ≤ arr.length ≤ 104,
-103 ≤ arr[i] ≤ 103.

[output] array.integer

arr with its middle replaced by a single element,
or the initial array if the middle consisted of a single element to begin with.
*/

function replaceMiddle(arr) {
  let middleValue;
  const middleIndex = Math.floor((arr.length - 1) / 2);

  if (arr.length % 2 === 0) {
    middleValue = arr[middleIndex] + arr[middleIndex + 1];
    arr.splice(middleIndex, 1);
    arr[middleIndex] = middleValue;
  }

  return arr;
}

console.log(replaceMiddle([7, 2, 2, 5, 10, 7])); // [7, 2, 7, 10, 7]
console.log(replaceMiddle([-5, -5, 10])); // [-5, -5, 10]
console.log(replaceMiddle([45, 23, 12, 33, 12, 453, -234, -45]));
// [45, 23, 12, 45, 453, -234, -45]
console.log(replaceMiddle([2, 8])); // [10]
console.log(replaceMiddle([-12, 34, 40, -5, -12, 4, 0, 0, -12]));
// [-12, 34, 40, -5, -12, 4, 0, 0, -12]
console.log(replaceMiddle([9, 0, 15, 9])); // [9, 15, 9]
console.log(replaceMiddle([-6, 6, -6])); // [-6, 6, -6]
console.log(replaceMiddle([26, 26, -17])); // [26, 26, -17]
console.log(replaceMiddle([-7, 5, 5, 10])); // [-7, 10, 10]
