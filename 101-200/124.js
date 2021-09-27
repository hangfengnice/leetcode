var maxPathSum = function (root) {
  let maxSum = Number.MIN_VALUE;
  maxGain(root);
  return maxSum;

  function maxGain(node) {
    if (!node) {
      return 0;
    }

    let leftGain = Math.max(0, maxGain(node.left));
    let rightGain = Math.max(0, maxGain(node.right));

    let priceNewPath = node.val + leftGain + rightGain;

    maxSum = Math.max(priceNewPath, maxSum);

    return node.val + Math.max(leftGain, rightGain);
  }
};
