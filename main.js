var backspaceCompare = function (S, T) {
  s = S.split("");
  t = T.split("");
  let s1 = [],
    t1 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "#") {
      s1.push(s[i]);
    } else if (s1.length) {
      s1.pop();
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] != "#") {
      t1.push(t[i]);
    } else if (t1.length) {
      t1.pop();
    }
  }
  return s1.join("") == t1.join("");
};
