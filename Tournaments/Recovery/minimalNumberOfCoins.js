function minimalNumberOfCoins(coins, price) {

  var result = 0;

  for (var i = coins.length - 1; i >= 0; i--) {
//    while (price >= coins[i]) {
//      price -= coins[i];
//      result += 1;
//    }
  }

  if (price) {
    return -1;
  }
  return result;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28)); // 6
