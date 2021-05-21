var topKFrequent = function(words, k) {
  let map = {}
  for(let word of words) {
    map[word] = (map[word] || 0) + 1
  }
  let keys = Object.keys(map).sort((a, b) => {
    return map[a] === map[b] ? a.localeCompare(b) : map[b] - map[a]
  })

  return keys.slice(0, k)
};

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], k = 2)
