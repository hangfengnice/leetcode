/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.queue = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.queue.push(val);
  let sum = 0;
  for (let i = Math.max(0, this.queue.length - this.size); i < this.size; i++) {
    sum += this.queue[i];
  }
  return sum / Math.min(this.size, this.queue.size);
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

// 双端队列
var MovingAverage = function (size) {
  this.size = size;
  this.sum = 0;
  this.count = 0;
  this.queue = [];
};

MovingAverage.prototype.next = function (val) {
  this.count++;
  this.queue.push(val);
  let tail = this.count > this.size ? this.queue.shift() : 0;
  this.sum = this.sum + val - tail;
  return this.sum / this.queue.length;
};

// 循环队列
var MovingAverage = function (size) {
  this.size = size;
  this.count = 0;
  this.queue = new Array(size).fill(0);
  this.sum = 0;
};

MovingAverage.prototype.next = function (val) {
  this.count++;
  this.sum = this.sum + val - this.queue[this.count % this.size];
  this.queue[this.count % this.size] = val;
  return this.sum / Math.min(this.size, this.count);
};
