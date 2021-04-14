/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.cur = root;
  this.stack = [];
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  while (this.cur) {
    this.stack.push(this.cur);
    this.cur = this.cur.left;
  }
  this.cur = this.stack.pop();

  let ret = this.cur.val;

  this.cur = this.cur.right;

  return ret;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.cur || this.stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
