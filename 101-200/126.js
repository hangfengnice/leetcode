// var findLadders = function (beginWord, endWord, wordList) {
//   const wordSet = new Set(wordList);
//   wordSet.add(beginWord);

//   if (!wordSet.has(endWord)) return [];

//   const levelMap = new Map();
//   const wordMap = new Map();
//   const visited = new Set();
//   const queue = [beginWord];

//   visited.add(beginWord);

//   let finished = false;
//   let level = 0;

//   levelMap.set(beginWord, 0);
//   while (queue.length) {
//     const levelSize = queue.length;
//     level++;
//     for (let i = 0; i < levelSize; i++) {
//       const word = queue.shift();

//       for (let i = 0; i < word.length; i++) {
//         for (let c = 97; c <= 122; c++) {
//           const newWord =
//             word.slice(0, i) + String.fromCodePoint(c) + word.slice(i + 1);
//           if (!wordSet.has(newWord)) continue;

//           if (wordMap.has(newWord)) {
//             wordMap.get(newWord).push(word);
//           } else {
//             wordMap.set(newWord, [word]);
//           }

//           if (visited.has(newWord)) continue;

//           if (newWord == endWord) finished = true;

//           levelMap.set(newWord, level);

//           queue.push(newWord);
//           visited.add(newWord);
//         }
//       }
//     }
//   }

//   if (!finished) return [];
//   const res = [];

//   dfs([], beginWord, endWord);
//   return res;

//   function dfs(path, beginWord, word) {
//     if (word == beginWord) {
//       res.push([beginWord, ...path]);
//       return;
//     }

//     path.unshift(word);

//     if (wordMap.get(word)) {
//       for (const parent of wordMap.get(word)) {
//         if (levelMap.get(parent) + 1 == levelMap.get(word)) {
//           dfs(path, beginWord, parent);
//         }
//       }
//     }

//     path.shift();
//   }
// };

var findLadders = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return [];

  let result = [];

  let queue = [[beginWord]];

  while (queue.length) {
    let levelSize = queue.length;

    const levelSet = new Set();

    let finished = false;

    while (levelSize) {
      let path = queue.pop();
      const word = path[path.length - 1];

      for (let i = 0; i < word.length; i++) {
        for (let j = 97; j < 123; j++) {
          const newChar = String.fromCodePoint(j);

          if (newChar == word[i]) continue;

          const newWord = word.slice(0, i) + newChar + word.slice(i + 1);

          if (wordSet.has(newWord)) {
            if (newWord == endWord) {
              result.push([...path, newWord]);
              finished = true;
            } else {
              queue.unshift([...path, newWord]);
              levelSet.add(newWord);
            }
          }
        }
      }
      levelSize--;
    }

    if (finished) {
      break;
    }
    for (const word of levelSet) {
      wordSet.delete(word);
    }
  }
  return result;
};

var findLadders = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return [];
  }

  let result = [];
  let queue = [[beginWord]];

  while (queue.length) {
    let levelSize = queue.length;

    const levelSet = new Set();

    let found = false;

    while (levelSize) {
      let path = queue.shift();
      const word = path[path.length - 1];
      for (const newWord of wordSet) {
        let diff = 0;

        for (let i = 0; i < word.length; i++) {
          if (word[i] != newWord[i]) {
            diff++;
          }
          if (diff > 1) break;
        }

        if (diff == 1) {
          if (newWord == endWord) {
            result.push([...path, endWord]);
            found = true;
          } else {
            queue.push([...path, newWord]);
            levelSet.add(newWord);
          }
        }
      }
      levelSize --
    }

    if (found) {
      break;
    }

    for (let word of levelSet) {
      wordSet.delete(word);
    }
  }
  return result;
};

let res = findLadders(
  (beginWord = "hit"),
  (endWord = "cog"),
  (wordList = ["hot", "dot", "dog", "lot", "log", "cog"])
);

console.log(res);
