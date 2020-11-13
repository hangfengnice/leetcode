var oddEvenList = function (head) {
  if (!head) return null;
  let evenHead = head.next;
  let odd = head,
    even = evenHead;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
