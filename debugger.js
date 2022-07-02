var diffWaysToCompute = function (expression) {
  const ADDITION = -1;
  const SUBTRACTION = -2;
  const MULTIPLICATION = -3;
  const ops = [];
  let len = expression.length;
  debugger
  for (let i = 0; i < len; ) {
    let ch = expression[i];
    if (["+", "-", "*"].includes(ch)) {
      if (ch === "+") {
        ops.push(ADDITION);
      } else if (ch === "-") {
        ops.push(SUBTRACTION);
      } else {
        ops.push(MULTIPLICATION);
      }
      i ++
    } else {
      let t = 0;
      while (i < len && !["+", "-", "*"].includes(expression[i])) {
        t = expression[i] - 0 + t * 10;
        i++;
      }
      ops.push(t);
    }
  }
  debugger

  let opsLen = ops.length;

  const dp = new Array(opsLen).fill(0).map(() => new Array(opsLen).fill(0));

  for (let i = 0; i < opsLen; i++) {
    for (let j = 0; j < opsLen; j++) {
      dp[i][j] = [];
    }
  }

  for (let i = 0; i < opsLen; i += 2) {
    dp[i][i].push(ops[i]);
  }

  for (let i = 3; i <= opsLen; i++) {
    for (let j = 0; j + i <= opsLen; j += 2) {
      let l = j;
      let r = j + i - 1;
      for (let k = j + 1; k < r; k += 2) {
        const left = dp[l][k - 1];
        const right = dp[k + 1][r];
        for (const num1 of left) {
          for (const num2 of right) {
            if (ops[k] === ADDITION) {
              dp[l][r].push(num1 + num2);
            } else if (ops[k] === SUBTRACTION) {
              dp[l][r].push(num1 - num2);
            } else if (ops[k] === MULTIPLICATION) {
              dp[l][r].push(num1 * num2);
            }
          }
        }
      }
    }
  }

  return dp[0][opsLen - 1];
};

let res = diffWaysToCompute("2-1-1")
console.log(res, 'res');
