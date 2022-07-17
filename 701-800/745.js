/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  this.dictionary = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const m = word.length;
    for (let prefix = 1; prefix <= m; prefix++) {
      for (let suffix = 1; suffix <= m; suffix++) {
        this.dictionary.set(
          word.slice(0, prefix) + "#" + word.slice(m - suffix),
          i
        );
      }
    }
  }
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  let { dictionary } = this;
  let key = pref + "#" + suff;
  if (dictionary.has(key)) {
    return dictionary.get(key);
  }
  return -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

// 字典树
function Trie() {
  this.children = new Map();
  this.weight = new Map();
}

var WordFilter = function (words) {
  this.trie = new Trie();
  weightKey = "##";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let cur = this.trie;

    let m = word.length;
    for (let j = 0; j < m; j++) {
      let tmp = cur;

      for (let k = j; k < m; k++) {
        let key = word[k] + "#";
        if (!tmp.children.has(key)) {
          tmp.children.put(key, new Trie());
        }
        tmp = tmp.children.get(key);
        tmp.weight.set(weightKey, i);
      }
      tmp = cur;
      for (let k = j; k < m; k++) {
        let key = "#" + word[m - k - 1];
        if (!tmp.children.has(key)) {
          tmp.children.set(key, new Trie());
        }
        tmp = tmp.children.get(key);
        tmp.weight.set(weightKey, i);
      }

      let key = word[j] + word[m - j - 1];
      if (!cur.children.has(key)) {
        cur.children.set(key, new Trie());
      }
      cur = cur.children.get(key);
      cur.weight.set(weightKey, i);
    }
  }
};
WordFilter.prototype.f = function (pref, suff) {
  let cur = this.trie;
  let m = Math.max(pref.length, suff.length);
  for (let i = 0; i < m; i++) {
    let c1 = i < pref.length ? pref[i] : "#";
    let c2 = i < suff.length ? suff[suff.length - i - 1] : "#";
    let key = c1 + c2;

    if (!cur.children.has(key)) {
      return -1;
    }
    cur = cur.children.get(key);
  }
  return cur.weight.get("##");
};

class WordFilter {
  constructor(words) {
    this.words = words;
  }
  f(pref, suff) {
    const n = pref.length,
      m = suff.length;
    let { words } = this;
    let l = words.length;
    for (let k = l - 1; k >= 0; k--) {
      const cur = words[k];
      const len = cur.length;
      if (len < n || len < m) continue;
      let ok = true;
      for (let i = 0; i < n; i++) {
        if (cur[i] !== pref[i]) {
          ok = false;
          break;
        }
      }
      for (let i = m - 1; i >= 0 && ok; i--) {
        if (cur[len - 1 - i] !== suff[m - 1 - i]) {
          ok = false;
          break;
        }
      }
      if (ok) {
        return k;
      }
    }
    return -1;
  }
}
