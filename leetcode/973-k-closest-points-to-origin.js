var kClosest = function (points, K) {
  return points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])).slice(0, K)
}

let res = kClosest([[3,3],[5,-1],[-2,4]], 2)

console.log(res);
