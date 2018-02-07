/*
You are taking part in an Escape Room challenge designed specifically for programmers.
In your efforts to find a clue, you've found a binary code written on the wall behind a vase,
and realized that it must be an encrypted message. After some thought, your first guess
is that each consecutive 8 bits of the code stand for the character with the
corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.

Example

For code = "010010000110010101101100011011000110111100100001", the output should be
messageFromBinaryCode(code) = "Hello!".

The first 8 characters of the code are 01001000, which is 72 in the binary numeral system.
72 stands for H in the ASCII-table, so the first letter is H.
Other letters can be obtained in the same manner.

Input/Output

[execution time limit] 4 seconds (js)

[input] string code

A string, the encrypted message consisting of characters '0' and '1'.

Guaranteed constraints:
0 < code.length < 800.

[output] string

The decrypted message.
*/

function messageFromBinaryCode(code) {
  let eightBits = [];
  let index = 0;

  for (let i = 1; i < (code.length / 8) + 1; i += 1) {
    eightBits.push(code.slice(index, i * 8));
    index = i * 8;
  }

  eightBits = eightBits.map(bit => parseInt(bit, 2));
  eightBits = eightBits.map(bit => String.fromCharCode(bit));

  return eightBits.join('');
}

console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001"));
// "Hello!"
console.log(messageFromBinaryCode("01001101011000010111100100100000011101000110100001100101001000000100011001101111011100100110001101100101001000000110001001100101001000000111011101101001011101000110100000100000011110010110111101110101"));
// "May the Force be with you"
console.log(messageFromBinaryCode("010110010110111101110101001000000110100001100001011001000010000001101101011001010010000001100001011101000010000001100000011010000110010101101100011011000110111100101110"));
// "You had me at `hello."
