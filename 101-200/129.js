var sumNumbers = function (root) {
  let queue = [root];
  let res = [];
  let paths = [root.val.toString()];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.pop();
      let path = paths.pop();

      if (!node.left && !node.right) {
        res.push(path);
        continue;
      }

      if (node.left) {
        queue.unshift(node.left);
        paths.unshift(path + node.left.val);
      }

      if (node.right) {
        queue.unshift(node.right);
        paths.unshift([path + node.right.val]);
      }
    }
  }
  return res.reduce((a, b) => a + +b, 0);
};

var sumNumbers = function (root) {
  return dfs(root, 0);

  function dfs(root, prev) {
    if (!root) return 0;

    let sum = prev * 10 + root.val;

    if (!root.left && !root.right) {
      return sum;
    } else {
      return dfs(root.left, sum) + dfs(root.right, sum);
    }
  }
};

var sumNumbers = function (root) {
  if (!root) return 0;

  let sum = 0;

  let queue = [root];
  let sumqueue = [root.val];

  while (queue.length) {
    let node = queue.pop();
    let num = sumqueue.pop();

    if (!node.left && !node.right) {
      sum += num;
    } else {
      if (node.left) {
        queue.unshift(node.left);
        sumqueue.unshift(num * 10 + node.left.val);
      }
      if (node.right) {
        queue.unshift(node.right);
        sumqueue.unshift(num * 10 + node.right.val);
      }
    }
  }

  return sum;
};
