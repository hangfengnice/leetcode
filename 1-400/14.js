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
