/*
You have a string s that consists of English letters, punctuation marks,
whitespace characters, and brackets. It is guaranteed that the parentheses
in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses,
starting from the innermost pair. The results string should not contain any parentheses.

Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string consisting of English letters, punctuation marks,
whitespace characters and brackets.
It is guaranteed that parentheses form a regular bracket sequence.

Constraints:
5 ≤ s.length ≤ 55.

[output] string
*/

function reverseParentheses(s) {
  const RegEx = /\([a-z A-Z]*\)/g;
  const parts = s.split(RegEx);
  const reverseString = s.match(RegEx);
  let finalString = [];

  if (reverseString === null) {
    return parts[0];
  }

  for (let i = 0; i < reverseString.length; i += 1) {
    reverseString[i] = reverseString[i].slice(1, reverseString[i].length - 1)
      .split('')
      .reverse()
      .join()
      .replace(/,/g, '');
  }

  finalString = [parts[0], reverseString[0], parts[1], reverseString[1], parts[2]];
  finalString = finalString.filter(part => part !== undefined);
  finalString = finalString.reduce((prev, curr) => prev.concat(curr));

  return (finalString.match(RegEx) === null) ? finalString : reverseParentheses(finalString);
}

console.log(reverseParentheses('a(bc)de')); // "acbde"
console.log(reverseParentheses('a(bcdefghijkl(mno)p)q')); // "apmnolkjihgfedcbq"
console.log(reverseParentheses('co(de(fight)s)')); // "cosfighted"
console.log(reverseParentheses('Code(Cha(lle)nge)')); // "CodeegnlleahC"
console.log(reverseParentheses('Where are the parentheses?')); // "Where are the parentheses?"
console.log(reverseParentheses('abc(cba)ab(bac)c')); // "abcabcabcabc"
console.log(reverseParentheses('The ((quick (brown) (fox) jumps over the lazy) dog)'));
// "The god quick nworb xof jumps over the lazy"
