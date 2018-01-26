/*
You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

The first element of the array occupies the first 8 bits of M;
The second element occupies next 8 bits, and so on.
Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant
bits of M - the right-most bits of an integer. For further clarification see the following example.

Example

For a = [24, 85, 0], the output should be
arrayPacking(a) = 21784.

An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
After packing these into one number we get 00000000 01010101 00011000
(spaces are placed for convenience), which equals to 21784.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 4,
0 ≤ a[i] < 256.

[output] integer
*/

function arrayPacking(a) {
  const binaryArray = a.map(number => ('00000000' + number.toString(2)).slice(-8));
  const newNumber = binaryArray.reverse().reduce((prev, curr) => prev.concat(curr));
  return parseInt(newNumber, 2);
}

console.log(arrayPacking([24, 85, 0])); // 21784
console.log(arrayPacking([23, 45, 39])); // 2567447
