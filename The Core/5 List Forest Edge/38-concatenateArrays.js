/*
Given two arrays of integers a and b, obtain the array formed by the
elements of a followed by the elements of b.

Example

For a = [2, 2, 1] and b = [10, 11], the output should be
concatenateArrays(a, b) = [2, 2, 1, 10, 11].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 10,
1 ≤ a[i] ≤ 15.

[input] array.integer b

Guaranteed constraints:
0 ≤ b.length ≤ 10,
1 ≤ b[i] ≤ 15.

[output] array.integer
*/

function concatenateArrays(a, b) {
  const newArray = [a, b];
  return newArray.reduce((prev, curr) => prev.concat(curr));
}

console.log(concatenateArrays([2, 2, 1], [10, 11])); // [2, 2, 1, 10, 11]
console.log(concatenateArrays([1, 2], [3, 1, 2])); // [1, 2, 3, 1, 2]
console.log(concatenateArrays([1], [])); // [1]
console.log(concatenateArrays([2, 10, 3, 9, 5, 11, 11], [4, 8, 1, 13, 3, 1, 14]));
// [2, 10, 3, 9, 5, 11, 11, 4, 8, 1, 13, 3, 1, 14]
console.log(concatenateArrays([9, 6, 6, 9, 8, 14], [3, 2, 2, 5, 3, 11, 12, 9, 7, 7]));
// [9, 6, 6, 9, 8, 14, 3, 2, 2, 5, 3, 11, 12, 9, 7, 7]

