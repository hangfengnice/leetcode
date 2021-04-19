let n = nums.length,
ans = [];
if (n < 4) {
return ans;
}

nums.sort((a, b) => a - b);
for (let i = 0; i < n - 3; i++) {
if (nums[i] > target) break;

if (i > 0 && nums[i] == nums[i - 1]) continue;

if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;

if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue;

for (let j = i + 1; j < n - 2; j++) {
  if (nums[i] + nums[j] > target) break;
  if (j > i + 1 && nums[j] == nums[j - 1]) {
    continue;
  }
  if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;

  if (nums[i] + nums[j] + nums[n - 1] + nums[n - 2] < target) continue;

  let l = j + 1,
    r = n - 1;
  while (l < r) {
    let sum = nums[i] + nums[j] + nums[l] + nums[r];
    if (sum == target) {
      ans.push([nums[i], nums[j], nums[l], nums[r]]);
      while (l < r && nums[l] == nums[l + 1]) {
        l++;
      }
      l++;
      while (l < r && nums[r] == nums[r - 1]) {
        r--;
      }
      r--;
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }
}
}
return ans;
