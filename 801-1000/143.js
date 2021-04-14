var reorderList = function (head) {
  if (!head) return head;
  let list = [];
  let node = head;
  while (node) {
    list.push(node);
    node = node.next;
  }
  let i = 0,
    j = list.length;
  while (i < j) {
    list[i].next = list[j];
    i++;
    if (i == j) break;
    list[j].next = list[i];
    j--;
  }
  list[i].next = null;
};
