var isIsomorphic = function(s, t) {
  if (s.length != t.length) return false
  let set = new Set()
  for(let i = 0; i < s.length; i ++) {
    set.add(s[i] + t[i])
  }

  let len = new Set(set).size
  return len == new Set(s).size && len == new Set(t).size
};

let res = isIsomorphic('eg1', 'add')

console.log(res);
