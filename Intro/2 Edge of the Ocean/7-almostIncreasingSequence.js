/*
Given a sequence of integers as an array, determine whether it
is possible to obtain a strictly increasing sequence by removing
no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to
get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2].
Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array
in order to get a strictly increasing sequence, otherwise return false.

Tests:
sequence: [1, 3, 2, 1]                          false
sequence: [1, 3, 2]                             true
sequence: [1, 2, 1, 2]                          false
sequence: [1, 4, 10, 4, 2]                      false
sequence: [10, 1, 2, 3, 4, 5]                   true
sequence: [1, 1, 1, 2, 3]                       false
sequence: [0, -2, 5, 6]                         true
sequence: [1, 2, 3, 4, 5, 3, 5, 6]              false
sequence: [40, 50, 60, 10, 20, 30]              false
sequence: [1, 1]                                true
sequence: [1, 2, 5, 3, 5]                       true
sequence: [1, 2, 5, 5, 5]                       false
sequence: [10, 1, 2, 3, 4, 5, 6, 1]             false
sequence: [1, 2, 3, 4, 3, 6]                    true
sequence: [1, 2, 3, 4, 99, 5, 6]                true
sequence: [123, -17, -5, 1, 2, 3, 12, 43, 45]   true
sequence: [3, 5, 67, 98, 3]                     true
*/

function almostIncreasingSequence(sequence) {
  let bad = 0;
  for (let i = 0; i < sequence.length; i += 1) {
    if (sequence[i] <= sequence[i - 1]) {
      bad += 1;
      if (bad > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
    }
  }
  return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
console.log(almostIncreasingSequence([1, 4, 10, 4, 2]));
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
console.log(almostIncreasingSequence([1, 1, 1, 2, 3]));
console.log(almostIncreasingSequence([0, -2, 5, 6]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]));
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30]));
console.log(almostIncreasingSequence([1, 1]));
console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));
console.log(almostIncreasingSequence([1, 2, 5, 5, 5]));
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]));
console.log(almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45]));
console.log(almostIncreasingSequence([3, 5, 67, 98, 3]));
