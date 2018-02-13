/*
Note: Try to solve this task in-place (with O(1) additional memory),
since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image.
Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 100,
a[i].length = a.length,
1 ≤ a[i][j] ≤ 104.

[output] array.array.integer
*/

function rotateImage(a) {
  const rotatedArray = [];
  for (let y = 0; y < a.length; y += 1) {
    const row = [];
    for (let x = a.length - 1; x >= 0; x -= 1) {
      row.push(a[x][y]);
    }
    rotatedArray.push(row);
  }
  return rotatedArray;
}

console.log(rotateImage([[1, 2, 3],
                         [4, 5, 6],
                         [7, 8, 9]]));

                        //[[7,4,1],
                        // [8,5,2],
                        // [9,6,3]]

console.log(rotateImage([[1]])); // [[1]]

console.log(rotateImage([[10, 9, 6, 3, 7],
                         [6, 10, 2, 9, 7],
                         [7, 6, 3, 8, 2],
                         [8, 9, 7, 9, 9],
                         [6, 8, 6, 8, 2]]));

                      //[[6,8,7,6,10],
                      // [8,9,6,10,9],
                      // [6,7,3,2,6],
                      // [8,9,8,9,3],
                      // [2,9,2,7,7]]
