/*
Given integers a and b, determine whether the following pseudocode results in an infinite loop

while a is not equal to b do
  increase a by 1
  decrease b by 1
Assume that the program is executed on a virtual machine which
can store arbitrary long numbers and execute forever.

Example

For a = 2 and b = 6, the output should be
isInfiniteProcess(a, b) = false;
For a = 2 and b = 3, the output should be
isInfiniteProcess(a, b) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
0 ≤ a ≤ 20.

[input] integer b

Guaranteed constraints:
0 ≤ b ≤ 20.

[output] boolean

true if the pseudocode will never stop, false otherwise.
*/

function isInfiniteProcess(a, b) {
  if (a < b) {
    if ((a % 2 === 0 && b % 2 !== 0) || (a % 2 !== 0 && b % 2 === 0)) {
      return true;
    }
  }

  return (a > b) ? true : false;
}
// return a > b || a % 2 != b % 2;
console.log(isInfiniteProcess(2, 6)); // false
console.log(isInfiniteProcess(2, 3));// true
console.log(isInfiniteProcess(2, 10)); // false
console.log(isInfiniteProcess(0, 1)); // true
console.log(isInfiniteProcess(3, 1)); // true
console.log(isInfiniteProcess(10, 10)); // false
console.log(isInfiniteProcess(5, 10)); // true
console.log(isInfiniteProcess(6, 10)); // false
console.log(isInfiniteProcess(10, 0)); // true
console.log(isInfiniteProcess(5, 5)); // false
