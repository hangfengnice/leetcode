var guessNumber = function (n) {
  let low = 1,
    high = n;

  while (low <= high) {
    let mid = (low + high) >> 1;
    let res = guess(mid);

    if (res == 0) {
      return mid;
    } else if (res < 0) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
