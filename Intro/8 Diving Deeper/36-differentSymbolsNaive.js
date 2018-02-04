/*
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string of lowercase latin letters.

Guaranteed constraints:
3 ≤ s.length ≤ 15.

[output] integer
*/

function differentSymbolsNaive(s) {
  const letterObject = {};

  for (let i = 0; i < s.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(letterObject, s[i])) {
      letterObject[s[i]] = 1;
    } else {
      letterObject[s[i]] += 1;
    }
  }

  return Object.keys(letterObject).length;
}

console.log(differentSymbolsNaive('cabca')); // 3
console.log(differentSymbolsNaive('aba')); // 2
