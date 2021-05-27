var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let l = 1, r = n, mid,

      while(l <= n) {
        mid = ((r - l) >> 1) + l
        if (!isBadVersion(mid)) {
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      return l
  };
};
