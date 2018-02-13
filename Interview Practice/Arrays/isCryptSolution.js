/*
A cryptarithm is a mathematical puzzle for which the goal is to find the
correspondence between letters and digits, such that the given arithmetic
equation consisting of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an an array containing
the mapping of letters and digits, solution. The array crypt will contain three
non-empty strings that follow the structure: [word1, word2, word3],
which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm
with digits using the mapping in solution, becomes a valid arithmetic equation
containing no numbers with leading zeroes, the answer is true.
If it does not become a valid arithmetic solution, the answer is false.

Example

For crypt = ["SEND", "MORE", "MONEY"] and

solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
the output should be
isCryptSolution(crypt, solution) = true.

When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in crypt,
you get 9567 + 1085 = 10652 which is correct and a valid arithmetic equation.

For crypt = ["TEN", "TWO", "ONE"] and

solution = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']]
the output should be
isCryptSolution(crypt, solution) = false.

Even though 054 + 091 = 145, 054 and 091 both contain leading zeroes,
meaning that this is not a valid solution.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string crypt

An array of three non-empty strings containing only uppercase English letters.

Guaranteed constraints:
crypt.length = 3,
1 ≤ crypt[i].length ≤ 14.

[input] array.array.char solution

An array consisting of pairs of characters that represent the correspondence
between letters and numbers in the cryptarithm. The first character in the pair
is an uppercase English letter, and the second one is a digit in the range from 0 to 9.

Guaranteed constraints:
solution[i].length = 2,
'A' ≤ solution[i][0] ≤ 'Z',
'0' ≤ solution[i][1] ≤ '9',
solution[i][0] ≠ solution[j][0], i ≠ j,
solution[i][1] ≠ solution[j][1], i ≠ j.

It is guaranteed that solution only contains entries for the letters present
in crypt and that different letters have different values.

[output] boolean

Return true if the solution represents the correct solution to the cryptarithm crypt,
otherwise return false.
*/

function isCryptSolution(crypt, solution) {
  const solutionObj = {};
  let decodedNumber1;
  let decodedNumber2;
  let decodedResult;

  for (let i = 0; i < solution.length; i += 1) {
    solutionObj[solution[i][0]] = solution[i][1];
  }

  decodedNumber1 = crypt[0].split('').map(letter => solutionObj[letter]).join('');
  decodedNumber2 = crypt[1].split('').map(letter => solutionObj[letter]).join('');
  decodedResult = crypt[2].split('').map(letter => solutionObj[letter]).join('');

  if (crypt[0].length === 1) {
    return (Number(decodedNumber1) + Number(decodedNumber2) === Number(decodedResult));
  } else {
    if (decodedNumber1.charAt(0) === '0') return false;
    if (decodedNumber2.charAt(0) === '0') return false;
    if (decodedResult.charAt(0) === '0') return false;
  }

  return (Number(decodedNumber1) + Number(decodedNumber2) === Number(decodedResult));
}

console.log(isCryptSolution(["SEND", "MORE", "MONEY"], [["O","0"],
                                                        ["M","1"],
                                                        ["Y","2"],
                                                        ["E","5"],
                                                        ["N","6"],
                                                        ["D","7"],
                                                        ["R","8"],
                                                        ["S","9"]])); // true

console.log(isCryptSolution(["TEN", "TWO", "ONE"], [["O","1"],
                                                    ["T","0"],
                                                    ["W","9"],
                                                    ["E","5"],
                                                    ["N","4"]])); // false

console.log(isCryptSolution(["ONE", "ONE", "TWO"], [["O","2"],
                                                    ["T","4"],
                                                    ["W","6"],
                                                    ["E","1"],
                                                    ["N","3"]])); // true

console.log(isCryptSolution(["A", "A", "A"], [["A","0"]])); // true

console.log(isCryptSolution(["A", "B", "C"], [["A","5"],
                                              ["B","6"],
                                              ["C","1"]])); // false

console.log(isCryptSolution(["AA", "AA", "AA"], [["A","0"]])); // false

console.log(isCryptSolution(["A", "A", "A"], [["A","1"]])); // false

console.log(isCryptSolution(["WASD", "IJKL", "AOPAS"], [["W","2"],
                                                        ["A","0"],
                                                        ["S","4"],
                                                        ["D","1"],
                                                        ["I","5"],
                                                        ["J","8"],
                                                        ["K","6"],
                                                        ["L","3"],
                                                        ["O","7"],
                                                        ["P","9"]])); // false

