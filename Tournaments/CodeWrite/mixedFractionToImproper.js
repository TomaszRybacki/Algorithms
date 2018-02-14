/*
We need to turn a mixed fraction into an improper reduced fraction

Example

For a = [3, 1, 2], the output should be
mixedFractionToImproper(a) = [7, 2].

Explanation: 3 + 1/2 = 7/2.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

An array of three integers representing the reduced mixed fraction in the form a[0] + a[1] / a[2].

Guaranteed constraints:
1 ≤ a[i] ≤ 25.

[output] array.integer

Array b of two positive integers representing a reduced improper
fraction b[0] / b[1] equal to the input fraction.
*/

function mixedFractionToImproper(a) {
  const result = (a[0] * a[2]) + a[1];
  return [result, a[2]];
}

console.log(mixedFractionToImproper([3, 1, 2])); // [7, 2]
console.log(mixedFractionToImproper([3, 1, 3])); // [10, 3]

