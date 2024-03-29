var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1);

  let ans = 0;
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      ans++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  return ans;
};
