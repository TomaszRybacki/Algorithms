/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.

Tests:
inputArray: ["aba", "aa", "ad", "vcd", "aba"]   //  ["aba", "vcd", "aba"]
inputArray: ["aa"]    //   ["aa"]
inputArray: ["abc", "eeee", "abcd", "dcd"]    //    ["eeee", "abcd"]
inputArray: ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]
// ["zzzzzz", "abcdef", "aaaaaa"]
*/


function allLongestStrings(inputArray) {
  let longestString = 0;
  inputArray.forEach((string) => {
    if (string.length > longestString) {
      longestString = string.length;
    }
  });

  const newArray = inputArray.filter((str) => {
    if (str.length === longestString) {
      return true;
    } else {
      return false;
    }
  });

  return newArray;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(allLongestStrings(['aa']));
console.log(allLongestStrings(['abc', 'eeee', 'abcd', 'dcd']));
console.log(allLongestStrings(['a', 'abc', 'cbd', 'zzzzzz', 'a', 'abcdef', 'asasa', 'aaaaaa']));
