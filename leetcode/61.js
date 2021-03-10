var rotateRight = function(head, k) {
  if (!head) return null
  if (!head.next) return head
  let oldTail = head

  let n
  for( n = 1; oldTail.next ; n ++) {
    oldTail = oldTail.next
  }
  oldTail.next = head

  let newTail = head

  for(let i = 0; i < n - k % n - 1; i ++) {
    newTail = newTail.next
  }
  let newHead = newTail.next
  newTail.next = null
  return newHead
};
