var removeOuterParentheses = function (s) {
  let stack = [];
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      let index = stack.pop();
      if (!stack.length) {
        ret += s.slice(index + 1, i);
      }
    }
  }
  return ret;
};
