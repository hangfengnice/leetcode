var reverse = function (x) {
  let rev = 0;
  let min = Math.pow(-2, 31);
  let max = Math.pow(2, 31) - 1;
  while (x) {
    const digit = x % 10;
    x = ~~(x / 10);
    rev = rev * 10 + digit;
    if (rev < min || rev > max) {
      return 0;
    }
  }
  return rev;
};
