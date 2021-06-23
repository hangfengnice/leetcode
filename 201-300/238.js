// [除自身以外数组的乘积](https://leetcode-cn.com/problems/product-of-array-except-self/solution/chu-zi-shen-yi-wai-shu-zu-de-cheng-ji-by-leetcode-/)
var productExceptSelf = function (nums) {
  let length = nums.length;
  let answer = new Array(length);

  answer[0] = 1;
  for (let i = 1; i < length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }
  return answer;
};
