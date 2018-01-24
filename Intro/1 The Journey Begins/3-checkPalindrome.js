/*
Palindrom (gr. palindromeo – biec z powrotem)
wyrażenie brzmiące tak samo czytane od lewej do prawej i od prawej do lewej.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.

Tests:
inputString: "aabaa" - true
inputString: "abac" - false
inputString: "a" - true
inputString: "az" - false
inputString: "abacaba" - true
inputString: "z" - true
inputString: "aaabaaaa" - false
inputString: "zzzazzazz" - false
inputString: "hlbeeykoqqqqokyeeblh" - true
inputString: "hlbeeykoqqqokyeeblh" - true
*/

function checkPalindrome(inputString) {
  const reverseString = inputString.split('').reverse().join('');
  return inputString === reverseString ? true : false;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
console.log(checkPalindrome('az'));
console.log(checkPalindrome('abacaba'));
console.log(checkPalindrome('z'));
console.log(checkPalindrome('aaabaaaa'));
console.log(checkPalindrome('zzzazzazz'));
console.log(checkPalindrome('hlbeeykoqqqqokyeeblh'));
console.log(checkPalindrome('hlbeeykoqqqokyeeblh'));
