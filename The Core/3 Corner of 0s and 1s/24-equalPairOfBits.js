/*
You're given two integers, n and m. Find position of the rightmost pair of equal bits
in their binary representations (it is guaranteed that such a pair exists),
counting from right to left.

Return the value of 2position_of_the_found_pair (0-based).

Example

For n = 10 and m = 11, the output should be
equalPairOfBits(n, m) = 2.

10 = 1010, 11 = 1011, the position of the rightmost pair of equal bits is
the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 2^1 = 2.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
0 ≤ n ≤ 230.

[input] integer m

Guaranteed constraints:
0 ≤ m ≤ 230.

[output] integer
*/

function equalPairOfBits(n, m) {
  return n + m + 1 & ~m - n ;
}

console.log(equalPairOfBits(10, 11)); // 2
console.log(equalPairOfBits(0, 0)); // 1
console.log(equalPairOfBits(28, 27)); // 8
console.log(equalPairOfBits(895, 928)); // 32
console.log(equalPairOfBits(1073741824, 1006895103)); // 262144
