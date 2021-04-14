var countNodes = function (root) {
  if (!root) return 0;

  let level = 0;

  let node = root;
  while (node.left) {
    level++;
    node = node.left;
  }

  let low = 1 << level,
    high = (1 << (level + 1)) - 1;
  while (low < high) {
    const mid = Math.floor((high - low + 1) / 2) + low;
    if (exists(root, level, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return low;

  function exists(root, level, k) {
    let bits = 1 << (level - 1);

    let node = root;
    while (node && bits > 0) {
      if (!(bits & k)) {
        node = node.left;
      } else {
        node = node.right;
      }
      bits = bits >> 1;
    }
    return !!node;
  }
};

var countNodes = function (root) {
  if (!root) return;

  let left = countNodes(root.left);
  let right = countNodes(root.right);
  return left + right + 1;
};
