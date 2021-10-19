var minAddToMakeValid = function (s) {
  let n = s.length;
  let stack = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        count++;
      }
    }
  }
  return count + stack.length;
};
