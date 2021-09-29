var isPalindrome = function (head) {
  if (!head) return true;

  let firstHalfEnd = endOfFirstList(head);

  let secondHalfStart = reverseList(firstHalfEnd.next);

  let left = head,
    right = secondHalfStart,
    flag = true;

  while (right && flag) {
    if (left.val !== right.val) return false;
    right = right.next;
    left = left.next;
  }

  return true;

  function endOfFirstList(head) {
    let slow = (fast = head);
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  function reverseList(head) {
    let prev = null,
      cur = head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }
};
