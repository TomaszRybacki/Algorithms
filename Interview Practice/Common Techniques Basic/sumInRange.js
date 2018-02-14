/*
You have an array of integers nums and an array queries, where queries[i]
is a pair of indices (0-based). Find the sum of the elements in nums from
the indices at queries[i][0] to queries[i][1] (inclusive) for each query,
then add all of the sums for all the queries together. Return that number modulo 109 + 7.

Example

For nums = [3, 0, -2, 6, -3, 2] and queries = [[0, 2], [2, 5], [0, 5]], the output should be
sumInRange(nums, queries) = 10.

The array of results for queries is [1, 3, 6], so the answer is 1 + 3 + 6 = 10.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer nums

An array of integers.

Guaranteed constraints:
1 ≤ nums.length ≤ 105,
-1000 ≤ nums[i] ≤ 1000.

[input] array.array.integer queries

An array containing sets of integers that represent the indices to query in the nums array.

Guaranteed constraints:
1 ≤ queries.length ≤ 3 · 105,
queries[i].length = 2,
0 ≤ queries[i][j] ≤ nums.length - 1,
queries[i][0] ≤ queries[i][1].

[output] integer

An integer that is the sum of all of the sums gotten from querying nums, taken modulo 109 + 7.
*/

function sumInRange(nums, queries) {

}

console.log(sumInRange([3, 0, -2, 6, -3, 2], [[0, 2], [2, 5], [0, 5]]));
// 10
console.log(sumInRange([-1000], [[0, 0]]));
// 999999007
console.log(sumInRange([34, 19, 21, 5, 1, 10, 26, 46, 33, 10]), [[3, 7], [3, 4], [3, 7], [4, 5], [0, 5]]);
// 283
console.log(sumInRange([-4, -18, -22, -14, -33, -47, -29, -35, -50, -19], [[2, 9], [5, 6], [1, 2], [2, 2], [4, 5]]));
// 999999540
console.log(sumInRange([-23, -8, -52, -58, 93, -16, -26, 75, -77, 25, 90, -50, -31, 70, 53, -68, 96, 100, 69, 13], [[0, 4], [0, 8], [7, 7], [3, 4], [2, 3], [0, 3], [8, 8], [2, 2], [5, 7], [2, 2]]));
// 999999578
console.log(sumInRange([-77, 54, -59, -94, -13, -78, -81, -38, -26, 17, -73, -88, 90, -42, -63, -36, 37, 25, -22, 4, 25, -86, -44, 88, 2, -47, -29, 71, 54, -42], [[2, 2], [4, 7], [2, 4], [0, 2], [3, 6], [6, 6], [3, 3], [2, 7], [3, 4], [3, 3], [2, 9], [0, 1], [4, 4], [2, 3], [0, 6], [4, 4], [2, 3], [0, 5], [2, 5], [4, 5]]));
// 999996808
console.log(sumInRange([1000], [[0, 0]]));
// 1000
