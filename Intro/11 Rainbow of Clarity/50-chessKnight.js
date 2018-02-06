/*
Given a position of a knight on the standard chessboard,
find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically,
or two squares vertically and one square horizontally away from it.
The complete move therefore looks like the letter L. Check out the image below to see all
valid moves for a knight piece that is placed on one of the central squares.

Example

For cell = "a1", the output should be
chessKnight(cell) = 2.

For cell = "c2", the output should be
chessKnight(cell) = 6.

Input/Output

[execution time limit] 4 seconds (js)

[input] string cell

String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

[output] integer
*/

function moveKnight(knightX, knightY) {
  let possibleMoves = 0;
  if (knightX - 2 > 0 && knightY - 1 > 0) possibleMoves += 1;
  if (knightX - 2 > 0 && knightY + 1 < 9) possibleMoves += 1;
  if (knightX + 2 < 9 && knightY - 1 > 0) possibleMoves += 1;
  if (knightX + 2 < 9 && knightY + 1 < 9) possibleMoves += 1;

  if (knightY - 2 > 0 && knightX - 1 > 0) possibleMoves += 1;
  if (knightY - 2 > 0 && knightX + 1 < 9) possibleMoves += 1;
  if (knightY + 2 < 9 && knightX - 1 > 0) possibleMoves += 1;
  if (knightY + 2 < 9 && knightX + 1 < 9) possibleMoves += 1;
  return possibleMoves;
}

function chessKnight(cell) {
  const letterToNumber = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
  const knightX = Number(letterToNumber[cell.charAt(0)]);
  const knightY = Number(cell.charAt(1));

  return moveKnight(knightX, knightY);
}

console.log(chessKnight('a1')); // 2
console.log(chessKnight('c2')); // 6
console.log(chessKnight('d4')); // 8
console.log(chessKnight('g6')); // 6
