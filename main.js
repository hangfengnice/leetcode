var groupAnagrams = function (strs) {
  let map = new Map();
  for (let s of strs) {
    let array = Array.from(s);
    array.sort();
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : [];
    list.push(s);
    map.set(key, list);
  }
  return Array.from(map.values());
};

let m = new Map()
m.set('1', [1])
m.set('2', '2')
