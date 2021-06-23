var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy


  for(let i = 0; i < n; i ++) {
    fast = fast.next
  }

  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next


};
