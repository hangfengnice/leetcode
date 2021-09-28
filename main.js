var networkDelayTime = function (times, n, k) {
  const INF = Number.MAX_SAFE_INTEGER;

  const g = new Array(n).fill(0).map(() => new Array(n).fill(INF));

  for (let t of times) {
    let x = t[0] - 1,
      y = t[1] - 1;
    g[x][y] = t[2];
  }

  const dist = new Array(n).fill(INF);

  dist[k - 1] = 0;

  const used = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    let x = -1;
    for (let y = 0; y < n; y++) {
      if (!used[y] && (x === -1 || dist[y] < dist[x])) {
        x = y;
      }
    }
    used[x] = true;
    for (let y = 0; y < n; y++) {
      dist[y] = Math.min(dist[y], g[x][y] + dist[x]);
    }
  }
  let ans = Math.max(...dist);

  return ans === INF ? -1 : ans;
};

var pathSum = function (root, targetSum) {
  if (!root) return 0;

  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;

  function rootSum(root, targetSum) {
    let ret = 0;
    if (!root) return 0;
    const val = root.val;
    if (val === targetSum) ret++;

    ret += rootSum(root.left, targetSum - val);
    ret += rootSum(root.right, targetSum - val);
    return ret;
  }
};
