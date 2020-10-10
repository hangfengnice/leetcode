var detectCycle = function (head) {
  let visited = new Set();

  while (head) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next;
  }
  return null;
};

// 快慢指针
var detectCycle = function (head) {
  if (!head) return null;
  let fast = head,
    slow = head;
  while (fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast == slow) {
      let ptr = head;
      while (ptr != slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};
