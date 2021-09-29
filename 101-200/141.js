var hasCycle = function (head) {
  if (!head) return null;
  let slow = head,
    fast = head;

  while (fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }

    if (slow === fast) {
      let ptr = head;
      while (ptr !== slow) {
        slow = slow.next;
        ptr = ptr.next;
      }
      return ptr;
    }
  }
  return null;
};
