var getIntersectionNode = function (headA, headB) {
  let ha = headA,
    hb = headB;
  while (ha != hb) {
    ha = ha ? ha.next : headB;
    hb = hb ? hb.next : headA;
  }
  return ha;
};

// 暴力法
var getIntersectionNode = function (headA, headB) {
  let ha = headA;
  while (ha) {
    let hb = headB;
    while (hb) {
      if (ha == hb) return ha;
      hb = hb.next;
    }
    ha = ha.next;
  }
};

// 哈希表
var getIntersectionNode = function (headA, headB) {
  let set = new Set(),
    ha = headA,
    hb = headB;
  while (ha) {
    set.add(ha);
    ha = ha.next;
  }
  while (hb) {
    if (set.has(hb)) return hb;
    hb = hb.next;
  }
};
