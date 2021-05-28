var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  } else if (p == null || q == null) {
    return false;
  } else if (p.val != q.val) {
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};

// bfs

var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  } else if (p == null || q == null) {
    return false;
  }

  let queue1 = [p];
  let queue2 = [q];

  while (queue1.length && queue2.length) {
    let node1 = queue1.shift();
    let node2 = queue2.shift();

    if (node1.val != node2.val) {
      return false;
    }

    let left1 = node1.left,
      right1 = node1.right,
      left2 = node2.left,
      right2 = node2.right;

    if ((left1 == null) ^ (left2 == null)) {
      return false;
    }
    if ((right1 == null) ^ (right2 == null)) {
      return false;
    }

    if (left1 != null) {
      queue1.offer(left1);
    }
    if (right1 != null) {
      queue1.offer(right1);
    }
    if (left2 != null) {
      queue2.offer(left2);
    }
    if (right2 != null) {
      queue2.offer(right2);
    }
  }
  return !queue1.length && !queue2.length;
};
