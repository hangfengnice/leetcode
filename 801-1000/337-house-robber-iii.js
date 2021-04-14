// 递归
var rob = function (root) {
  if (!root) return 0;
  let money = root.val;
  if (root.left) {
    money += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    money += rob(root.right.left) + rob(root.right.right);
  }
  return Math.max(money, rob(root.left) + rob(root.right));
};

// 递归 备忘录
var rob = function (root) {
  let map = new Map();
  return dfs(root);
  function dfs(root) {
    if (!root) return 0;
    if (map.has(root)) return map.get(root);
    let money = root.val;
    if (root.left) {
      money += dfs(root.left.left) + dfs(root.left.right);
    }
    if (root.right) {
      money += dfs(root.right.left) + dfs(root.right.right);
    }
    let res = Math.max(money, dfs(root.left) + dfs(root.right));
    map.set(root, res);
    return res;
  }
};

// 树形dp
var rob = function (root) {
  const dp = new Map();
  return Math.max(...dfs(root));

  function dfs(root) {
    if (!root) return [0, 0];
    const left = dfs(root.left);
    const right = dfs(root.right);
    if (!dp.has(root)) dp.set(root, [0, 0]);
    const res = dp.get(root);
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = root.val + left[0] + right[0];
    return res;
  }
};

// 优化
var rob = function (root) {
  return Math.max(...dfs(root));

  function dfs(root) {
    if (!root) return [0, 0];
    const left = dfs(root.left);
    const right = dfs(root.right);
    let res = [];
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = root.val + left[0] + right[0];
    return res;
  }
};
