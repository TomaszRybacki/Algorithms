function binarySearch(inputArray, searchElement) {

  var minIndex = -1;
  var maxIndex = inputArray.length;
  var currentIndex;
  var currentElement;

  while (minIndex < maxIndex - 1) {
    currentIndex = (minIndex + maxIndex) / 2 // | 0;
    currentElement = inputArray[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex;
    } else {
      maxIndex = currentIndex;
    }
  }

  if (maxIndex === inputArray.length || inputArray[maxIndex] !== searchElement) {
    return -1;
  }
  return maxIndex;
}

console.log(binarySearch([1, 2, 3, 4], 3)); // 2
