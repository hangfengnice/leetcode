var MaxStack = function () {
  this.stack = [];
  this.maxStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  let { stack, maxStack } = this;
  let max = maxStack.length > 0 ? maxStack[maxStack.length - 1] : x;
  maxStack.push(max > x ? max : x);
  stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  let { stack, maxStack } = this;
  maxStack.pop();
  return stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  let { stack } = this;
  return stack[stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  let { maxStack } = this;
  return maxStack[maxStack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  let max = this.peekMax();

  let buffer = [];
  while (this.top() !== max) buffer.push(this.pop());
  this.pop();
  while (buffer.length) this.push(buffer.pop());
  return max;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
