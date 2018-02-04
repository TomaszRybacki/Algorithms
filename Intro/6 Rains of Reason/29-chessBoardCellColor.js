/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.

For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] string cell1

[input] string cell2

[output] boolean

true if both cells have the same color, false otherwise.

*/

// columns A C E G

function oddColumn(cell) {
  return (cell.charAt(1) % 2 === 0) ? 'white' : 'black';
}

// columns B D F H

function evenColumn(cell) {
  return (cell.charAt(1) % 2 !== 0) ? 'white' : 'black';
}

function chessBoardCellColor(cell1, cell2) {
  let colorCell1;
  let colorCell2;
  const oddLetters = ['A', 'C', 'E', 'G'];

  if (oddLetters.includes(cell1.charAt(0))) {
    colorCell1 = oddColumn(cell1);
  } else {
    colorCell1 = evenColumn(cell1);
  }

  if (oddLetters.includes(cell2.charAt(0))) {
    colorCell2 = oddColumn(cell2);
  } else {
    colorCell2 = evenColumn(cell2);
  }

  return colorCell1 === colorCell2;
}

console.log(chessBoardCellColor('A1', 'C3')); // true
console.log(chessBoardCellColor('A1', 'H3')); // false
console.log(chessBoardCellColor('A1', 'A2')); // false
console.log(chessBoardCellColor('A1', 'B2')); // true
console.log(chessBoardCellColor('B3', 'H8')); // false
console.log(chessBoardCellColor('C3', 'B3')); // false
console.log(chessBoardCellColor('G5', 'E7')); // true
console.log(chessBoardCellColor('C8', 'H8')); // false
console.log(chessBoardCellColor('D2', 'D2')); // true
console.log(chessBoardCellColor('A2', 'A5')); // false
