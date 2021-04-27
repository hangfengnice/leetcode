// var longestPalindrome = function (s) {
//   let n = s.length;
//   let dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
//   let ans = "";
//   for (let l = 0; l < n; l++) {
//     for (let i = 0; i + l < n; i++) {
//       let j = i + l;

//       if (l == 0) {
//         dp[i][j] = true;
//       } else if (l == 1) {
//         dp[i][j] = s[i] == s[j];
//       } else {
//         dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1];
//       }
//       if (dp[i][j] && l + 1 > ans.length) {
//         ans = s.slice(i, i + l + 1);
//       }
//     }
//   }
//   return ans;
// };

// var longestPalindrome = function (s) {
//   if (!s || s.length < 1) {
//     return "";
//   }

//   let start = 0,
//     end = 0;

//   for (let i = 0; i < s.length; i++) {
//     let len1 = expandAroundCenter(s, i, i);
//     let len2 = expandAroundCenter(s, i, i + 1);

//     let len = Math.max(len1, len2);
//     console.log(len, "len");

//     if (len > end - start) {
//       start = i - Math.floor(len - 1) / 2;
//       end = i + Math.floor(len / 2);
//     }
//     console.log(start, end);
//   }
//   return s.slice(start, end + 1);

//   function expandAroundCenter(s, l, r) {
//     while (l >= 0 && r < s.length && s[l] == s[r]) {
//       --l;
//       ++r;
//     }
//     return r - l - 1;
//   }
// };

var longestPalindrome = function (s) {
  let len = s.length;
  if (len < 2) {
    return s;
  }
  let str = `#${s.split("").join("#")}#`;

  let sLen = 2 * len + 1;
  let maxLen = 1;

  let start = 0;
  for (let i = 0; i < sLen; i++) {
    let curLen = centerSpread(str, i);

    if (curLen > maxLen) {
      maxLen = curLen
      start = Math.floor((i - maxLen) / 2)
    }
  }
  console.log(start,);

  return s.slice(start, maxLen)

  function centerSpread(s, center) {
    let len = s.length
    let i = center - 1;
    let j = center + 1;

    let step = 0;

    while (i >= 0 && j < len && s[i] == s[j]) {
      i--;
      j++;
      step ++;
    }

    return step;
  }
};

let res = longestPalindrome("cbbd");
console.log(res);
