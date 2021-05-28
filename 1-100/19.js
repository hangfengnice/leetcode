var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode()
  dummy.next = head

  let slow = dummy
  let fast = head
  for(let i = 0; i < n; i ++) {
    fast = fast.next
  }

  while(fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
};
