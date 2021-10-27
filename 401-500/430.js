// [扁平化多级双向链表](https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/solution/bian-ping-hua-duo-ji-shuang-xiang-lian-biao-by-lee/)

var flatten = function (head) {
  if (head === null) return head;
  let pseudoHead = new Node(0, null, head, null);

  let curr = null;
  let prev = pseudoHead;

  let stack = [head];

  while (stack.length) {
    curr = stack.pop();

    prev.next = curr;

    curr.prev = prev;

    if (curr.next) stack.push(curr.next);
    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }
    prev = curr;
  }

  pseudoHead.next.prev = null;

  return pseudoHead.next;
};

// 栈解
var flatten = function (head) {
  let node = head;
  let prev = null;
  let stack = [];

  while (node || stack.length) {
    if (node === null) {
      node = stack.pop();
      node.prev = prev;
      prev.next = node;
    }
    if (node.child !== null) {
      if (node.next !== null) stack.push(node.next);
      node.child.prev = node;
      node.next = node.child;
      node.child = null;
    }
    prev = node;
    node = node.next;
  }
  return head;
};
