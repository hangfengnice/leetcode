var numberOfBoomerangs = function (points) {
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    let a = points[i];

    let map = {};
    for (let j = 0; j < points.length; j++) {
      let b = points[j];
      if (j != i) {
        const dis = getDis(a, b);
        map[dis] = (map[dis] || 0) + 1;
      }
    }
    for (let dis in map) {
      let num = map[dis];
      if (num > 1) count += num * (num - 1);
    }
  }
  return count;

  function getDis([x1, y1], [x2, y2]) {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2;
  }
};

let res = numberOfBoomerangs([
  [0, 0],
  [1, 0],
  [2, 0],
]);

console.log(res);
