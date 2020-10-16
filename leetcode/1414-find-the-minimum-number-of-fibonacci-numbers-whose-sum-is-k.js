var findMinFibonacciNumbers = function (k) {
  let s1 = 1,
    s2 = 1;
  let fib = [1, 1];

  while (s1 + s2 <= k) {
    let cur = s1 + s2;
    fib.push(cur);
    s1 = s2;
    s2 = cur;
  }

  let ans = 0;
  for (let i = fib.length - 1; i >= 0; i--) {
    if (k >= fib[i]) {
      ans++;
      k -= fib[i];
    }
  }
  return ans;
};

// [1, 1, 2, 3, 5]

let result = findMinFibonacciNumbers(5);

console.log(result);
