var swapPairs = function (head) {
  if (!head || !head.next) return head;

  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};


var swapPairs = function (head) {
  const dummyHead = new ListNode()
  dummyHead.next = head
  let temp = dummyHead
  while(temp.next && temp.next.next) {
    const node1 = temp.next
    const node2 = temp.next.next

    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  return dummyHead
}
