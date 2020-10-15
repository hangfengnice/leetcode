var hIndex = function (citations) {
  let len = citations.length
  if (!len) return 0
  citations = citations.sort((a, b) => a - b);
  if (len % 2) {
    return citations[~~(len / 2)];
  } else {
    return citations[~~(len / 2) - 1];
  }
};

var hIndex = function (citations) {
  citations = citations.sort((a, b) => a - b)
  let i = 0, n = citations.length
  while(i < n && citations[n - 1 - i] > i) {
    i ++
  }
  return i
}

let result = hIndex([1, 2, 3]);

console.log(result);
