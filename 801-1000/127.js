var ladderLength = function (beginWord, endWord, wordList) {
  if (!endWord || !wordList.includes(endWord)) {
    return 0;
  }

  var comboDicts = {};

  var len = beginWord.length;
  for (let i = 0; i < wordList.length; i++) {
    for (let r = 0; r < len; r++) {
      var newWord =
        wordList[i].substring(0, r) + "*" + wordList[i].substring(r + 1, len);
      !comboDicts[newWord] && (comboDicts[newWord] = []);
      comboDicts[newWord].push(wordList[i]);
    }
  }

  var queue = [[beginWord, 1]];
  var visited = { [beginWord]: true };
  while (queue.length) {
    var currNode = queue.shift();
    var currWord = currNode[0];
    var currLevel = currNode[1];

    for (let i = 0; i < len; i++) {
      var newWord =
        currWord.substring(0, i) + "*" + currWord.substring(i + 1, len);

      if (newWord in comboDicts) {
        var tempWords = comboDicts[newWord];

        for (let z = 0; z < tempWords.length; z++) {
          if (tempWords[z] == endWord) {
            return currLevel + 1;
          }

          if (!visited[tempWords[z]]) {
            visited[tempWords[z]] = true;
            queue.push([tempWords[z], currLevel + 1]);
          }
        }
      }
    }
  }
  return 0;
};

var ladderLength = function (beginWord, endWord, wordList) {
  if (!endWord || !wordList.includes(endWord)) {
    return 0;
  }

  var visited = { [beginWord]: true };

  var minLevel = Number.MAX_SAFE_INTEGER;
  var level = 1;

  console.log("hello");
  recurse(beginWord, level);
  return (minLevel ^ Number.MAX_SAFE_INTEGER) == 0 ? 0 : minLevel;

  function recurse(beginWord, level) {
    if (beginWord == endWord) {
      minLevel = Math.min(level, minLevel);
    }

    for (var i = 0; i < wordList.length; i++) {
      var tempWorld = wordList[i];
      let diff = 0;
      for (let r = 0; r < tempWorld.length; r++) {
        if (beginWord[r] != tempWorld[r]) {
          diff++;
          if (diff > 1) {
            break;
          }
        }
      }

      if (diff == 1 && !visited[tempWorld]) {
        visited[tempWorld] = true;
        recurse(tempWorld, level + 1);
        visited[tempWorld] = false;
      }
    }
  }
};

var ladderLength = function () {
  if (!endWord || wordList.indexOf(endWord) == -1) {
    return 0;
  }
  var comboDicts = {};
  var len = beginWord.length;
  for (var i = 0; i < wordList.length; i++) {
    for (var r = 0; r < len; r++) {
      var newWord =
        wordList[i].substring(0, r) + "*" + wordList[i].substring(r + 1, len);
      !comboDicts[newWord] && (comboDicts[newWord] = []);
      comboDicts[newWord].push(wordList[i]);
    }
  }

  var queueBegin = [[beginWord, 1]];
  var queueEnd = [[endWord, 1]];

  var visitedBegin = {};
  visitedBegin[beginWord] = 1;
  var visitedEnd = {};
  visitedEnd[endWord] = 1;
  while (queueBegin.length > 0 && queueEnd.length > 0) {
    // fromBegin
    var ans = visitWord(queueBegin, visitedBegin, visitedEnd);
    if (ans > -1) {
      return ans;
    }
    // formEnd
    ans = visitWord(queueEnd, visitedEnd, visitedBegin);
    if (ans > -1) {
      return ans;
    }
  }
  return 0;

  function visitWord(currQueue, currVisited, otherVisited) {
    var currNode = currQueue.shift();
    var currWord = currNode[0];
    var currLevel = currNode[1];
    for (let i = 0; i < len; i++) {
      var newWord =
        currWord.substring(0, i) + "*" + currWord.substring(i + 1, len);
      if (newWord in comboDicts) {
        var tmpWords = comboDicts[newWord];
        for (var z = 0; z < tmpWords.length; z++) {
          if (otherVisited[tmpWords[z]] != undefined) {
            return currLevel + otherVisited[tmpWords[z]];
          }
          if (currVisited[tmpWords[z]] == undefined) {
            currVisited[tmpWords[z]] = currLevel + 1;
            currQueue.push([tmpWords[z], currLevel + 1]);
          }
        }
      }
    }
    return -1;
  }
};

var ladderLength = function (beginWord, endWord, wordList) {
  if (!endWord || !wordList.includes(endWord)) {
    return 0;
  }
  var wordListHash = {};
  for (let i = 0; i < wordList.length; i++) {
    wordListHash[wordList[i]] = true;
  }

  var gens = "abcdefghigklmnopqrstuvwxyz";
  var level = 0;
  var queue = [[beginWord, 1]];

  while (queue.length) {
    var curr = queue.pop();
    level = curr[1];
    let arrCurr = curr[0];
    if (arrCurr == endWord) {
      return level;
    }

    for (let i = 0; i < arrCurr.length; i++) {
      for (let r = 0; r < gens.length; r++) {
        if (gens[r] != arrCurr[i]) {
          var strCurr = arrCurr.slice(0, i) + gens[r] + arrCurr.slice(i + 1);
          if (wordListHash[strCurr]) {
            queue.unshift([strCurr, level + 1]);
            wordListHash[strCurr] = false;
          }
        }
      }
    }
  }
  return 0;
};

var ladderLength = function (beginWord, endWord, wordList) {
  let wordListSet = new Set(wordList);
  if (!wordListSet.has(endWord)) return 0;

  let beginSet = new Set();
  beginSet.add(beginWord);

  let endSet = new Set();
  endSet.add(endWord);

  let level = 1;

  while (beginSet.size) {
    let nextBeginSet = new Set();
    for (let key of beginSet) {
      for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < 26; j++) {
          let s = String.fromCodePoint(97 + j);
          if (s != key[i]) {
            let newWord = key.slice(0, i) + s + key.slice(i + 1);

            if (endSet.has(newWord)) {
              return level + 1;
            }

            if (wordListSet.has(newWord)) {
              nextBeginSet.add(newWord);
              wordListSet.delete(newWord);
            }
          }
        }
      }
    }
    beginSet = nextBeginSet;
    level++;
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet];
    }
  }

  return 0;
};
let res = ladderLength(
  "ymain",
"oecij",
["ymann","yycrj","oecij","ymcnj","yzcrj","yycij","xecij","yecij","ymanj","yzcnj","ymain"]
);

console.log(res, "res");
