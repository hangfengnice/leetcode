var hammingWeight = function (n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      count++;
    }
  }
  return count;
};

// 优化小技巧

// n & (n−1)，其预算结果恰为把
// n 的二进制位中的最低位的
// 1
// 1 变为
// 0
// 0 之后的结果
var hammingWeight = function (n) {
  let ret = 0
  while(n) {
    n &= n - 1
    ret ++
  }
  return ret
}
