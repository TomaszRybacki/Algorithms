/*
You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit (0-based).

Example

For n = 11 and m = 13, the output should be
differentRightmostBit(n, m) = 2.

11 = 1011, 13 = 1101, the rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 2^1 = 2.

For n = 7 and m = 23, the output should be
differentRightmostBit(n, m) = 16.

7 = 111, 23 = 10111, i.e.

00111
10111
So the answer is 2^4 = 16.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
0 ≤ n ≤ 230.

[input] integer m

Guaranteed constraints:
0 ≤ m ≤ 230,
n ≠ m.

[output] integer
*/

function differentRightmostBit(n, m) {
  return -~((~(n^m))^((~(n^m))+1))/2 ;
}

console.log(differentRightmostBit(11, 13)); // 2
console.log(differentRightmostBit(7, 23)); // 16
console.log(differentRightmostBit(1, 0)); // 1
console.log(differentRightmostBit(64, 65)); // 1
console.log(differentRightmostBit(1073741823, 1071513599)); // 131072
console.log(differentRightmostBit(42, 22)); // 4
