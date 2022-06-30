var numPrimeArrangements = function (n) {
  const MOD = 1000000007;
  let numPrimes = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      numPrimes++;
    }
  }

  let res = 1;
  let m = n - numPrimes;

  while (numPrimes) {
    res = res % MOD;
    res *= numPrimes;
    numPrimes--;
  }
  while (m > 0) {
    res = res % MOD;
    res *= m;
    m--;
  }
  return res;

  function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};
