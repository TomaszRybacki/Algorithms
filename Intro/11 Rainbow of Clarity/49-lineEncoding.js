/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint
substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a
concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order
and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

String consisting of lowercase English letters.

Guaranteed constraints:
4 ≤ s.length ≤ 15.

[output] string

Encoded version of s.
*/

function lineEncoding(s) {
  const sArray = [];
  let newString = '';
  let startIndex = 0;
  let endIndex;
  s = [...s]

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== s[i + 1]) {
      endIndex = i + 1;
      sArray.push(s.slice(startIndex, endIndex));
      startIndex = endIndex;
    }
  }

  for (let i = 0; i < sArray.length; i += 1) {
    newString += sArray[i].length + sArray[i][0];
  }

  return newString.replace(/1/g, '');
}

console.log(lineEncoding('aabbbc')); // "2a3bc"
console.log(lineEncoding('abbcabb')); // "a2bca2b"
console.log(lineEncoding('abcd')); // "abcd"
