/*
Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string time

A string representing time in HH:MM format.
It is guaranteed that the first two characters, as well as the last two characters, are digits.

[output] boolean

true if the given representation is correct, false otherwise.
*/

function validTime(time) {
  const timeArray = time.split(':').map(num => Number(num));
  return (timeArray[0] < 24 && timeArray[1] < 60);
}

console.log(validTime('13:58')); // true
console.log(validTime('25:51')); // false
console.log(validTime('02:76')); // false
console.log(validTime('24:00')); // false
