var isValidBST = function (root) {
  let nums = [];
  dfs(root);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) return false;
  }
  return true;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    nums.push(root.val);
    dfs(root.right);
  }
};

var isValidBST = function (root) {
  let stack = [];

  let inorder = -Infinity;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
};
