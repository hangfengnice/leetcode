var addTwoNumbers = function (l1, l2) {
  var stack1 = [];
  var stack2 = [];

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
    let n1 = stack1.length ? stack1.pop()[0] : 0;
    let n2 = stack2.length ? stack2.pop()[0] : 0;
    let sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);

    let curNode = new ListNode(sum % 10);

    curNode.next = ans;
    ans = curNode;
  }
  return ans;
};
