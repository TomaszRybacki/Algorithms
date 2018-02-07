/*
Consider a sequence of numbers a0, a1, ..., an, in which an
element is equal to the sum of squared digits of the previous element.
The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

Example

For a0 = 16, the output should be
squareDigitsSequence(a0) = 9.

Here's how elements of the sequence are constructed:

a0 = 16
a1 = 1^2 + 6^2 = 37
a2 = 3^2 + 7^2 = 58
a3 = 5^2 + 8^2 = 89
a4 = 8^2 + 9^2 = 145
a5 = 1^2 + 4^2 + 52 = 42
a6 = 4^2 + 2^2 = 20
a7 = 2^2 + 0^2 = 4
a8 = 4^2 = 16, which has already occurred before (a0)
Thus, there are 9 elements in the sequence.

For a0 = 103, the output should be
squareDigitsSequence(a0) = 4.

The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a0

First element of a sequence, positive integer.

Guaranteed constraints:
1 ≤ a0 ≤ 650.

[output] integer
*/

function squareDigitsSequence(a0) {
  const sequence = [a0];
  let uniqueSequense;

  for (let i = 0; i <= 20; i += 1) {
    const digits = sequence[i].toString().split('').map(num => Number(num));

    switch (digits.length) {
      case 1:
        sequence.push(Math.pow(digits[0], 2));
        break;
      case 2:
        sequence.push(Math.pow(digits[0], 2) + Math.pow(digits[1], 2));
        break;
      case 3:
        sequence.push(Math.pow(digits[0], 2) + Math.pow(digits[1], 2) + Math.pow(digits[2], 2));
        break;
    }
  }
  uniqueSequense = new Set(sequence);
  return uniqueSequense.size + 1;
}

console.log(squareDigitsSequence(16)); // 9
console.log(squareDigitsSequence(103)); // 4
console.log(squareDigitsSequence(1)); // 2
console.log(squareDigitsSequence(650)); // 11
