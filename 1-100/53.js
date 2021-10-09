var maxSubArray = function (nums) {
  let n = nums.length;
  if (!n) return 0;
  let dp = [nums[0]];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }
  return Math.max(...dp);
};

// 线段树
function Status(l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
}
var maxSubArray = function (nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};
function getInfo(a, l, r) {
  if (l === r) {
    return new Status(a[l], a[l], a[l], a[l]);
  }
  const m = (l + r) >> 1;
  const lSub = getInfo(a, l, m);
  const rSub = getInfo(a, m + 1, r);
  return pushUp(lSub, rSub);
}
function pushUp(l, r) {
  const iSum = l.iSum + r.iSum;
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum);
}
