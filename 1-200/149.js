const maxPoints = function (points) {
  let n = points.length
  if (n < 3) return n
  let result = 2
  for(let i = 0; i < n - 1; i ++) {
    let map = {}, dup = 1
    for(let j = i + 1; j < n; j ++) {
      let [[x1, y1], [x2, y2]] = [points[i], points[j]]
      if (x1 === x2 && y1 === y2) {
        dup ++
        continue
      }
      let key = (x1 - x2) / (y1 - y2)
      console.log(key)
      if (key === -Infinity) key = Infinity
      map[key] = (map[key] || 0) + 1
      console.log(map);
    }
    result = Math.max(result, Math.max(...Object.values(map)) + dup)
  }
  return result
};

let res = maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])
console.log(res);
