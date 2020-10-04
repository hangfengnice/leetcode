// 超时间了
var lengthOfLongestSubstring = function (s) {
  let len = s.length, ans = 0

  for(let i = 0; i < len; i ++) {
    for(let j = i + 1; j <= len; j ++) {
      if (allUnique(i, j)) ans = Math.max(ans, j - i)
    }
  }
  return ans

  function allUnique(start, end) {
    let set = new Set()
    for(let i = start; i < end; i ++) {
      if (set.has(s[i])) return false
      set.add(s[i])
    }
    return true
  }
} 

// 滑动窗口
var lengthOfLongestSubstring = function (s) {

}

let res = lengthOfLongestSubstring("abcabcbb")

console.log(res)