/*
Given a string, find the shortest possible string which can be achieved
by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".

Input/Output

[execution time limit] 4 seconds (js)

[input] string st

A string consisting of lowercase latin letters.

Guaranteed constraints:
3 ≤ st.length ≤ 10.

[output] string
*/

function buildPalindrome(st) {
  function isPalindrome(st) {
    const stringReverse = [...st].reverse().join().replace(/,/g, '');
    return (st === stringReverse);
  }
  let endPart = '';

  for (let char of st) {
    if (isPalindrome(st + endPart)) break;
    endPart = char + endPart;
  }
  return st + endPart;
}

console.log(buildPalindrome('abcdc')); // "abcdcba"
console.log(buildPalindrome('ababab')); // "abababa"
console.log(buildPalindrome('abba')); // "abba"
console.log(buildPalindrome('abaa')); // "abaaba"
