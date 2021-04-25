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
  if (!root) return 0;

  let page = findDown(root, sum);

  let leftSum = pathSum(root.left, sum);
  let rightSum = pathSum(root.right, sum);

  return page + leftSum + rightSum;

  function findDown(node, sum) {
    if (!node) return 0;

    let flag = node.val == sum ? 1 : 0;

    let leftSum = findDown(node.left, sum - node.val);
    let rightSum = findDown(node.right, sum - node.val);

    return flag + leftSum + rightSum;
  }
};
