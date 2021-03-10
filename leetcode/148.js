var sortList = function (head) {
  if (!head) return head;
  let dummy = new ListNode();
  dummy.next = head;

  let lastSorted = head,
    cur = head.next;
  while (cur) {
    if (lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = dummy;
      while (prev.next.val <= cur.val) {
        prev = prev.next;
      }
      lastSorted.next = cur.next;
      cur.next = prev.next;
      prev.next = cur;
    }
    cur = lastSorted.next;
  }
  return dummy.next;
};


// 2 3 1
var sortList = function(head) {
  return toSortList(head, null);

  function toSortList(head, tail) {
    if (!head) return head
    if (head.next === tail) {
      head.next = null
      return head
    }
    let slow = head, fast = head
    while(fast !== tail) {
      slow = slow.next
      fast = fast.next
      if (fast !== tail) {
        fast = fast.next
      }
    }
    const mid = slow
    return merge(toSortList(head, mid), toSortList(mid, tail))
  }
  function merge(head1, head2) {
    let dummy = new ListNode()
    let temp = dummy, temp1 = head1, temp2 = head2
    while(temp1 && temp2) {
      if (temp1.val <= temp2.val) {
        temp.next = temp1
        temp1 = temp1.next
      } else {
        temp.next = temp2
        temp2 = temp2.next
      }
      temp = temp.next
    }
    if (temp1) {
      temp.next = temp1
    } else if (temp2) {
      temp.next = temp2
    }
    return dummy.next
  }

};
