/*
Consider an arithmetic expression of the form a#b=c.
Check whether it is possible to replace # with one of the four
signs: +, -, * or / to obtain a correct expression.

Example

For a = 2, b = 3 and c = 5, the output should be
arithmeticExpression(a, b, c) = true.

We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.

For a = 8, b = 2 and c = 4, the output should be
arithmeticExpression(a, b, c) = true.

We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.

For a = 8, b = 3 and c = 2, the output should be
arithmeticExpression(a, b, c) = false.

8 + 3 = 11 ≠ 2;
8 - 3 = 5 ≠ 2;
8 * 3 = 24 ≠ 2;
8 / 3 = 2.(6) ≠ 2.
So the answer is false.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
1 ≤ a ≤ 20.

[input] integer b

Guaranteed constraints:
1 ≤ b ≤ 20.

[input] integer c

Guaranteed constraints:
0 ≤ c ≤ 20.

[output] boolean

true if the desired replacement is possible, false otherwise.
*/

function arithmeticExpression(a, b, c) {
  return (a + b === c) ? true : (a - b === c) ? true : (a * b === c) ? true : (a / b === c) ? true : false;
}

console.log(arithmeticExpression(2, 3, 5)); // true
console.log(arithmeticExpression(8, 2, 4)); // true
console.log(arithmeticExpression(8, 3, 2)); // false
console.log(arithmeticExpression(6, 3, 3)); // true
console.log(arithmeticExpression(18, 2, 9)); // true
console.log(arithmeticExpression(2, 3, 6)); // true
console.log(arithmeticExpression(5, 2, 0)); // false
console.log(arithmeticExpression(10, 2, 2)); // false
console.log(arithmeticExpression(5, 2, 2)); // false
console.log(arithmeticExpression(1, 2, 1)); // false
