var minMeetingRooms = function (
  intervals,
  s = [],
  e = [],
  l = 0,
  r = 0,
  n = 0
) {
  intervals.forEach((v) => (s.push(v[0]), e.push(v[1])));
  s.sort((a, b) => a - b);
  e.sort((a, b) => a - b);
  console.log(s, e);
  while (l < s.length) e[r] > s[l] ? n++ : r++, l++;
  return n;
};

let res = minMeetingRooms([
  [2, 3],
  [1, 2],
  [1, 4],
]);
console.log(res, "res");
