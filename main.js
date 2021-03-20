var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  console.log(dp);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  console.log(dp)
  return dp[amount] > amount ? -1 : dp[amount];
};

let res = coinChange([1, 2, 5], 11)

console.log(res);
