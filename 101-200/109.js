var sortedListToBST = function(head) {
  return buildTree(head, null)

  function buildTree(left, right) {
    if (left === right) return null

    let mid = getMedian(left, right)

    let root = new TreeNode(mid.val)
    root.left = buildTree(left, mid)
    root.right = buildTree(mid.next, right)
    return root
  }

  function getMedian(left, right) {
    let fast = left
    let slow = left
    while(fast !== right && fast.next !== right) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }
};

var sortedListToBST = function () {

}
