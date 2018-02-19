/*
For a given integer n, return the shortest possible list of distinct Fibonacci numbers
that sum up to n, sorted in ascending order.

Fibonacci sequence is defined as follows:
F0 = 0, F1 = 1. For each i > 1: Fi = Fi - 1 + Fi - 2.

Example

For n = 20, the output should be
fibonacciSum(n) = [2, 5, 13].

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
20 ≤ n ≤ 6000.

[output] array.integer
*/

function fibonacciSum(n) {
  const fibonacciNumbers = [0, 1];
  const resultArray = [];
  let i = 2;
  let lastNumber = 1;

  while (lastNumber <= n) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1];
    lastNumber = fibonacciNumbers[i];
    i += 1;
  }

  for (let j = fibonacciNumbers.length - 2; j > 0; j -= 1) {
    const sum = resultArray.reduce((prev, curr) => prev + curr, 0);
    if (sum + fibonacciNumbers[j] <= n) {
      resultArray.push(fibonacciNumbers[j]);
    }
  }

  return resultArray.reverse();
}

console.log(fibonacciSum(20)); // [2, 5, 13]
console.log(fibonacciSum(21)); // [21]
console.log(fibonacciSum(33)); // [1, 3, 8, 21]
