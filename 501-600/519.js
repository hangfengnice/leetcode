/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function (m, n) {
  this.m = m;
  this.n = n;
  this.total = m * n;
  this.map = new Map();
};v a

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
  const x = Math.floor(Math.random() * this.total);
  this.total--;
  const idx = this.map.get(x) || x;
  this.map.set(x, this.map.get(this.total) || this.total);
  return [Math.floor(idx / this.n), idx % this.n];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
  this.total = this.m * this.n;
  this.map.clear();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
