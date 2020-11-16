var removeKdigits = function (num, k) {
  let stack = [];

  for (let digit of num) {
    while (stack.length && stack[stack.length - 1] > digit && k) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  for(; k > 0; k --) {
    stack.pop()
  }
  let zero = true;
  let ans = "";
  for (let digit of stack) {
    if (zero && digit == "0") continue;
    zero = false;
    ans += digit;
  }
  return !ans ? "0" : ans;
};

let result = removeKdigits('9', 1)

console.log(result);
