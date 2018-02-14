function makeArrayConsecutive(sequence) {

  var answer = [],
      current_position = 0;

  sequence.sort(function(a, b) { return a - b; });
  for (var i = sequence[0]; i < sequence[sequence.length - 1]; i++) {
    if (sequence[current_position] !== i) {
      answer.push(...); // i
    }
    else {
      current_position++;
    }
  }

  return answer;
}
