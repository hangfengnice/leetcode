var exclusiveTime = function (n, logs) {
  let stack = [];
  let res = new Array(n).fill(0);

  let s = logs[0].split(":");

  stack.push(parseInt(s[0]));

  let i = 1
  let prev = parseInt(s[2]);

  while (i < logs.length) {
    s = logs[i].split(":");
    if (s[1] === "start") {
      if (stack.length) {
        res[stack[stack.length - 1]] += parseInt(s[2]) - prev;
      }
      stack.push(parseInt(s[0]));
      prev = parseInt(s[2]);
    } else {
      let index = stack[stack.length - 1]
      let result = parseInt(s[2]) - prev + 1;
      let val = res[index]
      res[index] = val + result
      stack.pop();
      prev = parseInt(s[2]) + 1;
    }
    i++;
  }
  return res;
};

let res = exclusiveTime(
  1,
["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5"]
);

console.log(res, "res");
