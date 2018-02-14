/*
Given integers l1, r1, l2 and r2, count integers x such that l1 < x < r1 and l2 < x < r2.

Example

For l1 = 1, r1 = 5, l2 = 2 and r2 = 10, the output should be
commonPoints(l1, r1, l2, r2) = 2.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer l1

Guaranteed constraints:
-10 ≤ l1 ≤ 10.

[input] integer r1

Guaranteed constraints:
l1 < r1 ≤ 10.

[input] integer l2

Guaranteed constraints:
-10 ≤ l2 ≤ 10.

[input] integer r2

Guaranteed constraints:
l2 < r2 ≤ 10.

[output] integer
*/

function commonPoints(l1, r1, l2, r2) {
  let count = 0;

  for (let x = -10; x <= 10; x += 1) {
    if (l1 < x && x < r1 && l2 < x && x < r2) count += 1;
  }

  return count;
}

console.log(commonPoints(1, 5, 2, 10)); // 2
