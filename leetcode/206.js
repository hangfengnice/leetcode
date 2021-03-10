var reverseList = function(head) {
  let prev = null
  let cur = head
  while(cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};


1 -> 2 -> 3

var reverseList = function(head) {
  if (!head || !head.next) return head
  let newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
};
