var MyCalendarTwo = function () {
  this.booked = [];
  this.overlaps = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  let { booked, overlaps } = this;
  for (let [l, r] of overlaps) {
    if (l < end && r > start) {
      return false;
    }
  }
  for (let [l, r] of booked) {
    if (l < end && r > start) {
      overlaps.push([Math.max(l, start), Math.min(r, end)]);
    }
  }
  booked.push([start, end])
  return true
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
