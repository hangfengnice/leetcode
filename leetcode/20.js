var isValid = function (s) {
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  let reg = /[\(\[\{]/;

  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i])) {
      stack.push(s[i]);
    } else {
      let temp = stack.pop();
      if (map[temp] != s[i] ) return false;
    }
  }
  console.log(stack);

  return stack.length == 0;
};

let res = isValid("()")

console.log(res);
