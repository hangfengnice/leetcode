var oddEvenList = function (head) {
  if (!head) return head;
  let even = head.next;
  let evenHead = even;
  let odd = head;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
