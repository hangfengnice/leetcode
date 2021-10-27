var plusOne = function (head) {
  let newHead = reverse(head);

  let val = newHead.val + 1;
  newHead.val = val % 10;
  let carry = (val / 10) >> 0;
  let cur = newHead;
  while (cur.next) {
    let val = cur.next.val + carry;
    cur.next.val = val % 10;
    carry = (val / 10) >> 0;
    cur = cur.next;
  }
  if (carry) {
    cur.next = new ListNode(1);
  }

  return reverse(newHead);

  function reverse(head) {
    let prev = null;
    let cur = head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }
};

// 运用哨兵
var plusOne = function (head) {
  let sentinel = new ListNode(0, head);
  let notNine = sentinel;

  while (head) {
    if (head.val !== 9) notNine = head;
    head = head.next;
  }
  notNine.val++;
  notNine = notNine.next;
  while (notNine) {
    notNine.val = 0;
    notNine = notNine.next;
  }
  return notNine.val === 0 ? notNine.next : notNine;
};
