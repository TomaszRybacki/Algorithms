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

// HINT
//? = (a,b,s,i) => i == ?.length ? s : X(a, b, ?+(a[i]!=b[i]), i+?)
//
//stringsRearrangement = A => {
//    // Build matrix to ??????? deltas
//    M = A.map(a => (? = [], A.map((b,c) => X(?,b,0,C=0) == 1 && ?.push(c)), N))
//
//    e = -1
//
//    // ??? from endpoint (if there is ???)
//    // must eventually reach all nodes ???? this point
//    w = (n, L) => ? == A.length || M[n].some(? => !M[c].L && w(c, ?+1), M[n].L = L) || (?[n].L = 0)
//
//    // Check for ????? connected graph
//    // every node has ????????? and no more than two ???? nodes
//    return M.every((v,?) => (b = (l=v.length)==1, ? && (e = i), C += b, l)) && ? <= 2 &&
//    (e < 0 || w(e, ?))
//}
*/

function stringsRearrangement(inputArray) {

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
