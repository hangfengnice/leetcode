var MagicDictionary = function () {};

MagicDictionary.prototype.buildDict = function (dictionary) {
  this.words = dictionary;
};

MagicDictionary.prototype.search = function (searchWord) {
  for (const word of this.words) {
    if (word.length !== searchWord.length) {
      continue;
    }
    let diff = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== searchWord[i]) {
        diff++;
        if (diff > 1) {
          break;
        }
      }
    }
    if (diff === 1) {
      return true;
    }
  }
  return false;
};

// 字典树
var MagicDictionary = function () {
  this.root = new Trie()
}
MagicDictionary.prototype.buildDict = function (dictionary) {
  for(const word of dictionary) {
    let cur = this.root
    for(let i = 0; i < word.length; i ++) {
      const ch = word[i]
      const idx = ch.charCodeAt() - 97
      if (!cur.child[idx]) {
        cur.child[idx] = new Trie()
      }
      cur = cur.child[idx];
    }
    cur.isFinished = true
  }
}
MagicDictionary.prototype.search = function (searchWord) {
  return dfs(searchWord, this.root, 0, false)
}
function dfs(searchWord, node, pos, modified) {
  if (pos === searchWord.length) {
    return modified && node.isFinished
  }
  let idx = searchWord[pos].charCodeAt() - 97

  if (node.child[idx]) {
    if (dfs(searchWord, node.child[idx], pos + 1, modified)) {
      return true
    }
  }

  if (!modified) {
    for(let i = 0; i < 26; i ++) {
      if (i !== idx && node.child[i]) {
        if (dfs(searchWord, node.child[i], pos + 1, true)) {
          return true
        }
      }
    }
  }
  return false
}
function Trie() {
  this.isFinished = false
  this.child = []
}
