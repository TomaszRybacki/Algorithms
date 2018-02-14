/*
You have two integer arrays, a and b, and an integer target value v.
Determine whether there is a pair of numbers, where one number is taken
from a and the other from b, that can be added together to get a sum of v.
Return true if such a pair exists, otherwise return false.

Example

For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

An array of integers.

Guaranteed constraints:
0 ≤ a.length ≤ 105,
-109 ≤ a[i] ≤ 109.

[input] array.integer b

An array of integers.

Guaranteed constraints:
0 ≤ b.length ≤ 105,
-109 ≤ b[i] ≤ 109.

[input] integer v

Guaranteed constraints:
-109 ≤ v ≤ 109.

[output] boolean

true if there are two elements from a and b which add up to v, and false otherwise.
*/

function sumOfTwo(a, b, v) {
  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);

  let start = 0;
  let end = b.length - 1;

  while (start < a.length) {
    while (end > 0) {
      if (a[start] + b[end] === v) return true;
      if (a[a.length - 1] + b[end] < v) return false;

      if (a[start] + b[end] < v) break;
      end -= 1;
    }
    if (a[start] + b[end] > v) break;
    start += 1;
  }
  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42)); // true


// Execution time limit exceeded on test 16

//function sumOfTwo(a, b, v) {
//  const differenceArray = [];
//
//  for (let i = 0; i < a.length; i += 1) {
//    differenceArray.push(v - a[i]);
//  }
//
//  return b.some(num => differenceArray.includes(num));
//}

// Execution time limit exceeded on test 16

//function sumOfTwo(a, b, v) {
//  for (let i = 0; i < a.length; i += 1) {
//    for (let j = b.length - 1; j > 0; j -= 1) {
//      if (a[i] + b[j] === v) return true;
//    }
//  }
//  return false;
//}

// 16/20 You didn't pass the full test set.

//function sumOfTwo(a, b, v) {
//  a = a.sort((a, b) => a - b);
//  b = b.sort((a, b) => a - b);
//  const differenceArray = a.map(num => v - num).reverse();
//
//  for (let i = 0; i < b.length; i += 1) {
//    let min = differenceArray[0];
//    let max = differenceArray[differenceArray.length - 1];
//    while (min <= max) {
//      const guess = Math.floor((min + max) / 2);
//      if (guess === b[i]) return true;
//      if (guess < b[i]) min = guess + 1;
//      if (guess > b[i]) max = guess - 1;
//    }
//  }
//  return false;
//}

// binarySearch Algorithm
// works only for sorted arrays

//function binarySearch(array, value) {
//  array = array.sort((a, b) => a - b);
//  let min = array[0];
//  let max = array[array.length - 1];
//
//  while (min <= max) {
//    let guess = Math.floor((min + max) / 2);
//    console.log(guess);
//
//    if (guess === value) return true;
//    if (guess > value) max = guess - 1;
//    if (guess < value) min = guess + 1;
//  }
//  return false;
//}
//
//console.log(binarySearch([17, 72, 18, 72, 73, 15, 83, 90, 8, 18], 18)); // true
