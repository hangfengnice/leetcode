var replaceWords = function (dictionary, sentence) {
  const dictionarySet = new Set();
  for (const root of dictionary) {
    dictionarySet.add(root);
  }
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (dictionarySet.has(word.slice(0, j + 1))) {
        words[i] = word.slice(0, j + 1);
        break;
      }
    }
  }
  return words.join(" ");
};

// 字典树
var replaceWords = function (dictionary, sentence) {
  const trie = new Trie();

  for (const word of dictionary) {
    let cur = trie;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!cur.children.has(c)) {
        cur.children.set(c, new Trie());
      }
      cur = cur.children.get(c);
    }
    cur.children.set("#", new Trie());
  }
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = findRoot(words[i], trie);
  }
  return words.join(" ");

  function findRoot(word, trie) {
    let root = "";
    let cur = trie;
    for (let i = 0; i < word.length; i++) {
      if (cur.children.has("#")) {
        return root;
      }
      const c = word[i];
      if (!cur.children.has(c)) {
        return word;
      }
      root += c;
      cur = cur.children.get(c);
    }
    return root;
  }

  function Trie() {
    this.children = new Map();
  }
};
