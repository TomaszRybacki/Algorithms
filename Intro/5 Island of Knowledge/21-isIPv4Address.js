/*
An IP address is a numerical label assigned to each device (e.g., computer, printer)
participating in a computer network that uses the Internet Protocol for communication.
There are two versions of the Internet protocol, and thus two versions of addresses.
One of them is the IPv4 address.

IPv4 addresses are represented in dot-decimal notation, which consists of four decimal
numbers, each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
isIPv4Address(inputString) = true;

For inputString = "172.316.254.1", the output should be
isIPv4Address(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
isIPv4Address(inputString) = false.

There is no first number.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
1 ≤ inputString.length ≤ 30.

[output] boolean

true if inputString satisfies the IPv4 address naming rules, false otherwise.
*/

function numberRangeTest(num) {
  return num >= 0 && num <= 255;
}

function isIPv4Address(inputString) {
  const RegEx = /^\d{1,3}\.\d{1,3}.\d{1,3}.\d{1,3}$/g;
  const stringTest = RegEx.test(inputString);

  inputString = inputString.split('.');

  const firstPart = numberRangeTest(inputString[0]);
  const secondPart = numberRangeTest(inputString[1]);
  const thirdPart = numberRangeTest(inputString[2]);
  const fourthPart = numberRangeTest(inputString[3]);

  return (stringTest && firstPart && secondPart && thirdPart && fourthPart);
}

console.log(isIPv4Address('172.16.254.1')); // true
console.log(isIPv4Address('172.316.254.1')); // false
console.log(isIPv4Address('.254.255.0')); // false
console.log(isIPv4Address('1.1.1.1a')); // false
console.log(isIPv4Address('1')); // false
console.log(isIPv4Address('0.254.255.0')); // true
console.log(isIPv4Address('1.23.256.255.')); // false
console.log(isIPv4Address('1.23.256..')); // false
console.log(isIPv4Address('0..1.0')); // false
console.log(isIPv4Address('1.1.1.1.1')); // false
console.log(isIPv4Address('1.256.1.1')); // false
console.log(isIPv4Address('a0.1.1.1')); // false
console.log(isIPv4Address('0.1.1.256')); // false
console.log(isIPv4Address('129380129831213981.255.255.255')); // false
console.log(isIPv4Address('255.255.255.255abcdekjhf')); // false
console.log(isIPv4Address('7283728')); // false
