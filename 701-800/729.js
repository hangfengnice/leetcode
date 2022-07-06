var MyCalendar = function() {
  this.booked = [];
};

MyCalendar.prototype.book = function(start, end) {
  for (const arr of this.booked) {
      let l = arr[0], r = arr[1];
      if (l < end && start < r) {
          return false;
      }
  }
  this.booked.push([start, end]);
  return true;
};


// 线段树
var MyCalendar = function () {
  this.tree = new Set()
  this.lazy = new Set()
}
MyCalendar.prototype.book = function (start, end) {
  if (this.query(start, end - 1, 0, 1000000000, 1)) {
    return false
  }
  this.update(start, end - 1, 0, 1000000000, 1)
  return true
}

MyCalendar.prototype.query = function (start, end, l, r, idx) {
  if (start > r || end < l) {
    return false
  }
  if (this.lazy.has(idx)) {
    return true
  }
}
