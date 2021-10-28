var removeDuplicates = function (s) {
  let stk = [];
  for (let w of s) {
    let length = stk.length;
    if (length && stk[length - 1] === w) {
      stk.pop();
    } else {
      stk.push(w);
    }
  }
  return stk.join("");
};

let res = removeDuplicates("aaa");

console.log(res, " res");
