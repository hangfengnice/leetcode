var uniqueOccurrences = function (arr) {
  let map = new Map();
  for (let v of arr) {
    let count = map.get(v);
    map.has(v) ? map.set(v, count + 1) : map.set(v, 1);
  }
  let s = new Set(map.values());
  return s.size == map.size;
};

let result = uniqueOccurrences([1, 2, 2]);

console.log(result);
