/*
A media access control address (MAC address) is a unique identifier assigned
to network interfaces for communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly
form is six groups of two hexadecimal digits (0 to 9 or A to F),
separated by hyphens (e.g. 01-23-45-67-89-AB).

Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

Example

For inputString = "00-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = true;
For inputString = "Z1-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = false;
For inputString = "not a MAC-48 address", the output should be
isMAC48Address(inputString) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
15 ≤ inputString.length ≤ 20.

[output] boolean

true if inputString corresponds to MAC-48 address naming rules, false otherwise.
*/

function isMAC48Address(inputString) {
  const RegEx = /^[A-F0-9]{2}-[A-F0-9]{2}-[A-F0-9]{2}-[A-F0-9]{2}-[A-F0-9]{2}-[A-F0-9]{2}$/;
  return RegEx.test(inputString);
}

console.log(isMAC48Address('00-1B-63-84-45-E6')); // true
console.log(isMAC48Address('Z1-1B-63-84-45-E6')); // false
console.log(isMAC48Address('not a MAC-48 address')); // false
console.log(isMAC48Address('FF-FF-FF-FF-FF-FF')); // true
console.log(isMAC48Address('00-00-00-00-00-00')); // true
console.log(isMAC48Address('G0-00-00-00-00-00')); // false
console.log(isMAC48Address('02-03-04-05-06-07-')); // false
console.log(isMAC48Address('12-34-56-78-9A-BC')); // true
console.log(isMAC48Address('FF-FF-AB-CD-EA-BC')); // true
console.log(isMAC48Address('12-34-56-78-9A-BG')); // false
