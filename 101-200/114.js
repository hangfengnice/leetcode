var flatten = function (root) {
  if (!root) return root;
  let stack = [root];

  let prev = null;

  while (stack.length) {
    const curr = stack.pop();

    if (prev) {
      prev.left = null;
      prev.right = curr;
    }
    const left = curr.left,
      right = curr.right;
    if (right) stack.push(right);

    if (left) stack.push(left);

    prev = curr;
  }
};

var flatten = function (root) {
  let curr = root;
  while (curr) {
    if (curr.left) {
      const next = curr.left;
      let predecessor = curr.left;
      while (predecessor.right) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};
