var Solution = function (n, blacklist) {
  const b2w = new Map();
  const m = blacklist.length;
  let bound = n - m;
  const black = new Set();
  for (const b of blacklist) {
    if (b >= bound) {
      black.add(b);
    }
  }

  const w = bound;
  for (const b of blacklist) {
    if (b < bound) {
      while (black.has(w)) {
        ++w;
      }
      b2w.set(b, w);
      w++;
    }
  }

  this.bound = bound;
  this.b2w = b2w;
};

Solution.prototype.pick = function () {
  const x = Math.floor(Math.random() * this.bound);
  return this.b2w.get(x) || x;
};
