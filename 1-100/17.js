var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const res = [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  dfs("", 0);
  return res;
  function dfs(curStr, i) {
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }
    const letters = map[digits[i]];
    for (const letter of letters) {
      dfs(curStr + letter, i + 1);
    }
  }
};

var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let queue = [""];

  for (let i = 0; i < digits.length; i++) {
    const levelSize = queue.length;

    for (let j = 0; j < levelSize; j++) {
      const curStr = queue.shift();

      const letters = map[digits[i]];

      for (const l of letters) {
        queue.push(curStr + l);
      }
    }
  }
  return res;
};
