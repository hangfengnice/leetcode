var levelOrder = function (root) {
  if (!root) return [];
  const res = [],
    queue = [root];

  while (queue.length) {
    const temp = [];
    let count = queue.length;

    while (count--) {
      const root = queue.shift();
      temp.push(root.val);

      for (let i = 0; i < root.children.length; i++) {
        queue.push(root.children[i]);
      }
    }

    res.push(temp.slice());
  }
  return res;
};
