/*
In order to stop the Mad Coder evil genius you need to decipher the
encrypted message he sent to his minions. The message contains several
numbers that, when typed into a supercomputer, will launch a missile
into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in
their binary representation. More specifically, in the given number n
the kth bit from the right was initially set to 0, but its current value
might be different. It's now up to you to write a function that will change
the kth bit of n back to 0.

Example

For n = 37 and k = 3, the output should be
killKthBit(n, k) = 33.

37 = 100101 ~> 100001 = 33.

For n = 37 and k = 4, the output should be
killKthBit(n, k) = 37.

The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number),
so the answer is still 37.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
0 ≤ n ≤ 231 - 1.

[input] integer k

The 1-based index of the changed bit (counting from the right).

Guaranteed constraints:
1 ≤ k ≤ 31.

[output] integer

  const binaryString = n.toString(2);
  const newBinaryString = binaryString.slice(0, k) + 0 + binaryString.slice(k + 1);
  return parseInt(newBinaryString, 2);

  return parseInt(n.toString(2).slice(0, k) + 0 + n.toString(2).slice(k + 1), 2);

JavaScript Bitwise Operators
*/

function killKthBit(n, k) {
  return n & ~(1 << k - 1);
}


console.log(killKthBit(37, 3)); // 33
console.log(killKthBit(37, 4)); // 37
console.log(killKthBit(37, 2)); // 37
console.log(killKthBit(0, 4)); // 0
console.log(killKthBit(2147483647, 16)); // 2147450879
console.log(killKthBit(374823748, 13)); // 374819652
console.log(killKthBit(2734827, 4)); // 2734819
console.log(killKthBit(1084197039, 15)); // 1084197039
console.log(killKthBit(1160825071, 3)); // 1160825067
console.log(killKthBit(2039063284, 4)); // 2039063284
