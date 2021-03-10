


var reverseKGroup = function (head, k) {
  let hair = new ListNode();
  hair.next = head;
  let pre = hair;

  while (head) {
    let tail = pre;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) return hair.next;
    }

    const nex = tail.next;
    [head, tail] = reverse(head, tail);

    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }
  return hair.next;

  function reverse(head, tail) {
    let prev = tail.next;
    let p = head;
    while (prev != tail) {
      const nex = p.next;
      p.next = prev;
      prev = p;
      p = nex;
    }
    return [tail, head];
  }
};


var reverseKGroup = function (head, k) {
  let cur = head
  let count = 0
  while(cur && count != k) {
    cur = cur.next
    count ++
  }
  if (count == k) {
    cur = reverseKGroup(cur, k)
    while(count != 0) {
      count --
      let temp = head.next
      head.next = cur
      cur = head
      head = temp
    }
    head = cur
  }

  return head

}


