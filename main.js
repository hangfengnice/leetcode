var Trie = function() {
  this.children = {}
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.children
  for(let ch of word) {
    if (!node[ch]) {
      node[ch] = {}
    }
    node = node[ch]
  }
  node.isEnd = true
};

Trie.prototype.searchPrefix = function (word) {
  let node = this.children
  for(let ch of word) {
    if (!node[ch]) return false
    node = node[ch]
  }
  return node
}


/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.searchPrefix(word)
  return node && node.isEnd
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.searchPrefix(prefix)
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
