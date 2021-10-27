var AllOne = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  this.map.set(key, (this.map.get(key) || 0) + 1);
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  let val = this.map.get(key);
  val--;
  if (val > 0) {
    this.map.set(key, val);
  } else {
    this.map.delete(key);
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  let maxKey,
    maxVal = -Infinity;
  for (let [key, val] of this.map) {
    if (maxVal < val) {
      maxKey = key;
      maxVal = val;
    }
  }
  return maxKey;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  let minKey,
    minVal = Infinity;
  for (let [key, val] of this.map) {
    if (minVal > val) {
      minKey = key;
      minVal = val;
    }
  }
  return minKey;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
