var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return "";
  let prefix = strs[0];
  let count = strs.length;

  for (let i = 1; i < count; i++) {
    prefix = longestCommonPrefix(prefix, strs[i]);

    if (!prefix.length) {
      break;
    }
  }
  return prefix;

  function longestCommonPrefix(str1, str2) {
    let length = Math.min(str1.length, str2.length);

    let index = 0;
    while (index < length && str1[index] == str2[index]) {
      index++;
    }
    return str1.slice(0, index);
  }
};

var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return "";

  let length = strs[0].length;
  let count = strs.length;

  for (let i = 0; i < length; i++) {
    const c = strs[0][i];
    for (let j = 1; j < count; j++) {
      if (i == strs[j].length || strs[j][i] != c) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) {
    return "";
  } else {
    return longestCommonPrefixSS(strs, 0, strs.length - 1);
  }

  function longestCommonPrefixSS(strs, start, end) {
    if (start == end) {
      return strs[start];
    } else {
      let mid = Math.floor((end - start) / 2) + start;

      let lcpLeft = longestCommonPrefixSS(strs, start, mid);
      let lcpRight = longestCommonPrefixSS(strs, mid + 1, end);

      return commonPrefix(lcpLeft, lcpRight);
    }
  }
  function commonPrefix(lcpLeft, lcpRight) {
    let minLength = Math.min(lcpLeft.length, lcpRight.length);

    for (let i = 0; i < minLength; i++) {
      if (lcpLeft[i] != lcpRight[i]) {
        return lcpLeft.slice(0, i);
      }
    }
    return lcpLeft.slice(0, minLength);
  }
};

var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return ''

  let minLength = Number.MAX_SAFE_INTEGER

  for(let str of strs) {
    minLength = Math.min(str.length, minLength)
  }

  let low = 0, high = minLength

  while(low < high) {
    console.log(1);
    let mid = Math.floor((high - low + 1) / 2) + low
    if (isCommonPrefix(strs, mid)) {
      low = mid
    } else {
      high = mid - 1
    }
  }
  return strs[0].slice(0, low)

  function isCommonPrefix(strs, length) {
    let start = strs[0]
    let count = strs.length
    for(let i = 1; i < count; i ++) {
      let str = strs[i]
      for(let j = 0; j < length; j ++) {
        if (start[j] != str[j]) return false
      }
    }
    return true
  }

}

let res = longestCommonPrefix([['a']])
console.log(res);
