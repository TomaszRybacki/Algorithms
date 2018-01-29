/*
Remove a part of a given array between given 0-based indexes l and r (inclusive).

Example

For inputArray = [2, 3, 2, 3, 4, 5], l = 2 and r = 4, the output should be
removeArrayPart(inputArray, l, r) = [2, 3, 5].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-10 ≤ inputArray[i] ≤ 10.

[input] integer l

Left index of the part to be removed (0-based).

Guaranteed constraints:
0 ≤ l ≤ r.

[input] integer r

Right index of the part to be removed (0-based).

Guaranteed constraints:
l ≤ r < inputArray.length.

[output] array.integer
*/

function removeArrayPart(inputArray, l, r) {
  inputArray.splice(l, r + 1 - l);
  return inputArray;
}

console.log(removeArrayPart([2, 3, 2, 3, 4, 5], 2, 4)); // [2, 3, 5]
console.log(removeArrayPart([2, 4, 10, 1], 0, 2)); // [1]
console.log(removeArrayPart([5, 3, 2, 3, 4], 1, 1)); // [5, 2, 3, 4]
