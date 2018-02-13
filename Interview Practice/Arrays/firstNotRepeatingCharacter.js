/*
Note: Write a solution that only iterates over the string once and uses O(1)
additional memory, since this is what you would be asked to do during a real interview.

Given a string s, find and return the first instance of a non-repeating character in it.
If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'.
Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.
*/

function firstNotRepeatingCharacter(s) {
  const letterObject = {};

  for (let i = 0; i < s.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(letterObject, s[i])) {
      letterObject[s[i]] = 1;
    } else {
      letterObject[s[i]] += 1;
    }
  }

  for (let letter in letterObject) {
    if (letterObject[letter] === 1) return letter;
  }
  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad')); // "c"
console.log(firstNotRepeatingCharacter('abacabaabacaba')); // "_"
console.log(firstNotRepeatingCharacter('z')); // "z"
console.log(firstNotRepeatingCharacter('bcb')); // "c"
console.log(firstNotRepeatingCharacter('bcccccccb')); // "_"
console.log(firstNotRepeatingCharacter('abcdefghijklmnopqrstuvwxyziflskecznslkjfabe')); // "d"
console.log(firstNotRepeatingCharacter('zzz')); //
console.log(firstNotRepeatingCharacter('bcccccccccccccyb')); // "y"
console.log(firstNotRepeatingCharacter('xdnxxlvupzuwgigeqjggosgljuhliybkjpibyatofcjbfxwtalc')); // "d"
console.log(firstNotRepeatingCharacter('ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof')); // "g"

// Another cool solution write by ecumali

//function firstNotRepeatingCharacter(s) {
//  const array = s.split('');
//
//  for (let i = 0; i < array.length; i += 1) {
//    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
//      return array[i];
//    }
//  }
//  return '_';
//}
