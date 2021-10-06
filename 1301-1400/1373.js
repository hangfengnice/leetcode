var maxSumBST = function (root) {
  let maxSum = 0;
  traverse(root);
  return maxSum;

  function traverse(root) {
    if (!root) {
      return [1, Infinity, -Infinity, 0];
    }
    let left = traverse(root.left);
    let right = traverse(root.right);

    let res = [0];

    if (
      left[0] === 1 &&
      right[0] === 1 &&
      root.val > left[2] &&
      root.val < right[1]
    ) {
      res[0] = 1;
      res[1] = Math.min(root.val, left[1]);
      res[2] = Math.max(root.val, right[2]);
      res[3] = root.val + left[3] + right[3];
      maxSum = Math.max(res[3], maxSum);
    }
    return res;
  }
};
