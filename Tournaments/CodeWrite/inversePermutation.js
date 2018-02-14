/*
Given a permutation, produce its inverse permutation.

Example

For permutation = [1, 3, 4, 2], the output should be
inversePermutation(permutation) = [1, 4, 2, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer permutation

A non-empty array representing a permutation of integers from 1 to some n.

Guaranteed constraints:
3 ≤ permutation.length ≤ 10.

[output] array.integer
*/

function inversePermutation(permutation) {
  const result = [];
  for (let i = 0; i < permutation.length; i += 1) {
    result[permutation[i] - 1] = i + 1;
  }
  return result;
}

console.log(inversePermutation([1, 3, 4, 2])); // [1, 4, 2, 3]
console.log(inversePermutation([1, 2, 3])); // [1, 2, 3]
