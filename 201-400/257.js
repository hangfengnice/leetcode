var binaryTreePaths = function (root) {
  if (!root) return [];

  let queue = [root];
  let pathArr = [root.val.toString()];
  let res = [];

  while (queue.length) {
    let path = pathArr.pop();
    let node = queue.pop();

    if (!node.left && !node.right) {
      res.push(path);
    } else {
      if (node.left) {
        queue.unshift(node.left);

        pathArr.unshift(path + "->" + node.left.val);
      }

      if (node.right) {
        queue.unshift(node.right);

        pathArr.unshift(path + "->" + node.right.val);
      }
    }
  }
  return res;
};

var binaryTreePaths = function (root) {
  let paths = [];

  dfs(root, "");
  return paths;
  function dfs(root, path) {
    if (root) {
      path += root.val;

      if (!root.left && !root.right) {
        paths.push(path);
      } else {
        path += "->";
        dfs(root.left, path);
        dfs(root.right, path);
      }
    }
  }
};
