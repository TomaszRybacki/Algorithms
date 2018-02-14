/*
Given an array of integers, write a function that determines whether
the array contains any duplicates. Your function should return true
if any element appears at least twice in the array, and it should
return false if every element is distinct.

Example

For a = [1, 2, 3, 1], the output should be
containsDuplicates(a) = true.

There are two 1s in the given array.

For a = [3, 1], the output should be
containsDuplicates(a) = false.

The given array contains no duplicates.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
0 ≤ a.length ≤ 105,
-2 · 109 ≤ a[i] ≤ 2 · 109.

[output] boolean
*/

function containsDuplicates(a) {
  const noDuplicates = new Set(a);
  return (a.length !== noDuplicates.size);
}

console.log(containsDuplicates([1, 2, 3, 1])); // true
console.log(containsDuplicates([-1200000005, -1200000005])); // true
console.log(containsDuplicates([3, 1])); // false
