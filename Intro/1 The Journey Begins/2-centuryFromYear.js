/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.

Answers:
1905 - 20
1700 - 17
1988 - 20
2000 - 20
2001 - 21
200 - 2
374 - 4
45 - 1
8 - 1
*/

function centuryFromYear(year) {
  const century = Math.ceil(year / 100);
  return century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1988));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(2001));
console.log(centuryFromYear(200));
console.log(centuryFromYear(374));
console.log(centuryFromYear(45));
console.log(centuryFromYear(8));
