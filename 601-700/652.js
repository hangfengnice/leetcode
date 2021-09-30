var findDuplicateSubtrees = function (root) {
  let count = new Map();
  let ans = [];
  collect(root);
  return ans;

  function collect(node) {
    if (!node) return "#";
    let serial =
      node.val + "," + collect(node.left) + "," + collect(node.right);

    count.set(serial, (count.get(serial) || 0) + 1);
    if (count.get(serial) === 2) {
      ans.push(node);
    }
    return serial;
  }
};
