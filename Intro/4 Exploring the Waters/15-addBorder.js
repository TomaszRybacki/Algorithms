/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 5,
1 ≤ picture[i].length ≤ 5.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
*/

function addBorder(picture) {
  const asterisksNumber = picture[0].length + 2;
  let asteriksString = '';

  for (let i = 0; i < asterisksNumber; i += 1) {
    asteriksString += '*';
  }

  picture.unshift(asteriksString);
  picture.push(asteriksString);

  for (let i = 1; i < picture.length - 1; i += 1) {
    picture[i] = '*' + picture[i] + '*';
  }
  return picture;
}

console.log(addBorder(['abc', 'ded']));
// ["*****", "*abc*", "*ded*", "*****"]
console.log(addBorder(['a']));
// ["***", "*a*", "***"]
