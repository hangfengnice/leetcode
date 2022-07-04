var minimumAbsDifference = function (arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  let best = Number.MAX_VALUE;
  let ans = [];
  for (let i = 0; i < n - 1; i++) {
    let delta = arr[i + 1] - arr[i];
    if (delta < best) {
      best = delta;
      ans = [[arr[i], arr[i + 1]]];
    } else if (delta === best) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }
  return ans;
};
