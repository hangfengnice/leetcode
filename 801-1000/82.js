var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let fast = dummy.next;
  let slow = dummy;
  while (fast) {
    while (fast.next && fast.val == fast.next.val) {
      fast = fast.next;
    }

    if (slow.next === fast) slow = slow.next;
    else slow.next = fast.next;

    fast = fast.next;
  }
  return dummy.next;
};

var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let fast = dummy.next;
  let slow = dummy;

  while (fast) {
    if (fast.next && fast.next.val == fast.val) {
      let sameVal = fast.val;
      while (fast && fast.val == sameVal) {
        fast = fast.next;
      }
    } else {
      slow.next = fast;
      slow = fast;
      fast = fast.next;
    }
  }
  return dummy.next;
};
