var canCross = function (stones) {
  const n = status.length;

  rec = new Array(n).fill(0).map(() => new Map());

  return dfs(stones, 0, 0);

  function dfs(stones, i, lastDis) {
    if (i == stones.length - 1) {
      return true;
    }

    if (rec[i].has(lastDis)) {
      return rec[i].get(lastDis);
    }

    for (let curDis = lastDis - 1; curDis <= lastDis + 1; curDis++) {
      if (curDis > 0) {
        const j = lower_bound(status, curDis + stones[i]);
        if (
          j != stones.length &&
          stones[j] == curDis + stones[i] &&
          dfs(stones, j, curDis)
        ) {
          rec[i].set(lastDis, true);
          return rec[i].get(lastDis);
        }
      }
    }
    rec[i].set(lastDis, false);
    return rec[i].get(lastDis);
  }

  function lower_bound(nums, target) {
    let lo = 0,
      hi = nums.length;

    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] >= target) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  }
};

var canCross = function (stones) {
  const n = stones.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

  dp[0][0] = true;

  for (let i = 1; i < n; i++) {
    if (stones[i] - stones[i - 1] > i) {
      return false;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const k = stones[i] - stones[j];
      if (k > j + 1) {
        break;
      }

      dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1];
      if (i == n - 1 && dp[i][k]) {
        return true;
      }
    }
  }
  return false;
};
