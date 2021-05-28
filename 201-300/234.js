var isPalindrome = function (head) {
  frontPointer = head;
  return recursivelyCheck(head);
  function recursivelyCheck(currentNode) {
    if (currentNode) {
      if (!recursivelyCheck(currentNode.next)) {
        return false;
      }
      if (currentNode.val !== frontPointer.val) {
        return false;
      }
      frontPointer = frontPointer.next;
    }
    return true;
  }
};

// 1 2 1 2 1

var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    if (slow.val !== prev.val) {
      return false;
    }
    slow = slow.next;
    prev = prev.next;
  }

  return true;
};
