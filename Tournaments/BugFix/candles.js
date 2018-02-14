function candles(candlesNumber, makeNew) {
  var burned = 0;
  var leftovers = 0;
  while (candlesNumber > 0) {
    burned += candlesNumber;
    leftovers += candlesNumber;
    candlesNumber = Math.floor(leftovers / makeNew);
    leftovers -= makeNew; // leftovers %= makeNew;
  }
  return burned;
}
