// var insertionSortList = function (head) {
//   if (!head) return head;
//   let dummy = new ListNode(-1, head);
//   let lastSorted = head,
//     cur = head.next;
//   while (cur) {
//     if (lastSorted.val <= cur.val) {
//       lastSorted = lastSorted.next;
//     } else {
//       let prev = dummy;
//       while (prev.next.val <= cur.val) {
//         prev = prev.next;
//       }
//       lastSorted.next = cur.next;
//       cur.next = prev.next;
//       prev.next = cur;
//     }
//     cur = lastSorted.next;
//   }
//   return dummy.next;
// };

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  let map = new map();
  let cur = head;
  while (cur) {
    map.set(cur, { val: cur.val });
    cur = cur.next;
  }

  let cur = head;
  while (cur) {
    map.get(cur).next = map.get(cur.next);
    map.get(cur).random = map.get(cur.random);
    cur = cur.next;
  }
  return map.get(head);
};
