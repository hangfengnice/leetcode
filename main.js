var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let a = headA,
    b = headB;

  while (a != b) {
    a = a == null ? b : a.next;
    b = b == null ? a : b.next;
  }
  return a;
};
