/*
Presented with the integer n, find the 0-based position
of the second rightmost zero bit in its binary representation
(it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit.

Example

For n = 37, the output should be
secondRightmostZeroBit(n) = 8.

37 = 100101. The second rightmost zero bit is at position 3
(0-based) from the right in the binary representation of n.
Thus, the answer is 2^3 = 8.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
4 ≤ n ≤ 230.

[output] integer
*/

function secondRightmostZeroBit(n) {
  return ~(n |= -~n) & -~n ;
}

console.log(secondRightmostZeroBit(37)); // 8
console.log(secondRightmostZeroBit(1073741824)); // 2
console.log(secondRightmostZeroBit(83748)); // 2
console.log(secondRightmostZeroBit(4)); // 2
console.log(secondRightmostZeroBit(728782938)); // 4
console.log(secondRightmostZeroBit(37)); // 8
