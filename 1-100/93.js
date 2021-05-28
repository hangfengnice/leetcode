var restoreIpAddresses = function (s) {
  const SEG_COUNT = 4;
  const segments = new Array(SEG_COUNT);

  const ans = [];

  dfs(s, 0, 0);
  return ans;

  function dfs(s, segId, segStart) {
    if (segId == SEG_COUNT) {
      if (segStart == s.length) {
        ans.push(segments.join("."));
      }
      return;
    }
    if (segStart == s.length) {
      return;
    }
    if (s[segStart] == "0") {
      segments[segId] = 0;
      dfs(s, segId + 1, segStart + 1);
    }

    let addr = 0;
    for (let segEnd = segStart; segEnd < s.length; segEnd++) {
      addr = addr * 10 + (s[segEnd] - 0);
      if (addr > 0 && addr <= 0xff) {
        segments[segId] = addr;
        dfs(s, segId + 1, segEnd + 1);
      } else {
        break;
      }
    }
  }
};

var restoreIpAddresses = function (s) {
  const res = [];

  dfs([], 0);

  return res;

  function dfs(subRes, start) {
    if (subRes.length == 4 && start == s.length) {
      res.push(subRes.join("."));
      return;
    }

    if (subRes.length == 4 && start < s.length) {
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) return;
      if (len != 1 && s[start] == "0") return;

      const str = s.substring(start, start + len);

      if (len == 3 && +str > 255) return;
      subRes.push(str);
      dfs(subRes, start + len);
      subRes.pop();
    }
  }
};
