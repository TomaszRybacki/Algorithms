/*
A little boy is studying arithmetics.
He has just learned how to add two integers, written one below another,
column by column. But he always forgets about the important part - carrying.

Given two integers, find the result which the little boy will get.

Example

For param1 = 456 and param2 = 1734, the output should be
additionWithoutCarrying(param1, param2) = 1180.

   456
  1734
+ ____
  1180
The little boy goes from right to left:

6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column
5 + 3 = 8
4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.
There is no digit in the first number corresponding to the leading digit of the second one,
so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer param1

A non-negative integer.

Guaranteed constraints:
0 ≤ param1 ≤ 99999.

[input] integer param2

A non-negative integer.

Guaranteed constraints:
0 ≤ param2 ≤ 59999.

[output] integer

The result that the little boy will get.
*/

function additionWithoutCarrying(param1, param2) {
  let biggerNumber = Math.max(param1, param2).toString();
  let smallerNumber = Math.min(param1, param2).toString();
  let result = [];

  smallerNumber = '00000000' + smallerNumber;
  biggerNumber = biggerNumber.split('');
  smallerNumber = smallerNumber.slice(-biggerNumber.length).split('');

  for (let i = 0; i < biggerNumber.length; i += 1) {
    result[i] = Number(biggerNumber[i]) + Number(smallerNumber[i]);
  }
  result = result.map(num => num.toString().slice(-1));

  return Number(result.reduce((prev, curr) => prev.concat(curr)));
}

console.log(additionWithoutCarrying(456, 1734)); // 1180
console.log(additionWithoutCarrying(99999, 0)); // 99999
console.log(additionWithoutCarrying(999, 999)); // 888
console.log(additionWithoutCarrying(0, 0)); // 0
console.log(additionWithoutCarrying(54321, 54321)); // 8642

/*
function additionWithoutCarrying(param1, param2) {
  var result = 0;
  var tenPower = 1;
  while (param1 > 0 || param2 > 0) {
    result += tenPower * ((param1 + param2) % 10);
    param1 = Math.floor(param1 / 10);
    param2 = Math.floor(param2 / 10);
    tenPower *= 10;
  }
  return result;
}
*/
