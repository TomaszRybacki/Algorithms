/*
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 109.

[output] boolean

true if all digits of n are even, false otherwise.
*/

function evenDigitsOnly(n) {
  n = n.toString().split('');
  for (let i = 0; i < n.length; i += 1) {
    if (n[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(evenDigitsOnly(248622)); // true
console.log(evenDigitsOnly(642386)); // false
console.log(evenDigitsOnly(248842)); // true
console.log(evenDigitsOnly(1)); // false
console.log(evenDigitsOnly(8)); // true
console.log(evenDigitsOnly(2462487)); // false
console.log(evenDigitsOnly(468402800)); // true
console.log(evenDigitsOnly(2468428)); // true
console.log(evenDigitsOnly(5468428)); // false
console.log(evenDigitsOnly(7468428)); // false
