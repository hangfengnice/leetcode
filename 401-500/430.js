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
