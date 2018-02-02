/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
*/

function palindromeRearranging(inputString) {
  const letterObject = {};

  for (let i = 0; i < inputString.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(letterObject, inputString[i])) {
      letterObject[inputString[i]] = 1;
    } else {
      letterObject[inputString[i]] += 1;
    }
  }

  let oddCounter = 0;
  Object.values(letterObject).forEach((value) => {
    if (value % 2 !== 0) {
      oddCounter += 1;
    }
  });

  return (oddCounter < 2);
}

console.log(palindromeRearranging('aabb')); // true
console.log(palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')); // false
console.log(palindromeRearranging('abbcabb')); // true
console.log(palindromeRearranging('zyyzzzzz')); // true
console.log(palindromeRearranging('z')); // true
console.log(palindromeRearranging('zaa')); // true
console.log(palindromeRearranging('abca')); // false
