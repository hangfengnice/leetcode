let frontPointer


var isPalindrome = function (head) {
  frontPointer = head
  return recursivelyCheck(head)
  function recursivelyCheck(currentNode) {
    if (currentNode) {
      if (!recursivelyCheck(currentNode.next)) {
        return false
      }
      if (currentNode.val !== frontPointer.val) {
        return false
      }
      frontPointer = frontPointer.next
    }
    return true
  }
}
