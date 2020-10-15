var connect = function (root) {
  if (!root) return null;
  let queue = [root];

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i < size - 1) {
        node.next = queue[0];
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return root
};
