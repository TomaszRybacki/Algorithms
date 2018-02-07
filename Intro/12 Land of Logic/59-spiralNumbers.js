/*
Construct a square matrix with a size N × N containing integers from 1 to N * N
in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Matrix size, a positive integer.

Guaranteed constraints:
3 ≤ n ≤ 10.

[output] array.array.integer
*/

// It's just my test. Which display result below.
// It's not the final solution.
// [[1,2,3],
// [4,5,6],
// [7,8,9]]

function spiralNumbers(n) {
  const spiralMatrix = [];
  let rowArray = [];

  for (let i = 0; i < n * n; i += 1) {
    rowArray.push(i + 1);
    while (rowArray.length === n) {
      spiralMatrix.push(rowArray);
      rowArray = [];
    }
  }
  return spiralMatrix;
}

console.log(spiralNumbers(3));
// [[1,2,3],
// [8,9,4],
// [7,6,5]]
console.log(spiralNumbers(5));
// [[1,2,3,4,5],
// [16,17,18,19,6],
// [15,24,25,20,7],
// [14,23,22,21,8],
// [13,12,11,10,9]]
