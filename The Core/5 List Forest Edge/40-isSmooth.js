/*
We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the
element whose index number is the same when counting from the beginning
of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the
two elements whose index numbers when counting from the beginning and from
the end of the array differ by one.
An array is called smooth if its first and its last elements are equal to
one another and to the middle. Given an array arr, determine if it is smooth or not.

Example

For arr = [7, 2, 2, 5, 10, 7], the output should be
isSmooth(arr) = true.

The first and the last elements of arr are equal to 7, and its middle also equals 2 + 5 = 7.
Thus, the array is smooth and the output is true.

For arr = [-5, -5, 10], the output should be
isSmooth(arr) = false.

The first and middle elements are equal to -5, but the last element equals 10.
Thus, arr is not smooth and the output is false.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer arr

The given array.

Guaranteed constraints:
2 ≤ arr.length ≤ 105,
-109 ≤ arr[i] ≤ 109.

[output] boolean

true if arr is smooth, false otherwise.
*/

function isSmooth(arr) {
  let middleValue;

  if (arr.length % 2 === 0) {
    middleValue = arr[Math.floor((arr.length - 1) / 2)] + arr[(arr.length / 2)];
  } else {
    middleValue = arr[Math.ceil((arr.length - 1) / 2)];
  }

  return (arr[0] === arr[arr.length - 1] && arr[0] === middleValue);
}

console.log(isSmooth([7, 2, 2, 5, 10, 7])); // true
console.log(isSmooth([-5, -5, 10])); // false
console.log(isSmooth([4, 2])); // false
console.log(isSmooth([45, 23, 12, 33, 12, 453, -234, -45])); // false
console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12])); // true
console.log(isSmooth([9, 0, 15, 9])); // false
console.log(isSmooth([-6, 6, -6])); // false
console.log(isSmooth([26, 26, -17])); // false
console.log(isSmooth([-7, 5, 5, 10])); // false
console.log(isSmooth([3, 4, 5])); // false
console.log(isSmooth([-5, 3, -1, 9])); // false
