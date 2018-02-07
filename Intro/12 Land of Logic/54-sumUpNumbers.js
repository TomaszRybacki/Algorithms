/*
CodeMaster has just returned from shopping.
He scanned the check of the items he bought and gave the resulting string to Ratiorg
to figure out the total number of purchased items. Since Ratiorg is a bot he
is definitely going to automate it, so he needs a program that sums up all the
numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers
that appear in the given inputString.

Example

For inputString = "2 apples, 12 oranges", the output should be
sumUpNumbers(inputString) = 14.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
6 ≤ inputString.length ≤ 60.

[output] integer
*/

function sumUpNumbers(inputString) {
  const numbers = inputString.match(/\d+/g);
  return (numbers !== null) ? numbers.reduce((prev, curr) => prev + Number(curr), 0) : 0;
}

console.log(sumUpNumbers('2 apples, 12 oranges')); // 14
console.log(sumUpNumbers('123450')); // 123450
console.log(sumUpNumbers('Your payment method is invalid')); // 0

/*
You didn't pass the 6 hidden test case.

function sumUpNumbers(inputString) {
  const resultArray = inputString.split(' ');
  let sum = 0;

  for (let i = 0; i < resultArray.length; i += 1) {
    if (resultArray[i] > 0) sum += Number(resultArray[i]);
  }
  return sum;
}
*/
