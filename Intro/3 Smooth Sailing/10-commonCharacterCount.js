/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s1.length ≤ 15.

[input] string s2

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s2.length ≤ 15.

[output] integer
*/

function commonCharacterCount(s1, s2) {
  let count = 0;
  let index;
  const s1Array = s1.split('');
  const s2Array = s2.split('');

  for (let i = 0; i < Math.max(s1Array.length, s2Array.length); i += 1) {
    if (s1Array.includes(s2Array[i])) {
      count += 1;
      index = s1Array.indexOf(s2Array[i]);

      if (index !== -1) {
        s1Array[index] = 0;
      }
    }
  }
  return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa')); // 3
console.log(commonCharacterCount('zzzz', 'zzzzzzz')); // 4
console.log(commonCharacterCount('abca', 'xyzbac')); // 3
console.log(commonCharacterCount('a', 'b')); // 0
console.log(commonCharacterCount('a', 'aaa')); // 1
