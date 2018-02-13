/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid
with numbers in such a way that each column, each row, and each of the nine
3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers
represents a valid Sudoku puzzle according to the layout rules described above.
Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column.
Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char grid

A 9 × 9 array of characters, in which each character is either a digit
from '1' to '9' or a period '.'.

[output] boolean

Return true if grid represents a valid Sudoku puzzle, otherwise return false.
*/

// It's to hard for me to figure this out :(

function makeMatrix(grid) {
  const squares = [[], [], [], [], [], [], [], [], []];
  let k = 0;

  while (k < 9) {
    for (let x = 0; x < 3; x += 1) {
      const matrix = [];
      for (let y = 0; y < 3; y += 1) {
        matrix.push(grid[x][y]);
      }
      squares[k].push(matrix);
    }
    k += 1;
  }
  return squares;
}

function check(array) {
  array = array.filter(num => num > 0);
  const uniqueArray = new Set(array);
  return (uniqueArray.size === array.length);
}

function sudoku2(grid) {
  const rows = grid;
  const columns = [];

  for (let y = 0; y < grid.length; y += 1) {
    const column = [];
    for (let x = 0; x < grid.length; x += 1) {
      column.push(grid[x][y]);
    }
    columns.push(column);
  }

  for (let i = 0; i < grid.length; i += 1) {
    let answer;
    answer = check(rows[i]);
    if (answer === false) return false;
    answer = check(columns[i]);
    if (answer === false) return false;
  }

  return true;
}

console.log(sudoku2([[".",".",".","1","4",".",".","2","."],
                     [".",".","6",".",".",".",".",".","."],
                     [".",".",".",".",".",".",".",".","."],
                     [".",".","1",".",".",".",".",".","."],
                     [".","6","7",".",".",".",".",".","9"],
                     [".",".",".",".",".",".","8","1","."],
                     [".","3",".",".",".",".",".",".","6"],
                     [".",".",".",".",".","7",".",".","."],
                     [".",".",".","5",".",".",".","7","."]])); //true

console.log(sudoku2([[".",".",".",".","2",".",".","9","."],
                     [".",".",".",".","6",".",".",".","."],
                     ["7","1",".",".","7","5",".",".","."],
                     [".","7",".",".",".",".",".",".","."],
                     [".",".",".",".","8","3",".",".","."],
                     [".",".","8",".",".","7",".","6","."],
                     [".",".",".",".",".","2",".",".","."],
                     [".","1",".","2",".",".",".",".","."],
                     [".","2",".",".","3",".",".",".","."]])); // false

console.log(sudoku2([[".",".","4",".",".",".","6","3","."],
                     [".",".",".",".",".",".",".",".","."],
                     ["5",".",".",".",".",".",".","9","."],
                     [".",".",".","5","6",".",".",".","."],
                     ["4",".","3",".",".",".",".",".","1"],
                     [".",".",".","7",".",".",".",".","."],
                     [".",".",".","5",".",".",".",".","."],
                     [".",".",".",".",".",".",".",".","."],
                     [".",".",".",".",".",".",".",".","."]])); // false

console.log(sudoku2([[".",".",".",".",".",".",".",".","2"],
                     [".",".",".",".",".",".","6",".","."],
                     [".",".","1","4",".",".","8",".","."],
                     [".",".",".",".",".",".",".",".","."],
                     [".",".",".",".",".",".",".",".","."],
                     [".",".",".",".","3",".",".",".","."],
                     ["5",".","8","6",".",".",".",".","."],
                     [".","9",".",".",".",".","4",".","."],
                     [".",".",".",".","5",".",".",".","."]])); // true

console.log(sudoku2([[".","9",".",".","4",".",".",".","."],
                     ["1",".",".",".",".",".","6",".","."],
                     [".",".","3",".",".",".",".",".","."],
                     [".",".",".",".",".",".",".",".","."],
                     [".",".",".","7",".",".",".",".","."],
                     ["3",".",".",".","5",".",".",".","."],
                     [".",".","7",".",".","4",".",".","."],
                     [".",".",".",".",".",".",".",".","."],
                     [".",".",".",".","7",".",".",".","."]])); // true

console.log(sudoku2([[".","4",".",".",".",".",".",".","."],
                     [".",".","4",".",".",".",".",".","."],
                     [".",".",".","1",".",".","7",".","."],
                     [".",".",".",".",".",".",".",".","."],
                     [".",".",".","3",".",".",".","6","."],
                     [".",".",".",".",".","6",".","9","."],
                     [".",".",".",".","1",".",".",".","."],
                     [".",".",".",".",".",".","2",".","."],
                     [".",".",".","8",".",".",".",".","."]])); // false
