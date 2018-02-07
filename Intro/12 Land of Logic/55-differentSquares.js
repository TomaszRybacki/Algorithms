/*
Given a rectangular matrix containing only digits,
calculate the number of different 2 × 2 squares in it.

Example
For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2

2 1
2 2

2 2
2 2

2 2
1 2

2 2
2 3

2 3
2 1

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.

[output] integer

The number of different 2 × 2 squares in matrix.
*/

function differentSquares(matrix) {
  const allSquareMatrix = [];

  for (let i = 0; i < matrix.length - 1; i += 1) {
    for (let j = 0; j < matrix[i].length - 1; j += 1) {
      const square = [matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]].toString();
      if (!allSquareMatrix.includes(square)) allSquareMatrix.push(square);
    }
  }
  return allSquareMatrix.length;
}

console.log(differentSquares([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]])); // 6
console.log(differentSquares([[9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9]])); // 1
console.log(differentSquares([[3]])); // 0
console.log(differentSquares([[3, 4, 5, 6, 7, 8, 9]])); // 0
console.log(differentSquares([[3], [4], [5], [6], [7]])); // 0
console.log(differentSquares([[2, 5, 3, 4, 3, 1, 3, 2],
 [4,5,4,1,2,4,1,3],
 [1,1,2,1,4,1,1,5],
 [1,3,4,2,3,4,2,4],
 [1,5,5,2,1,3,1,1],
 [1,2,3,3,5,1,2,4],
 [3,1,4,4,4,1,5,5],
 [5,1,3,3,1,5,3,5],
 [5,4,4,3,5,4,4,4]])); // 54
console.log(differentSquares([[1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 9, 9, 9, 2, 3, 9]])); // 0
