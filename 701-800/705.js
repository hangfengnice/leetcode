var MyHashSet = function() {
  this.BASE = 769
  this.data = new Array(769).fill(0).map(() => [])
};

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  let h = this.hash(key)
  let list = this.data[h]
  for(let elem of list) {
      if (elem === key) return
  }
  list.push(key)
};

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  let h = this.hash(key)
  let list = this.data[h]
  let index = list.indexOf(key)
  if (index >= 0) {
      list.splice(index, 1)
  }
};

/**
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  let h = this.hash(key)
  let list = this.data[h]
  return list.includes(key)
};

MyHashSet.prototype.hash = function(key) {
  return key % this.BASE
};

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/
