var findRelativeRanks = function (score) {
  const sortedNums = [...score].sort((a, b) => b - a);

  const map = new Map();
  sortedNums.forEach((item, index) => {
    map.set(item, `${index + 1}`);
  });
  return score.map((i) => {
    if (map.get(i) === "1") return "Gold Medal";
    if (map.get(i) === "2") return "Silver Medal";
    if (map.get(i) === "3") return "Bronze Medal";
    return map.get(i);
  });
};
