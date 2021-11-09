var racecar = function (target) {
  let queue = [[0, 1]];
  let visited = new Set(["0,1"]);

  let res = 0;
  while (queue.length) {
    let tmp = [];
    for (let i = 0; i < queue.length; i++) {
      let [pos, speed] = queue[i];

      if (pos === target) return res;

      let newP = pos + speed,
        newS = speed * 2;

      addQueue(newP, newS, tmp);

      (newP = pos), (newS = speed > 0 ? -1 : 1);
      addQueue(newP, newS, tmp);
    }
    res++;
    queue = tmp;
  }
  return -1;

  function addQueue(pos, speed, tmp) {
    let key = `${pos},${speed}`;

    if (!visited.has(key) && pos > 0 && pos < 2 * target) {
      visited.add(key);
      tmp.push([pos, speed]);
    }
  }
};

// 规划
var racecar = function (target) {
  let dp = new Array(target + 1).fill(Infinity);

  for (let i = 1; i <= target; i++) {
    let j = 1,
      cnt1 = 1;
    for (; j < i; j = (1 << ++cnt1) - 1) {
      for (let k = 0, cnt2 = 0; k < j; k = (1 << cnt2) - 1) {
        dp[i] = Math.min(dp[i], cnt1 + 1 + cnt2 + 1 + dp[i - (j - k)]);
      }
    }
    dp[i] = Math.min(dp[i], cnt1 + (j === i ? 0 : 1 + dp[j - i]));
  }

  return dp[target];
};

let res = racecar(2);
console.log(res, "res");
