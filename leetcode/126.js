var findLadders = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  wordSet.add(beginWord)

  if (!wordSet.has(endWord)) return []

  const levelMap = new Map()
  const wordMap = new Map()
  const visited = new Set()
  const queue = [beginWord]

  visited.add(beginWord)

  let finished = false
  let level = 0

  levelMap.set(beginWord, 0)
  while(queue.length) {
    const levelSize = queue.length
    level ++
    for(let i = 0; i < levelSize; i ++) {
      const word = queue.shift()

      for(let i = 0; i < word.length; i ++) {
        for(let c = 97; c <= 122; c ++) {
          const newWord = word.slice(0, i) + String.fromCodePoint(c) + word.slice(i + 1,)
          if (!wordSet.has(newWord)) continue

          if (wordMap.has(newWord)) {
            wordMap.get(newWord).push(word)
          } else {
            wordMap.set(newWord, [word])
          }
        }
      }
    }
  }
};
