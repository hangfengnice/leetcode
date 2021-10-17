/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
  this.head = head
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  var loopNode = this.head, i = 0
  var target
  while(loopNode) {
    i ++
    var prob = 1 / i

    var random = Math.random()
    if (random < prob) {
      target = loopNode
    }
    loopNode = loopNode.next
  }
  return target.val
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
