var partition = function (head, x) {
  let small = new ListNode();
  let smallHead = small;
  let large = new ListNode();
  let largeHead = large;
  while (head) {
    if (head.val < x) {
      smallHead.next = head;
      smallHead = smallHead.next;
    } else {
      largeHead.next = head;
      largeHead = largeHead.next;
    }
    head = head.next;
  }
  largeHead.next = null;
  smallHead.next = large.next;
  return small.next;
};
