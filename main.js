var Solution = function(nums) {
  this.nums = nums;
  this.original = nums.slice();

};

Solution.prototype.reset = function() {
  this.nums = this.original.slice();
  return this.nums;
};

Solution.prototype.shuffle = function() {
  const shuffled = new Array(this.nums.length).fill(0);
  const list = [];
  this.nums.forEach((num) => list.push(num));
  for (let i = 0; i < this.nums.length; ++i) {
      const j = Math.random() * list.length;
      shuffled[i] = list.splice(j, 1);
  }
  this.nums = shuffled.slice();
  return this.nums;
};
