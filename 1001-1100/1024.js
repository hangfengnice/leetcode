var videoStitching = function (clips, time) {
  let dp = new Array(time + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= time; i++) {
    for (let clip of clips) {
      if (clip[0] < i && i <= clip[1]) {
        dp[i] = Math.min(dp[i], dp[clip[0]] + 1);
      }
    }
  }
  return dp[time] === Infinity ? -1 : dp[time];
};

// 贪心
var videoStitching = function (clips, time) {
  let maxn = new Array(time).fill(0);
  let last = 0,
    ret = 0,
    pre = 0;
  for (let clip of clips) {
    if (clip[0] < time) {
      maxn[clip[0]] = Math.max(maxn[clip[0]], clip[1]);
    }
  }
  for (let i = 0; i < time; i++) {
    last = Math.max(last, maxn[i]);

    if (i === last) return -1;
    if (i === pre) {
      ret++;
      pre = last;
    }
  }
  return ret;
};
let res = videoStitching(clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10)

console.log(res, 'res');
