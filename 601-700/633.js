var judgeSquareSum = function (c) {
  for (let i = 0; i * i <= c; i++) {
    const b = Math.sqrt(c - i * i);
    if (b == parseInt(b)) {
      return true;
    }
  }
  return false;
};

var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;

    if (sum == c) {
      return true;
    } else if (sum > c) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};
