var WordDictionary = function () {
  this.trieRoot = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.trieRoot.insert(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return dfs(0, this.trieRoot, word);
};

function dfs(index, node, word) {
  if (index === word.length) return node.isEnd;

  const ch = word[index];
  if (ch !== ".") {
    const child = node.children[ch.codePointAt() - 97];
    if (child && dfs(index + 1, child, word)) return true;
  } else {
    for (let child of node.children) {
      if (child && dfs(index + 1, child, word)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class TrieNode {
  constructor() {
    this.children = new Array(26).fill(0);
    this.isEnd = false;
  }
  insert(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      const index = ch.codePointAt() - 97;
      if (node.children[index] === 0) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.isEnd = true;
  }
  getChildren() {
    return this.children;
  }
  isEnd() {
    return this.isEnd;
  }
}
