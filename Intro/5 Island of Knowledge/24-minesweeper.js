/*
In the popular Minesweeper game you have a board with some mines and
those cells that don't contain a mine have a number in it that indicates
the total number of mines in the neighboring cells. Starting off with
some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]

Check out the image below for better understanding:

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - true if
the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 5,
2 ≤ matrix[0].length ≤ 5.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer
equal to the number of mines in the neighboring cells.
Two cells are called neighboring if they share at least one corner.
*/

function minesweeper(matrix) {
  const getVal = function (y, x) {
    if (y < 0 || y >= matrix.length ||
        x < 0 || x >= matrix[0].length) {
      return false;
    } else {
      return matrix[y][x];
    }
  };
  const sumVals = function (y, x) {
    let sum = 0;
    for (let dx = -1; dx <= 1; dx += 1) {
      for (let dy = -1; dy <= 1; dy += 1) {
        if (dx === 0 && dy === 0) continue;
        if (getVal(y + dy, x + dx)) sum += 1;
      }
    }
    return sum;
  };
  const res = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const line = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      line.push(sumVals(i, j));
    }
    res.push(line);
  }
  return res;
}

console.log(minesweeper([[true, false, false], [false, true, false], [false, false, false]]));
// [[1, 2, 1], [2, 1, 1], [1, 1, 1]]
console.log(minesweeper([[false, false, false], [false, false, false]]));
// [[0, 0, 0], [0, 0, 0]]
console.log(minesweeper([[true, false, false, true], [false, false, true, false], [true, true, false, true]]));
// [[0,2,2,1], [3,4,3,3], [1,2,3,1]]
