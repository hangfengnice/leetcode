/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.data = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.data.push(val);
  if (this.data.length >= this.size) {
    this.data.shift();
  }
  return this.data.reduce((a, b) => a + b, 0) / this.data.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
