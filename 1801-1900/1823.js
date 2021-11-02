var findTheWinner = function (n, k) {
  if (n === 1) return 1;
  return ((f(n - 1, k) + k - 1) % n) + 1;
};
