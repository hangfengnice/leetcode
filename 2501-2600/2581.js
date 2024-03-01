var validPartition = function (nums) {
  const n = nums.length

  const dp = new Array(n + 1).fill(false)

  dp[0] = true

  for (let i = 2; i <= n; i++) {
    if (i >= 2) {
      dp[i] = dp[i - 2] && nums[i - 2] === nums[i - 1]
    }

    if (i >= 3) {
      dp[i] =
        dp[i] ||
        (dp[i - 3] && validThree(nums[i - 3], nums[i - 2], nums[i - 1]))
    }
  }
  return dp[n]

  function validThree(num1, num2, num3) {
    return (
      (num1 == num2 && num1 == num3) || (num1 + 1 === num2 && num2 + 1 == num3)
    )
  }
}
