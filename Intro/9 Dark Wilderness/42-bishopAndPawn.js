/*
Given the positions of a white bishop and a black pawn on the standard chess board,
determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement.
Check out the example below to see how it can move:

Example

For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.

For bishop = "h1" and pawn = "h3", the output should be
bishopAndPawn(bishop, pawn) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] string bishop

Coordinates of the white bishop in the chess notation.

[input] string pawn

Coordinates of the black pawn in the same notation.

[output] boolean

true if the bishop can capture the pawn, false otherwise
*/

function bishopAndPawn(bishop, pawn) {
  const letterToNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };

  const bishopX = letterToNumber[bishop.charAt(0)];
  const bishopY = bishop.charAt(1);
  const pawnX = letterToNumber[pawn.charAt(0)];
  const pawnY = pawn.charAt(1);

  return Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY);
}

console.log(bishopAndPawn('a1', 'c3')); // true
console.log(bishopAndPawn('h1', 'h3')); // false
console.log(bishopAndPawn('a5', 'c3')); // true
console.log(bishopAndPawn('g1', 'f3')); // false
console.log(bishopAndPawn('e7', 'd6')); // true
console.log(bishopAndPawn('e7', 'a3')); // true
console.log(bishopAndPawn('e3', 'a7')); // true
console.log(bishopAndPawn('a1', 'h8')); // true
console.log(bishopAndPawn('a1', 'h7')); // false
console.log(bishopAndPawn('h1', 'a8')); // true
