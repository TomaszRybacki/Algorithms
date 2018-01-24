/*
After they became famous, the CodeBots all decided to move to a new building and live together.
The building is represented by a rectangular matrix of rooms.
Each cell in the matrix contains an integer that represents the price of the room.
Some rooms are free (their cost is 0), but that's probably because they are haunted,
so all the bots are afraid of them. That is why any room that is free or is located
anywhere below a free room in the same column is not considered suitable for the bots to live in.

Help the bots calculate the total price of all the rooms that are suitable for them.

Example

For
matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9.

Here's the rooms matrix with unsuitable rooms marked with 'x':

[[x, 1, 1, 2],
 [x, 5, x, x],
 [x, x, x, x]]
Thus, the answer is 1 + 5 + 1 + 2 = 9.

For
matrix = [[1, 1, 1, 0],
          [0, 5, 0, 1],
          [2, 1, 3, 10]]
the output should be
matrixElementsSum(matrix) = 9.

Here's the rooms matrix with unsuitable rooms marked with 'x':

[[1, 1, 1, x],
 [x, 5, x, x],
 [x, 1, x, x]]
Note that the free room in the first row make the full column unsuitable for bots.

Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

A 2-dimensional array of integers representing a rectangular matrix of the building.

Guaranteed constraints:
1 ≤ matrix.length ≤ 5,
1 ≤ matrix[i].length ≤ 5,
0 ≤ matrix[i][j] ≤ 10.

[output] integer

The total price of all the rooms that are suitable for the CodeBots to live in.

Tests:
[[0,1,1,2],
 [0,5,0,0],
 [2,0,3,3]]
 = 9
 ----------
[[1,1,1,0],
 [0,5,0,1],
 [2,1,3,10]]
 =9
 ----------
[[1,1,1],
 [2,2,2],
 [3,3,3]]
 =18
 ----------
 matrix: [[0]]
 =0
*/

function matrixElementsSum(matrix) {
  const indexs = [];
  const columnArray = [[], [], [], []];
  const finalArray = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      columnArray[i].push(matrix[j][i]);
    }
  }

  for (let i = 0; i < columnArray.length; i += 1) {
    indexs[i] = columnArray[i].lastIndexOf(0);
  }

  for (let i = 0; i < indexs.length; i += 1) {
    if (indexs[i] === -1) {
      indexs[i] = columnArray[i].length;
    }
  }

  for (let i = 0; i < columnArray.length; i += 1) {
    finalArray[i] = columnArray[i].join('').slice(0, indexs[i]).split('');
  }

  const finalArrayReduced = finalArray.reduce((prev, curr) => prev.concat(curr));
  const sum = finalArrayReduced.reduce((prev, curr) => Number(prev) + Number(curr), 0);
  return sum;
}

console.log(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]));
console.log(matrixElementsSum([[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]]));
console.log(matrixElementsSum([[1, 1, 1], [2, 2, 2], [3, 3, 3]]));
console.log(matrixElementsSum([[0]]));
