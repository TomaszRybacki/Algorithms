/*
You are given a string consisting of words separated by whitespace characters,
where the words consist only of Latin letters. Your task is to swap pairs of
consecutive words and return the result.

Example

For s = "CodeFight On", the output should be
swapAdjacentWords(s) = "On CodeFight";
For s = "How are you today guys", the output should be
swapAdjacentWords(s) = "are How today you guys".
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string consisting of whitespace characters (' ') and Latin letters.
There is exactly one whitespace character between two consecutive words,
and both the first and the last characters of s are not equal to ' '.

Guaranteed constraints:
0 ≤ s.length ≤ 100.

[output] string

String s with pairs of adjacent words swapped.
*/

function swapAdjacentWords(s) {
  return s.replace(/(\w+) (\w+)/g, '$2 $1');
}

console.log(swapAdjacentWords('CodeFight On')); // "On CodeFight"
console.log(swapAdjacentWords('How are you today guys')); // "are How today you guys"
console.log(swapAdjacentWords('IAmALongStringWithNoWhiteSpaceCharacters')); // "IAmALongStringWithNoWhiteSpaceCharacters"
console.log(swapAdjacentWords('A b C D e F g h I j')); // "b A D C F e h g j I"
console.log(swapAdjacentWords('')); // Empty
