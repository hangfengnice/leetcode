var deleteDuplicates = function(head) {
  let pre = head
  while(head) {
    if (head.next.val == head.val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }
  return pre
};
