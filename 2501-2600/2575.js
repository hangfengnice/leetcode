var divisibilityArray = function (word, m) {
  const res = []

  let cur = 0
  for (const c of word) {
    cur = (cur * 10 + (c - 0)) % m
    res.push(cur === 0 ? 1 : 0)
  }
  return res
}
