/*
A sentence is considered correct if:

it starts with a capital letter;
it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
full stops, question marks and exclamation points don't appear anywhere else in the sentence.
Given a sentence, return true if it is correct and false otherwise.

Example

For sentence = "This is an example of *correct* sentence.",
the output should be
isSentenceCorrect(sentence) = true;

For sentence = "!this sentence is TOTALLY incorrecT",
the output should be
isSentenceCorrect(sentence) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] string sentence

A string without newline characters.

Guaranteed constraints:
2 ≤ sentence.length ≤ 100.

[output] boolean

true if the given sentence is correct, false otherwise.
*/

function isSentenceCorrect(sentence) {
  const re = /^[A-Z][^.?!]*[.?!]{1}$/;
  return re.test(sentence);
}

console.log(isSentenceCorrect('This is an example of *correct* sentence.')); // true
console.log(isSentenceCorrect('!this sentence is TOTALLY incorrecT')); // false
console.log(isSentenceCorrect('Almost correct sentence')); // false
console.log(isSentenceCorrect('Something is !wrong! here.')); // false
console.log(isSentenceCorrect('Time to roll!!!')); // false
console.log(isSentenceCorrect("This one is okay though, isn't it?")); // true
console.log(isSentenceCorrect("this sentence, I'm afraid, is a bit incorrect.")); // false
console.log(isSentenceCorrect("I'm glad this sentence is correct, my friends.")); // true
console.log(isSentenceCorrect('CodeFights is lame!!!')); // false
console.log(isSentenceCorrect('No way, CodeFights is awesome!')); // true
