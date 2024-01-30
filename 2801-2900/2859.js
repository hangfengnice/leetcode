var sumIndicesWithKSetBits = function (nums, k) {
  const bitCount = function (x) {
    let cnt = 0

    while (x) {
      cnt += x % 2
      x >>= 1
    }
    return cnt
  }

  let ans = 0

  for (let i = 0; i < nums.length; i++) {
    if (bitCount(i) == k) {
      ans += nums[i]
    }
  }
  return ans
}
