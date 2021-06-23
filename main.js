var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let ans = null;
  while (stack1.length || stack2.length || carry) {
    let a = stack1.length ? stack1.pop() : 0;
    let b = stack2.length ? stack2.pop() : 0;
    let cur = a + b + carry;
    carry = ~~(cur / 10);
    cur = cur % 10;

    let curNode = new ListNode(cur);
    curNode.next = ans;
    ans = curNode;
  }

  return ans;
};
