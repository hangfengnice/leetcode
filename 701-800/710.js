// var Solution = function (n, blacklist) {
//   const b2w = new Map();
//   const m = blacklist.length;
//   let bound = n - m;
//   const black = new Set();
//   for (const b of blacklist) {
//     if (b >= bound) {
//       black.add(b);
//     }
//   }

//   const w = bound;
//   for (const b of blacklist) {
//     if (b < bound) {
//       while (black.has(w)) {
//         ++w;
//       }
//       b2w.set(b, w);
//       w++;
//     }
//   }

//   this.bound = bound;
//   this.b2w = b2w;
// };

// Solution.prototype.pick = function () {
//   const x = Math.floor(Math.random() * this.bound);
//   return this.b2w.get(x) || x;
// };

// 前缀和 + 二分

var Solution = function (n, blacklist) {
  let list = [];
  let sum = [0];
  blacklist.sort((a, b) => a - b);

  let m = blacklist.length;

  if (m === 0) {
    list.push([0, n - 1]);
  } else {
    if (blacklist[0] !== 0) list.push([0, blacklist[0] - 1]);

    for (let i = 1; i < m; i++) {
      if (blacklist[i - 1] === blacklist[i] - 1) continue;
      list.push([blacklist[i - 1] + 1, blacklist[i] - 1]);
    }

    if (blacklist[m - 1] !== n - 1) list.push([blacklist[m - 1] + 1, n - 1]);
  }
  let sz = list.length;

  for (let i = 1; i <= sz; i++) {
    let info = list[i - 1];
    sum[i] = sum[i - 1] + info[1] - info[0] + 1;
  }

  this.sz = sz;
  this.sum = sum;
  this.list = list;
};

Solution.prototype.pick = function () {
  let { sz, sum, list } = this;
  let val = Math.floor(Math.random() * sz) + 1;

  let l = 1,
    r = sz;

  while (l < r) {
    let mid = Math.floor((l + r) >> 1);
    if (sum[mid] >= val) r = mid;
    else l = mid + 1;
  }

  let info = list[r - 1];

  let a = info[0];
  let b = info[1];

  let n = b - a + 1;

  return a + Math.floor(Math.random() * n);
};

// console.log(s, "s");
