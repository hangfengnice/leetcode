var fib = function (N) {
  if (N <= 1) return N;
  if (N == 2) return 1;
  let cur = 0, prev1 = 1, prev2 = 1
  for (let i = 3; i <= N; i++) {
    cur = prev1 + prev2
    prev2 = prev1
    prev1 = cur
  }
  return cur;
};

let res = fib(3);

console.log(res);
