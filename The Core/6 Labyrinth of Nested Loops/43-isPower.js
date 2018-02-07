/*
Determine if the given number is a power of some non-negative integer.

Example

For n = 125, the output should be
isPower(n) = true;
For n = 72, the output should be
isPower(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 400.

[output] boolean

true if n can be represented in the form ab (a to the power of b)
where a and b are some non-negative integers and b ≥ 2, false otherwise.
*/

function isPower(n) {
  let b = 2;
  for (let a = 1; a <= 20; a += 1) {
    if (a ** b === n) {
      return true;
    }
    for (let b = 2; b <= 20; b += 1) {
      if (a ** b === n) {
        return true;
      }
    }
  }
  return false;
}

console.log(isPower(125)); // true
console.log(isPower(72)); // false
console.log(isPower(100)); // true
console.log(isPower(11)); // false
console.log(isPower(324)); // true
console.log(isPower(256)); // true
console.log(isPower(119)); // false
console.log(isPower(400)); // true
console.log(isPower(350)); // false
console.log(isPower(361)); // true

