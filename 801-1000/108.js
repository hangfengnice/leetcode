var sortedArrayToBST = function (nums) {
  return dfs(nums, 0, nums.length - 1);
  function dfs(nums, left, right) {
    if (left > right) return null;

    let mid = Math.floor((right - left) / 2) + left;

    let root = new TreeNode(nums[mid]);

    root.left = dfs(nums, left, mid - 1);
    root.right = dfs(nums, mid + 1, right);

    return root;
  }
};
