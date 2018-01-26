/*
Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
mirrorBits(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
mirrorBits(a) = 1.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
5 ≤ a ≤ 105.

[output] integer
*/

function mirrorBits(a) {
  const binary = a.toString(2).split('').reverse().join('');
  return parseInt(binary, 2);
}

console.log(mirrorBits(97)); // 67
console.log(mirrorBits(8)); // 1
