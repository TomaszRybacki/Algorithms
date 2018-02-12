/*
You are given a string s of characters that contains at least n numbers
(here, a number is defined as a consecutive series of digits, where any
character immediately to the left and right of the series are not digits).
The numbers may contain leading zeros, but it is guaranteed that each number
has at least one non-zero digit in it.

Your task is to find the nth number and return it as a string without leading zeros.

Example

For s = "8one 003number 201numbers li-000233le number444" and n = 4,
the output should be
nthNumber(s, n) = "233".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string containing at least n numbers.

Guaranteed constraints:
20 ≤ s.length ≤ 650.

[input] integer n

1-based index of the number to find.

Guaranteed constraints:
1 ≤ n ≤ 15.

[output] string

The nth number without leading zeros.
*/

function nthNumber(s, n) {
  const re = new RegExp(`(?:[0\\D]*(\\d+)\\D*){${n}}`);
  return re.exec(s)[1];
}

console.log(nthNumber('8one 003number 201numbers li-000233le number444', 4)); // "233"
console.log(nthNumber('some023020 num ber 033 02103 32 meh peh beh 4328', 5)); // "4328"
console.log(nthNumber('007 is an awesome agent', 1)); // "7"
console.log(nthNumber('Everyone hates error 404', 1)); // "404"
console.log(nthNumber('LaS003920tP3rEt4t04Yte0023s3t', 4)); // "4"
console.log(nthNumber('=_aaYiM*}&0077|D))ztIV00012432748730156644204805614898523099655216oio0854102350044141_|YDL0584511290939644184700867021026771007612398051168360441323oIc:G*0204864749576405915~wqgN0037594999439741539584332{F&wjxiLy-mE', 4)); // "584511290939644184700867021026771007612398051168360441323"
