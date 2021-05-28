var isAnagram = function (s, t) {
  return (
    s.length == t.length &&
    s.split("").sort().join("") == t.split("").sort().join("")
  );
};

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let map = {}
  for(let p of s) {
    map[p] = map[p] ? map[p] + 1 : 1
  }

  for(let p of t) {
    let val = map[p]
    console.log(val);
    map[p] = val != undefined ? val - 1 : undefined
    if (map[p] == undefined || map[p] < 0) {
      return false
    }
  }
  return true
};

let res = isAnagram("aacc", "ccac");

console.log(res);
