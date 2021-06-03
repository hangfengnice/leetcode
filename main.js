var isPalindrome = function (head) {
  if (!head || !head.next) return head;

  let vals = [];

  while (head) {
    vals.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = vals.length - 1; i < j; i++, j--) {
    if (vals[i] != vals[j]) {
      return false;
    }
  }
};

var isPalindrome = function (head) {
  let frontPointer = head;
  return recursivelyCheck(head);

  function recursivelyCheck(currenNode) {
    if (currenNode !== null) {
      if (!recursivelyCheck(currenNode.next)) {
        return false;
      }
      if (currenNode.val !== frontPointer.val) {
        return false;
      }
      frontPointer = frontPointer.next;
    }
    return true;
  }
};

[1, 2, 3] 4
