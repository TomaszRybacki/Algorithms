/*
We want to turn the given integer into a number that has only
one non-zero digit using a tail rounding approach. This means
that at each step we take the last non 0 digit of the number and
round it to 0 or to 10. If it's less than 5 we round it to 0 if
it's larger than or equal to 5 we round it to 10 (rounding to 10
means increasing the next significant digit by 1).
The process stops immediately once there is only one non-zero digit left.

Example

For value = 15, the output should be
rounders(value) = 20;

For value = 1234, the output should be
rounders(value) = 1000.

1234 -> 1230 -> 1200 -> 1000.

For value = 1445, the output should be
rounders(value) = 2000.

1445 -> 1450 -> 1500 -> 2000.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer value

A positive integer.

Guaranteed constraints:
1 ≤ value ≤ 108.

[output] integer

The rounded number.
*/

function rounders(value) {
  const valueArray = value.toString().split('').map(num => Number(num));
  let rest;

  for (let i = valueArray.length - 1; i > 0; i -= 1) {
    if (valueArray[i] >= 5) {
      rest = 1;
      valueArray[i] = 0;
      valueArray[i - 1] += rest;
    } else {
      rest = 0;
      valueArray[i] = 0;
      valueArray[i - 1] += rest;
    }
  }
  return Number(valueArray.reduce((prev, curr) => prev.toString() + curr.toString()));
}

console.log(rounders(15)); // 20
console.log(rounders(1234)); // 1000
console.log(rounders(1445)); // 2000
console.log(rounders(14)); // 10
console.log(rounders(10)); // 10
console.log(rounders(99)); // 100
