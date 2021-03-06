/*
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far,
and an integer k equal to the number of voters who haven't cast their vote yet,
find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate.
If two or more candidates receive the same (maximum) number of votes,
assume there is no winner at all.

Example

For votes = [2, 3, 5, 2] and k = 3, the output should be
electionsWinners(votes, k) = 2.

The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him,
he will still have only 5 votes, i.e. the same number as the third candidate,
so there will be no winner.
The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).
The third candidate can win even if none of the remaining candidates vote for him. For example,
if each of the remaining voters cast their votes for each of his opponents,
he will still be the winner (the votes array will thus be [3, 4, 5, 3]).
The last candidate can't win no matter what (for the same reason as the first candidate).
Thus, only 2 candidates can win (the second and the third), which is the answer.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer votes

A non-empty array of non-negative integers.
Its ith element denotes the number of votes cast for the ith candidate.

Guaranteed constraints:
4 ≤ votes.length ≤ 105,
0 ≤ votes[i] ≤ 104.

[input] integer k

The number of voters who haven't cast their vote yet.

Guaranteed constraints:
0 ≤ k ≤ 105.

[output] integer
*/

function electionsWinners(votes, k) {
  let numberOfCandidates = 0;
  let isThereMaxNumber = 0;
  const max = Math.max(...votes);

  for (let i = 0; i < votes.length; i += 1) {
    if (votes[i] + k > max) {
      numberOfCandidates += 1;
    }
    if (k === 0) {
      if (votes[i] === max) {
        isThereMaxNumber += 1;
      }
    }
  }

  return (isThereMaxNumber === 1) ? 1 : numberOfCandidates;
}

console.log(electionsWinners([2, 3, 5, 2], 3)); // 2
console.log(electionsWinners([1, 3, 3, 1, 1], 0)); // 0
console.log(electionsWinners([5, 1, 3, 4, 1], 0)); // 1
console.log(electionsWinners([1, 1, 1, 1], 1)); // 4
console.log(electionsWinners([1, 1, 1, 1], 0)); // 0
console.log(electionsWinners([3, 1, 1, 3, 1], 2)); // 2
