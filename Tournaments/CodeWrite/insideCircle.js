/*
Given the center and the radius of a circle and the coordinates of a point determine
if the point is inside (or on the border of) the circle.

Example

For point = [1, 1], center = [2, 2] and radius = 1, the output should be
insideCircle(point, center, radius) = false.

For point = [1, 1], center = [0, 0] and radius = 3, the output should be
insideCircle(point, center, radius) = true.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer point

Array of length 2 representing a point.

Guaranteed constraints:
-100 ≤ point[i] ≤ 100.

[input] array.integer center

Array of length 2 representing the center of a circle.

Guaranteed constraints:
-10 ≤ center[i] ≤ 10.

[input] integer radius

Radius of the circle.

Guaranteed constraints:
1 ≤ radius ≤ 5.

[output] boolean

true if point is inside the circle centered at center with radius equal
to radius(or on its border), false otherwise
*/

function insideCircle(point, center, radius) {
  return (point[0] - center[0]) * (point[0] - center[0]) + (point[1] - center[1]) * (point[1] - center[1]) <= radius * radius;
}

console.log(insideCircle([1, 1], [2, 2], 1)); // false
