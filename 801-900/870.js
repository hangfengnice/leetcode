var advantageCount = function (nums1, nums2) {
  let sorta = nums1.slice();
  sorta.sort((a, b) => a - b);
  let sortb = nums2.slice();
  sortb.sort((a, b) => a - b);

  let map = {}
  for(let i = 0; i < nums2.length; i ++) {
    map[nums2[i]] = -1
  }
  let remaining = [], j = 0
  for(let a of sorta) {
    if (a > sortb[j]) {
      map[sortb[j ++]] = a
    } else {
      remaining.push(a)
    }
  }
  let ans = []
  for(let i = 0; i < nums2.length; i ++) {
    if (map[nums2[i]] !== undefined) {
      ans[i] = map[nums2[i]]
    } else {
      ans[i] = remaining.pop()
    }
  }
  return ans
};


let res = advantageCount(A = [2,7,11,15], B = [1,10,4,11])
console.log(res, 'res');
