/*
You're given three integers, a, b and c.
It is guaranteed that two of these integers are equal to each other.
What is the value of the third integer?

Example

For a = 2, b = 7 and c = 2, the output should be
extraNumber(a, b, c) = 7.

The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
1 ≤ a ≤ 109.

[input] integer b

Guaranteed constraints:
1 ≤ b ≤ 109.

[input] integer c

Guaranteed constraints:
1 ≤ c ≤ 109.

[output] integer

*/

function extraNumber(a, b, c) {
  if (a === b) {
    return c;
  }
  if (b === c) {
    return a
  }
  if (a === c) {
    return b
  }
}

console.log(extraNumber(2, 7, 2)); //  7
console.log(extraNumber(3, 2, 2)); //  3
console.log(extraNumber(5, 5, 1)); //  1
console.log(extraNumber(500000000, 3, 500000000)); //  3
