var mergeKLists = function(lists) {
  let ans
  for(let i = 0; i < lists.length; i ++) {
    ans = mergeTwoList(ans, lists[i])
  }
  return ans

  function mergeTwoList(a, b) {
    if(!a || !b) {
      return a ? a : b
    }

    let head = new ListNode()
    let tail = head, aPtr = a, bPtr = b
    while(aPtr && bPtr) {
      if (aPtr.val < bPtr.val) {
        tail.next = aPtr
        aPtr = aPtr.next
      } else {
        tail.next = bPtr
        bPtr = bPtr.next
      }
      tail = tail.next
    }
    tail.next = aPtr ? aPtr : bPtr
    return head.next
  }
};
