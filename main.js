var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let pa = headA,
    pb = headB;

  while (pa !== pb) {
    pa = !pa ? headB : pa.next;
    pb = !pb ? headA : pb.next;
  }

  return pa;
};
