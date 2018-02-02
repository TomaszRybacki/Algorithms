/*
Two arrays are called similar if one can be obtained from
another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Array of integers.

Guaranteed constraints:
3 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ 1000.

[input] array.integer b

Array of integers of the same length as a.

Guaranteed constraints:
b.length = a.length,
1 ≤ b[i] ≤ 1000.

[output] boolean

true if a and b are similar, false otherwise.
*/

function areSimilar(a, b) {
  let c = [];
  let d = [];

  if (a.toString() === b.toString()) {
    return true;
  }

  for (let i = 0; i <= a.length; i += 1) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }

  d = d.reverse();
  return (c.length === 2 && c.toString() === d.toString());
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); // false
console.log(areSimilar([1, 1, 4], [1, 2, 3])); // false
console.log(areSimilar([1, 2, 3], [1, 10, 2])); // false
console.log(areSimilar([2, 3, 1], [1, 3, 2])); // true
console.log(areSimilar([2, 3, 9], [10, 3, 2])); // false
console.log(areSimilar([4, 6, 3], [3, 4, 6])); // false
console.log(areSimilar(
  [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
  [832, 998, 148, 570, 533, 561, 455, 147, 894, 279])); // true
console.log(areSimilar(
  [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
  [832, 570, 148, 998, 533, 561, 455, 147, 894, 279])); // false

/*
This solution didn't pass one hidden test case. I don't know why.

function areSimilar(a, b) {
  let repetitionCount = 0;
  let difrentNumbers = 0;
  for (let i = 0; i < a.length; i += 1) {
    (a[i] !== b[i]) ? repetitionCount += 1 : repetitionCount += 0;
    a.includes(b[i]) ? difrentNumbers += 0 : difrentNumbers += 1;
  }
  return (repetitionCount <= 2 && difrentNumbers === 0);
}
*/
