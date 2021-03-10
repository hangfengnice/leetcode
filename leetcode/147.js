var insertionSortList = function (head) {
  if (!head) return head;
  let dummy = new ListNode();
  dummy.next = head;

  let lastSorted = head,
    cur = head.next;
  while (cur) {
    if (lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = dummy;
      while (prev.next.val <= cur.val) {
        pre = pre.next;
      }
      lastSorted.next = cur.next;
      cur.next = prev.next;
      prev.next = cur;
    }
    cur = lastSorted.next;
  }
  return dummy.next;
};
