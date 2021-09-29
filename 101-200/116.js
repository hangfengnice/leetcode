var connect = function (root) {
  if (!root) return root;
  const Q = [root];

  while (Q.length) {
    const size = Q.length;
    for (let i = 0; i < size; i++) {
      const node = Q.shift();
      if (i < size - 1) {
        node.next = Q[0];
      }
      if (node.left) {
        Q.push(node.left);
      }
      if (node.right) {
        Q.push(node.right);
      }
    }
  }
  return root;
};

//
var conncet = function (root) {
  if (!root) return root;

  let leftmost = root;

  while (leftmost) {
    let head = leftmost;

    while (head) {
      head.left.next = head.right;

      if (head.next) {
        head.right.next = head.next.left;
      }

      head = head.next;
    }
    leftmost = leftmost.next;
  }
  return root;
};

// 递归
var connect = function (root) {
  if (!root) return root;
  connectTwo(root.left, root.right);
  return root;

  function connectTwo(left, right) {
    if (!left) return left;
    left.next = right;

    connectTwo(left.left, left.right);
    connectTwo(right.left, right.right);
    connectTwo(left.right, right.left);
  }
};
