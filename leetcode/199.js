var rightSideView = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      let node = stack.pop();
      arr.push(node.val);

      if (node.left) {
        stack.unshift(node.left);
      }
      if (node.right) {
        stack.unshift(node.right);
      }
    }
    res.push(arr);
  }
  return res.map((item) => item.pop());
};

var rightSideView = function (root) {
  let res = [];
  if (!root) return res;
  dfs(root, 0, res);
  return res;

  function dfs(root, step, res) {
    if (root) {
      if (res.length == step) {
        res.push(root.val);
      }
      dfs(root.right, step + 1, res);
      dfs(root.left, step + 1, res);
    }
  }
};
