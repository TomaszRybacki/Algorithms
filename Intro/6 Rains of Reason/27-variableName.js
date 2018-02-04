/*
Correct variable names consist only of Latin letters,
digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
For name = "2w2", the output should be
variableName(name) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string name

Guaranteed constraints:
1 ≤ name.length ≤ 10.

[output] boolean

true if name is a correct variable name, false otherwise.
*/

function variableName(name) {
  return (name.length === 1) ? /[a-zA-z]/.test(name) : /^[a-zA-z]\w*\w$/.test(name);
}

console.log(variableName('var_1__Int')); // true
console.log(variableName('qq-q')); // false
console.log(variableName('2w2')); // false
console.log(variableName(' variable')); // false
console.log(variableName('va[riable0')); // false
console.log(variableName('variable0')); // true
console.log(variableName('a')); // true
