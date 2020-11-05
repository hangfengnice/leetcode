var ladderLength = function (beginWord, endWord, wordList) {
  if (!endWord || wordList.indexOf(endWord) == -1) return 0;

  var comboDicts = {};
  var len = beginWord.length;

  for (let i = 0; i < wordList.length; i++) {
    for (var r = 0; r < len; r++) {
      var newWord =
        wordList[i].substring(0, r) + "*" + wordList[i].substring(r + 1, len);
      !comboDicts[newWord] && (comboDicts[newWord] = []);
      comboDicts[newWord].push(wordList[i]);
    }
  }
  var queue = [[beginWord, 1]];
  var visited = { beginWord: true };
  while (queue.length) {
    let [curword, curlevel] = queue.shift();
    for (let i = 0; i < len; i++) {
      var newword =
        curword.substring(0, i) + "*" + curword.substring(i + 1, len);
      if (newword in comboDicts) {
        var tempwods = comboDicts[newword];
        for (var z = 0; z < tempwods.length; z++) {
          if (tempwods[z] == endWord) {
            return curlevel + 1;
          }
          if (!visited[tempwods[z]]) {
            visited[tempwods[z]] = true;
            queue.push([tempwods[z], curlevel + 1]);
          }
        }
      }
    }
  }
  return 0;
};

let result = ladderLength("hit", "cog", [
  "hot",
  "dot",
  "dog",
  "lot",
  "log",
  "cog",
]);
console.log(result);
