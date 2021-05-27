var isPerfectSquare = function (num) {
  if (num < 2) {
    return true;
  }
  let left = 2,
    right = num >> 1,
    mid,
    guess;
  while (left <= right) {
    mid = ((right - left) >> 1) + left;
    let guess = mid * mid;
    if (guess === num) {
      return true;
    } else if (guess > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
