var makeGood = function (s) {
  let stack = [s[0]],
    capital = /[A-Z]/,
    small = /[a-z]/;
  for (let i = 1; i < s.length; i++) {
    let cur = s[i];

    // console.log(cur, stack, 'stack');
    if (small.test(cur)) {
      if (stack.length && capital.test(stack[stack.length - 1]) && stack[stack.length - 1].toLowerCase() === cur) {
        stack.pop();
      } else {
        stack.push(cur);
      }
    } else if (capital.test(cur)) {
      if (stack.length && small.test(stack[stack.length - 1]) && stack[stack.length - 1].toUpperCase() === cur) {
        stack.pop();
      } else {
        stack.push(cur);
      }
    }
  }
  return stack.join("");
};

let res = makeGood("leEeetcode")
console.log(res, 'res');

// 一次循环
var makeGood = function (s) {
  let stack = []

}
