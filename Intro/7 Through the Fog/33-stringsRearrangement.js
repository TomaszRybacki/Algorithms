/*
Given an array of equal-length strings, check if it is possible to rearrange
the strings in such a way that after the rearrangement the strings at
consecutive positions would differ by exactly one character.

Example

For inputArray = ["aba", "bbb", "bab"], the output should be
stringsRearrangement(inputArray) = false;

All rearrangements don't satisfy the description condition.

For inputArray = ["ab", "bb", "aa"], the output should be
stringsRearrangement(inputArray) = true.

Strings can be rearranged in the following way: "aa", "ab", "bb".
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array of strings of lowercase letters.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 15.

[output] boolean
*/

function stringsRearrangement(inputArray) {
  function differByOne(string1, string2) {
    let mismatch = 0;
    for (let i = 0; i < string1.length; i += 1) {
      if (string1[i] !== string2[i]) mismatch += 1;
    }
    return mismatch === 1;
  }

  function getPermutations(array) {
    const fullLength = array.length;
    const sequence = [];
    const permutations = [];

    function permute(a) {
      for (let i = 0; i < a.length; i += 1) {
        const string = a[i];
        sequence.push(string);
        if (sequence.length === fullLength) {
          permutations.push([...sequence]);
        } else {
          const remaining = [...a.slice(0, i), ...a.slice(i + 1)];
          permute(remaining);
        }
        sequence.pop();
      }
    }
    permute(array);
    return permutations;
  }

  const sequences = getPermutations(inputArray);
  for (let sequence of sequences) {
    let possible = true;

    for (let i = 1; i < sequence.length; i += 1) {
      const thisOne = sequence[i];
      const previousOne = sequence[i - 1];

      if (!differByOne(thisOne, previousOne)) {
        possible = false;
        break;
      }
    }
    if (possible) return true;
  }
  return false;
}

console.log(stringsRearrangement(['aba', 'bbb', 'bab'])); // false
console.log(stringsRearrangement(['ab', 'bb', 'aa'])); // true
console.log(stringsRearrangement(['q', 'q'])); // false
console.log(stringsRearrangement(['zzzzab', 'zzzzbb', 'zzzzaa'])); // true
console.log(stringsRearrangement(['ab', 'ad', 'ef', 'eg'])); // false
console.log(stringsRearrangement(['abc', 'bef', 'bcc', 'bec', 'bbc', 'bdc'])); // true
console.log(stringsRearrangement(['abc', 'abx', 'axx', 'abc'])); // false
console.log(stringsRearrangement(['abc', 'abx', 'axx', 'abx', 'abc'])); // true
console.log(stringsRearrangement(['f', 'g', 'a', 'h'])); // true
