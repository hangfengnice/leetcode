var intervalIntersection = function (firstList, secondList) {
  let ans = [];
  let i = (j = 0);
  let lenA = firstList.length,
    lenB = secondList.length;
  while (i < lenA && j < lenB) {
    let lo = Math.max(firstList[i][0], secondList[j][0]);
    let hi = Math.min(firstList[i][1], secondList[j][1]);
    if (lo <= hi) {
      ans.push([lo, hi]);
    }
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
};
