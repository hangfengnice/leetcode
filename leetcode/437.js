var pathSum = function (root, sum) {
  let ans = 0;
  let map = new Map();

  dfs(0, root);

  return ans;

  function dfs(presum, node) {
    if (!node) return 0;

    map.set(presum, (map.get(presum) || 0) + 1);

    let target = presum + node.val;

    ans += map.get(target - sum) || 0;

    dfs(target, node.left);
    dfs(target, node.right);

    map.set(presum, map.get(presum) - 1);
  }
};

var pathSum = function (root, sum) {

}
