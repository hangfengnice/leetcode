var recoverTree = function (root) {
  const nums = [];
  inorder(root, nums);
  const [first, second] = findTwoSwapped(nums);
  recover(root, 2, first, second);

  function inorder(root, nums) {
    if (!!root) {
      inorder(root.left, nums);
      nums.push(root.val);
      inorder(root.right, nums);
    }
  }

  function findTwoSwapped(nums) {
    const n = nums.length;
    let index1 = -1,
      index2 = -1;
    for (let i = 0; i < n - 1; i++) {
      if (nums[i + 1] < nums[i]) {
        index2 = i + 1;
        if (index1 === -1) {
          index1 = i;
        } else {
          break;
        }
      }
    }
    let x = nums[index1],
      y = nums[index2];
    return [x, y];
  }

  function recover(r, count, x, y) {
    if (!!r) {
      if (r.val === x || r.val === y) {
        r.val = r.val === x ? y : x;
        if (--count === 0) {
          return;
        }
      }
      recover(r.left, count, x, y);
      recover(r.right, count, x, y);
    }
  }
};

// 隐式中序遍历
var recoverTree = function (root) {
  const stack = [];
  let x = null,
    y = null,
    pred = null;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    if (pred && root.val < pred.val) {
      y = root;
      if (x === null) {
        x = pred;
      } else {
        break;
      }
    }
    pred = root;
    root = root.right;
  }
  let temp = x.val;
  x.val = y.val;
  y.val = temp;
};
